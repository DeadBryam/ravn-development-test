import { Status } from '@/__generated__/types';

function emptyTaskList() {
  return Object.values(Status).map((status) => ({
    status,
    tasks: [],
  }));
}

export { emptyTaskList };
