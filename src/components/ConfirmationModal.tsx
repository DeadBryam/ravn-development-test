import clsx from 'clsx';

import { Modal } from './Modal';

type ConfirmationModalProps = {
  className?: string;
  onAccept?: () => void;
  onCancel?: () => void;
  open: boolean;
};

function ConfirmationModal({ className, onAccept, onCancel, open }: ConfirmationModalProps) {
  return (
    <Modal open={open} onCancel={onCancel} onAccept={onAccept} className={className}>
      <div className={clsx('flex flex-col gap-6')}>
        <h2 className="text-2xl font-bold">Are you sure?</h2>
        <p className="text-neutral-9">This action cannot be undone.</p>
      </div>
    </Modal>
  );
}

export { ConfirmationModal };
