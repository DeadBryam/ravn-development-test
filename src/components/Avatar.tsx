type AvatarProps = {
  src: string;
  size?: 'lg' | 'md' | 'sm';
};

const sizeMap = {
  lg: 'size-12',
  md: 'size-10',
  sm: 'size-8',
};

function Avatar({ src, size = 'md' }: AvatarProps) {
  return <img src={src} alt="avatar" className={`rounded-full ${sizeMap[size]}`} />;
}

export { Avatar };
