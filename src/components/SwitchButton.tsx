import clsx from 'clsx';

import { Button } from './Button';

type ButtonProps = {
  children: React.ReactNode;
  active?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function SwitchButton({ children, className, active = false, ...props }: ButtonProps) {
  return (
    <Button
      className={clsx('bg-transparent', className, {
        'border border-primary-4 text-primary-4': active,
      })}
      {...props}
    >
      {children}
    </Button>
  );
}

export { SwitchButton };
