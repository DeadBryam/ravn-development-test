import { TaskTag } from '@/__generated__/types';

function converTags(tag: TaskTag): string {
  return tag.replace(/[-_]/g, ' ');
}

export { converTags };
