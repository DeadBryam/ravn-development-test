import { TaskTag } from '@/__generated__/types';

import { Tag } from './Tag';

type TagProps = {
  className?: string;
  tag: TaskTag;
  type?: 'default' | 'border';
};

const tagColors = {
  ANDROID: 'tertiary',
  IOS: 'secondary',
  NODE_JS: 'default',
  RAILS: 'primary',
  REACT: 'blue',
} as const;

function PlatformTag({ className, tag, type = 'default' }: TagProps) {
  return (
    <Tag className={className} color={tagColors[tag]} type={type}>
      {tag?.toUpperCase()}
    </Tag>
  );
}

export { PlatformTag };
