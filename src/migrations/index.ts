import * as migration_20260626_150106_initial from './20260626_150106_initial';
import * as migration_20260817_114742_logos_to_media from './20260817_114742_logos_to_media';
import * as migration_20260817_152351_add_feedback_collection from './20260817_152351_add_feedback_collection';

export const migrations = [
  {
    up: migration_20260626_150106_initial.up,
    down: migration_20260626_150106_initial.down,
    name: '20260626_150106_initial',
  },
  {
    up: migration_20260817_114742_logos_to_media.up,
    down: migration_20260817_114742_logos_to_media.down,
    name: '20260817_114742_logos_to_media',
  },
  {
    up: migration_20260817_152351_add_feedback_collection.up,
    down: migration_20260817_152351_add_feedback_collection.down,
    name: '20260817_152351_add_feedback_collection'
  },
];
