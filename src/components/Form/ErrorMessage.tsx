import clsx from 'clsx';
import { useController } from 'react-hook-form';

type ErrorMessageProps = {
  name: string;
  className?: string;
};

function ErrorMessage({ name, className }: ErrorMessageProps) {
  const {
    fieldState: { error },
  } = useController({ name });

  if (!error) return null;
  return <small className={clsx('text-primary-4 text-b-s float-left', className)}>{error.message}</small>;
}

export { ErrorMessage };
