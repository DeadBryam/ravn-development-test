import { nopeResolver } from '@hookform/resolvers/nope';
import { useCallback, useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Form } from 'react-router-dom';

import { CreateTaskInput, PointEstimate, Status, Task } from '@/__generated__/types';
import { useCreateTask, useUpdateTask } from '@/hooks';
import { createTaskSchema } from '@/schemas';
import { useTaskModalStore } from '@/stores';

import { ErrorMessage } from '../Form';
import { Modal } from '../Modal';
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
    <Modal open={open} onCancel={close} onAccept={form.handleSubmit(onSubmit)} loading={loading} acceptText={isEditing ? 'Update' : 'Create'}>
      <FormProvider {...form}>
        <Form className="flex flex-col gap-4">
          <div className="flex flex-col">
            <input type="text" placeholder="Task name" className="w-full p-2 h-8 rounded-md bg-neutral-3" maxLength={20} {...form.register('name')} />
            <ErrorMessage name="name" />
          </div>
          <div className="flex flex-wrap items-start gap-4">
            <EstimateSelector name="pointEstimate" className="task-modal-field" />
            <AssigneeSelector name="assigneeId" className="task-modal-field" />
            <TagsSelector name="tags" className="task-modal-field" />
            <DueDateSelector name="dueDate" className="task-modal-field" />
          </div>
        </Form>
      </FormProvider>
    </Modal>
  );
}

export { TaskModal };
