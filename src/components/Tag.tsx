import clsx from 'clsx';

type TagProps = {
  children?: React.ReactNode;
  className?: string;
  color?: colorMapType;
  type?: 'default' | 'border';
  onClick?: () => void;
};

type colorMapType = keyof typeof colorMap;

const colorMap = {
  default: 'bg-neutral-2',
  primary: 'bg-primary-4 text-primary-4',
  secondary: 'bg-secondary-4 text-secondary-4',
  tertiary: 'bg-tertiary-4 text-tertiary-4',
  blue: 'bg-blue-4 text-blue-4',
};

const borderlessMap = {
  default: 'border-neutral-2 text-neutral-2',
  primary: 'border-primary-4 text-primary-4',
  secondary: 'border-secondary-4 text-secondary-4',
  tertiary: 'border-tertiary-4 text-tertiary-4',
  blue: 'border-blue-4 text-blue-4',
};

function Tag({ children, className, color = 'default', type = 'default', onClick }: TagProps) {
  return (
    <span
      onClick={onClick}
      className={clsx(
        'default-tag',
        {
          [`bg-opacity-10 ${colorMap[color]}`]: type === 'default',
          [`border ${borderlessMap[color]}`]: type === 'border',
          'cursor-pointer hover:bg-neutral-4': Boolean(onClick),
        },
        className
      )}
    >
      {children}
    </span>
  );
}

export { Tag };
