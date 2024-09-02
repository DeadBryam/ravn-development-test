import { Maybe } from '@/__generated__/types';

type AvatarProps = {
  src?: Maybe<string>;
  size?: 'lg' | 'md' | 'sm';
};

const sizeMap = {
  lg: 'size-12',
  md: 'size-10',
  sm: 'size-8',
};

function Avatar({ src, size = 'md' }: AvatarProps) {
  return <img src={src ?? 'https://avatar.iran.liara.run/public'} alt="avatar" className={`rounded-full bg-neutral-1 ${sizeMap[size]}`} />;
}

export { Avatar };
