import { Dialog, DialogPanel } from '@headlessui/react';
import { nopeResolver } from '@hookform/resolvers/nope';
import { useCallback, useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { If, Then } from 'react-if';
import { Form } from 'react-router-dom';

import { CreateTaskInput, PointEstimate, Status, Task } from '@/__generated__/types';
import { useCreateTask, useUpdateTask } from '@/hooks';
import { createTaskSchema } from '@/schemas';
import { useTaskModalStore } from '@/stores';

import { Button } from '../Button';
import { ErrorBoundary } from '../ErrorBoundary';
import { ErrorMessage } from '../Form';
import { AssigneeSelector } from './AssigneeSelector';
import { DueDateSelector } from './DueDateSelector';
import { EstimateSelector } from './EstimateSelector';
import { TagsSelector } from './TagsSelector';

const defaultValues = {
  name: '',
  assigneeId: '',
  dueDate: '',
  pointEstimate: '',
  status: Status.BACKLOG,
  tags: [],
};

function TaskModal() {
  const [createTask, { loading }] = useCreateTask();
  const [updateTask] = useUpdateTask();
  const { closeModal, open, values } = useTaskModalStore();

  const updatedData: CreateTaskInput = useMemo(() => {
    return {
      name: values?.name ?? '',
      status: values?.status ?? Status.BACKLOG,
      pointEstimate: values?.pointEstimate ?? PointEstimate.ZERO,
      dueDate: values?.dueDate,
      tags: values?.tags ?? [],
      assigneeId: values?.assignee?.id,
    };
  }, [values]);

  const isEditing = useMemo(() => Boolean(updatedData) && Boolean(values?.id), [updatedData, values]);

  const form = useForm<CreateTaskInput>({
    defaultValues: defaultValues as CreateTaskInput,
    values: (updatedData as CreateTaskInput) || {},
    resolver: nopeResolver(createTaskSchema),
  });

  const close = useCallback(() => {
    form.reset(defaultValues as CreateTaskInput, { keepValues: false });
    closeModal();
  }, [form, closeModal]);

  const onSubmit = useCallback(
    (data: CreateTaskInput) => {
      if (isEditing) {
        updateTask({
          variables: { input: { id: values!.id!, ...data } },
          optimisticResponse: { updateTask: { ...values, ...data } as Task },
        });
        close();
      } else {
        createTask({ variables: { input: data } }).then(close);
      }
    },
    [isEditing, updateTask, values, close, createTask]
  );

  return (
    <Dialog open={open} onClose={() => {}} className="relative z-50">
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
                  <Button type="button" className="bg-transparent" onClick={close} disabled={loading}>
                    Cancel
                  </Button>
                  <Button type="submit" isLoading={loading} onClick={form.handleSubmit(onSubmit)}>
                    {isEditing ? 'Update' : 'Create'}
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
