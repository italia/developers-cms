{{- define "dcms.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" }}
{{- end }}

{{- define "dcms.fullname" -}}
{{- if .Values.fullnameOverride }}
{{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- $name := default .Chart.Name .Values.nameOverride }}
{{- if contains $name .Release.Name }}
{{- .Release.Name | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- printf "%s-%s" .Release.Name $name | trunc 63 | trimSuffix "-" }}
{{- end }}
{{- end }}
{{- end }}

{{- define "dcms.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" }}
{{- end }}

{{- define "dcms.labels" -}}
helm.sh/chart: {{ include "dcms.chart" . }}
{{ include "dcms.selectorLabels" . }}
{{- if .Chart.AppVersion }}
app.kubernetes.io/version: {{ .Chart.AppVersion | quote }}
{{- end }}
app.kubernetes.io/managed-by: {{ .Release.Service }}
{{- end }}

{{- define "dcms.selectorLabels" -}}
app.kubernetes.io/name: {{ include "dcms.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end }}

{{- define "dcms.databaseUrl" -}}
{{- if .Values.app.databaseUrl }}
{{- .Values.app.databaseUrl }}
{{- else }}
{{- fail "app.databaseUrl è obbligatorio (PostgreSQL esterno): impostarlo nel file values dell'ambiente" }}
{{- end }}
{{- end }}

{{- define "dcms.payloadSecret" -}}
{{- if .Values.app.payloadSecret }}
{{- .Values.app.payloadSecret }}
{{- else }}
{{- fail "app.payloadSecret è obbligatorio: impostarlo nel file values dell'ambiente" }}
{{- end }}
{{- end }}

{{- define "dcms.secretName" -}}
{{- if .Values.secret.existingSecret }}
{{- .Values.secret.existingSecret }}
{{- else }}
{{- include "dcms.fullname" . }}-env
{{- end }}
{{- end }}

{{/*
  URL pubblico per CORS/CSRF (SITE_URL). Se app.siteUrl è vuoto e l'ingress è abilitato,
  deriva https://<primo host ingress>.
*/}}
{{- define "dcms.siteUrl" -}}
{{- if .Values.app.siteUrl }}
{{- .Values.app.siteUrl }}
{{- else if and .Values.ingress.enabled .Values.ingress.hosts }}
{{- printf "https://%s" (index .Values.ingress.hosts 0 "host") }}
{{- end }}
{{- end }}

{{/*
  Nome del PVC dei media (existingClaim oppure quello generato dal chart).
*/}}
{{- define "dcms.mediaClaimName" -}}
{{- if .Values.media.persistence.existingClaim }}
{{- .Values.media.persistence.existingClaim }}
{{- else }}
{{- include "dcms.fullname" . }}-media
{{- end }}
{{- end }}

{{/*
  URL interno usato dal job di seed per raggiungere l'app.
*/}}
{{- define "dcms.seedBaseUrl" -}}
{{- if .Values.seed.baseUrl }}
{{- .Values.seed.baseUrl }}
{{- else }}
{{- printf "http://%s:%v" (include "dcms.fullname" .) .Values.service.port }}
{{- end }}
{{- end }}

{{/*
  Materiale per il checksum che forza il rollout del Deployment se il Secret cambia
  (le env da secretRef non si aggiornano sui pod già avviati).
*/}}
{{- define "dcms.secretRolloutChecksumMaterial" -}}
{{- if and .Values.secret.create (not .Values.secret.existingSecret) -}}
{{- include "dcms.databaseUrl" . -}}
{{- include "dcms.payloadSecret" . -}}
{{- include "dcms.siteUrl" . -}}
{{- end -}}
{{- end }}
