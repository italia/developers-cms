import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    include: ['tests/int/**/*.int.spec.ts'],
    // getPayload() nei beforeAll inizializza Payload e lo schema su un Postgres
    // vuoto: sui runner di GitHub supera a volte i 10s di default (v1.0.5 è
    // fallita così due volte). Con il deploy automatico sui tag un rosso spurio
    // blocca la produzione.
    hookTimeout: 60_000,
  },
})
