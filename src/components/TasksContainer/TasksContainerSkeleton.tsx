import clsx from 'clsx';

type TasksContainerSkeletonProps = {
  className?: string;
};

function TasksContainerSkeleton({ className }: TasksContainerSkeletonProps) {
  return (
    <div className={clsx('tasks-container', className)}>
      {Array.from({ length: 3 }).map((_, index) => (
        <div key={index} className="flex flex-col gap-4">
          <span className="card-skeleton h-8 w-1/2" />
          <div className="tasks-column h-full">
            {Array.from({ length: 3 }).map((_, index) => (
              <span key={index} className="card-skeleton h-52 w-full rounded-lg" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export { TasksContainerSkeleton };
