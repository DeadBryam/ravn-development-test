import autoAnimate from '@formkit/auto-animate';
import clsx from 'clsx';
import { useCallback, useEffect, useRef, useState } from 'react';

import { Status, Task } from '@/__generated__/types';
import { useDeleteTask } from '@/hooks';
import { useTaskModalStore } from '@/stores';
import { convertStatus } from '@/utils';

import { ConfirmationModal } from '../ConfirmationModal';
import { TaskCard } from '../TaskCard';

type TaskColumnProps = {
  status: Status;
  tasks?: Array<Task>;
  className?: string;
};

function TaskColumn({ status, tasks = [], className }: TaskColumnProps) {
  const [task, setTask] = useState<Task | null>(null);
  const list = useRef(null);

  const [deleteTask] = useDeleteTask();
  const { openModal } = useTaskModalStore();

  useEffect(() => {
    if (list.current) {
      autoAnimate(list.current);
    }
  }, [list]);

  const onDelete = useCallback(() => {
    deleteTask({ variables: { input: { id: task!.id } }, optimisticResponse: { deleteTask: task! } });
    setTask(null);
  }, [deleteTask, task]);

  return (
    <div key={status} className={clsx('flex flex-col gap-4', className)}>
      <ConfirmationModal open={Boolean(task)} onCancel={setTask.bind(null, null)} onAccept={onDelete} />
      <h2 className="text-b-l font-semibold">
        {convertStatus(status)} ({tasks.length?.toString()?.padStart(2, '0')})
      </h2>
      <div className="tasks-column h-full" ref={list}>
        {tasks.map((task: Task) => (
          <TaskCard key={task.id} task={task} onDelete={setTask.bind(null, task)} onEdit={openModal.bind(null, task)} />
        ))}
      </div>
    </div>
  );
}

export { TaskColumn };
