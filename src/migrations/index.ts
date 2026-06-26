import * as migration_20260626_150106_initial from './20260626_150106_initial';

export const migrations = [
  {
    up: migration_20260626_150106_initial.up,
    down: migration_20260626_150106_initial.down,
    name: '20260626_150106_initial'
  },
];
