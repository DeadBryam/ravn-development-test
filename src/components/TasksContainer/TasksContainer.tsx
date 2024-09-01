import clsx from 'clsx';
import { useMemo } from 'react';

import { useGetTasks } from '@/hooks';
import { TasksList } from '@/types';
import { emptyTaskList } from '@/utils/emptyTaskList';

import { TaskColumn } from './TaskColumn';
import { TasksContainerError } from './TasksContainerError';
import { TasksContainerSkeleton } from './TasksContainerSkeleton';

type TaskContainerProps = {
  className?: string;
};

function TaskContainer({ className }: TaskContainerProps) {
  const { data, loading, error } = useGetTasks();

  const tasks: TasksList = useMemo(() => {
    const tasksList = emptyTaskList();
    if (!data?.tasks) return tasksList;

    return tasksList.map((task) => {
      const tasks = data.tasks.filter((t) => t.status === task.status);
      return { ...task, tasks };
    });
  }, [data?.tasks]);

  if (loading) return <TasksContainerSkeleton className={className} />;
  if (error) return <TasksContainerError className={className} />;

  return (
    <div className={clsx('tasks-container', className)}>
      {tasks.map((task) => (
        <TaskColumn key={task.status} status={task.status} tasks={task.tasks} />
      ))}
    </div>
  );
}

export { TaskContainer };
