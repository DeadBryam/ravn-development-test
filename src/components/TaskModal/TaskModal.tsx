import { Dialog, DialogPanel } from '@headlessui/react';
import { nopeResolver } from '@hookform/resolvers/nope';
import { useCallback } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { If, Then } from 'react-if';
import { Form } from 'react-router-dom';

import { CreateTaskInput, Status } from '@/__generated__/types';
import { useCreateTask } from '@/hooks';
import { createTaskSchema } from '@/schemas';

import { Button } from '../Button';
import { ErrorBoundary } from '../ErrorBoundary';
import { ErrorMessage } from '../Form';
import { AssigneeSelector } from './AssigneeSelector';
import { DueDateSelector } from './DueDateSelector';
import { EstimateSelector } from './EstimateSelector';
import { TagsSelector } from './TagsSelector';

type TaskModalProps = {
  open: boolean;
  onClose: () => void;
};

const defaultValues = {
  name: '',
  assigneeId: '',
  dueDate: '',
  pointEstimate: undefined,
  status: Status.BACKLOG,
  tags: [],
};

function TaskModal({ open, onClose }: TaskModalProps) {
  const [createTask, { loading }] = useCreateTask();

  const form = useForm<CreateTaskInput>({
    defaultValues,
    resolver: nopeResolver(createTaskSchema),
  });

  const closeModal = useCallback(() => {
    form.reset(defaultValues, { keepValues: false });
    onClose();
  }, [form, onClose]);

  const onSubmit = useCallback(
    (data: CreateTaskInput) => {
      createTask({ variables: { input: data } }).then(() => {
        closeModal();
      });
    },
    [createTask, closeModal]
  );

  return (
    <Dialog open={open} onClose={closeModal} className="relative z-50">
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4 bg-neutral-4 bg-opacity-50">
        <ErrorBoundary>
          <FormProvider {...form}>
            <Form>
              <DialogPanel className="rounded-lg p-4 bg-neutral-3 shadow-md w-full gap-6 flex flex-col">
                <div>
                  <input type="text" placeholder="Task name" className="w-full p-2 h-8 rounded-md bg-neutral-3" {...form.register('name')} />
                  <ErrorMessage name="name" />
                </div>
                <div className="flex flex-wrap items-start gap-4">
                  <EstimateSelector name="pointEstimate" className="task-modal-field" />
                  <AssigneeSelector name="assigneeId" className="task-modal-field" />
                  <TagsSelector name="tags" className="task-modal-field" />
                  <DueDateSelector name="dueDate" className="task-modal-field" />
                </div>
                <If condition={Boolean(form.formState.errors)}>
                  <Then></Then>
                </If>
                <div className="flex flex-row gap-6 justify-end">
                  <Button type="button" className="bg-transparent" onClick={closeModal}>
                    Cancel
                  </Button>
                  <Button type="submit" isLoading={loading} onClick={form.handleSubmit(onSubmit)}>
                    Create
                  </Button>
                </div>
              </DialogPanel>
            </Form>
          </FormProvider>
        </ErrorBoundary>
      </div>
    </Dialog>
  );
}

export { TaskModal };
