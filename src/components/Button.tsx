import clsx from 'clsx';

type ButtonProps = {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button {...props} className={clsx('default-button', className)}>
      {children}
    </button>
  );
}

export { Button };
