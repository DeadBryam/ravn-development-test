import clsx from 'clsx';

import { emptyTaskList } from '@/utils/emptyTaskList';

import { TaskColumn } from './TaskColumn';

type TasksContainerErrorProps = {
  className?: string;
};

function TasksContainerError({ className }: TasksContainerErrorProps) {
  return (
    <div className={clsx('tasks-container', className)}>
      {emptyTaskList().map((task) => (
        <TaskColumn key={task.status} status={task.status} tasks={task.tasks} />
      ))}
    </div>
  );
}

export { TasksContainerError };
