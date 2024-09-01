import clsx from 'clsx';
import { useMemo } from 'react';

type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, className, ...props }: ButtonProps) {
  const containsBg = useMemo(() => {
    return className?.includes('bg-');
  }, [className]);

  return (
    <button
      {...props}
      className={clsx(
        {
          'default-button': !containsBg,
          'transparent-button': containsBg,
        },
        className
      )}
    >
      {children}
    </button>
  );
}

export { Button };
