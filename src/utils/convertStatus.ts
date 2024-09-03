import { Status } from '@/__generated__/types';

function convertStatus(status: Status): string {
  switch (status) {
    case Status.IN_PROGRESS:
      return 'In Progress';
    case Status.TODO:
      return 'To Do';
    case Status.DONE:
      return 'Done';
    case Status.CANCELLED:
      return 'Cancelled';
    case Status.BACKLOG:
      return 'Backlog';
    default:
      return '';
  }
}

export { convertStatus };
