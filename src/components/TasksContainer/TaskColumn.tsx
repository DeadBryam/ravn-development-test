import clsx from 'clsx';

import { Status, Task } from '@/__generated__/types';
import { convertStatus } from '@/utils';

import { Card } from '../Card';

type TaskColumnProps = {
  status: Status;
  tasks?: Array<Task>;
  className?: string;
};

function TaskColumn({ status, tasks = [], className }: TaskColumnProps) {
  return (
    <div key={status} className={clsx('flex flex-col gap-4', className)}>
      <h2 className="text-b-l font-semibold">
        {convertStatus(status)} ({tasks.length?.toString()?.padStart(2, '0')})
      </h2>
      <div className="tasks-column h-full">
        {tasks.map((task: Task) => (
          <Card key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export { TaskColumn };
