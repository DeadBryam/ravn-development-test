import clsx from 'clsx';
import { useMemo } from 'react';
import { LuLoader } from 'react-icons/lu';
import { If, Then } from 'react-if';

type ButtonProps = {
  isLoading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, className, disabled, isLoading = false, ...props }: ButtonProps) {
  const containsBg = useMemo(() => {
    return className?.includes('bg-');
  }, [className]);

  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={clsx(
        {
          'default-button': !containsBg,
          'transparent-button': containsBg,
        },
        className
      )}
    >
      <If condition={isLoading}>
        <Then>
          <LuLoader size={18} className="animate-spin" />
        </Then>
      </If>
      {children}
    </button>
  );
}

export { Button };
