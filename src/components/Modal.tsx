import { Dialog, DialogPanel } from '@headlessui/react';
import clsx from 'clsx';

import { Button } from './Button';
import { ErrorBoundary } from './ErrorBoundary';

type ModalProps = {
  className?: string;
  onAccept?: () => void;
  onCancel?: () => void;
  children: React.ReactNode;
  open: boolean;
  loading?: boolean;
  cancelText?: string;
  acceptText?: string;
};

function Modal({ className, onAccept, onCancel, children, open = false, loading = false, cancelText = 'Cancel', acceptText = 'Accept' }: ModalProps) {
  return (
    <Dialog open={open} onClose={() => {}} className="relative z-50">
      <div className={clsx('fixed inset-0 flex w-screen items-center justify-center p-4 bg-neutral-4 bg-opacity-50', className)}>
        <ErrorBoundary>
          <DialogPanel className="rounded-lg p-4 bg-neutral-3 shadow-md w-full gap-6 flex flex-col max-w-3xl">
            {children}
            <div className="flex flex-row gap-6 justify-end">
              <Button type="button" className="bg-transparent" onClick={onCancel} disabled={loading}>
                {cancelText}
              </Button>
              <Button type="submit" isLoading={loading} onClick={onAccept}>
                {acceptText}
              </Button>
            </div>
          </DialogPanel>
        </ErrorBoundary>
      </div>
    </Dialog>
  );
}

export { Modal };
