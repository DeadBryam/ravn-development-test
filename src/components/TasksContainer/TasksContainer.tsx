import clsx from 'clsx';
import { useCallback, useMemo } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { Status, Task } from '@/__generated__/types';
import { useGetTasks, useUpdateTask } from '@/hooks';
import { TasksList } from '@/types';
import { emptyTaskList } from '@/utils/emptyTaskList';

import { ErrorBoundary } from '../ErrorBoundary';
import { TaskColumn } from './TaskColumn';
import { TasksContainerError } from './TasksContainerError';
import { TasksContainerSkeleton } from './TasksContainerSkeleton';

type TaskContainerProps = {
  className?: string;
};

function TaskContainer({ className }: TaskContainerProps) {
  const { data, loading, error } = useGetTasks();
  const [updateTask] = useUpdateTask();

  const moveItem = useCallback(
    (item: Task, _: Status, to: Status) => {
      updateTask({
        variables: { input: { id: item.id, status: to } },
        optimisticResponse: { updateTask: { ...item, status: to } },
      });
    },
    [updateTask]
  );

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

  if (loading) return <TasksContainerSkeleton className={className} />;
  if (error) return <TasksContainerError className={className} />;

  return (
    <DndProvider backend={HTML5Backend}>
      <ErrorBoundary>
        <div className={clsx('tasks-container', className)}>
          {tasks.map((task) => (
            <TaskColumn key={task.status} status={task.status} tasks={task.tasks} moveItem={moveItem} />
          ))}
        </div>
      </ErrorBoundary>
    </DndProvider>
  );
}

export { TaskContainer };
