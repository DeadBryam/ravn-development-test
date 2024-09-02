import clsx from 'clsx';
import { useCallback } from 'react';

import { Status, Task } from '@/__generated__/types';
import { useDeleteTask } from '@/hooks';
import { useTaskModalStore } from '@/stores';
import { convertStatus } from '@/utils';

import { Card } from '../Card';

type TaskColumnProps = {
  status: Status;
  tasks?: Array<Task>;
  className?: string;
};

function TaskColumn({ status, tasks = [], className }: TaskColumnProps) {
  const [deleteTask] = useDeleteTask();
  const { openModal } = useTaskModalStore();

  const onDelete = useCallback(
    (task: Task) => {
      deleteTask({ variables: { input: { id: task.id } }, optimisticResponse: { deleteTask: task } });
    },
    [deleteTask]
  );

  return (
    <div key={status} className={clsx('flex flex-col gap-4', className)}>
      <h2 className="text-b-l font-semibold">
        {convertStatus(status)} ({tasks.length?.toString()?.padStart(2, '0')})
      </h2>
      <div className="tasks-column h-full">
        {tasks.map((task: Task) => (
          <Card key={task.id} task={task} onDelete={onDelete.bind(null, task)} onEdit={openModal.bind(null, task)} />
        ))}
      </div>
    </div>
  );
}

export { TaskColumn };
