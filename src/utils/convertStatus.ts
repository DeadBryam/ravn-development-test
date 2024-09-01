import { Status } from '@/__generated__/types';

function convertStatus(points: Status): string {
  switch (points) {
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
