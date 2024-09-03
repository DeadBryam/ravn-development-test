import { PointEstimate } from '@/__generated__/types';

function convertPoints(points: PointEstimate): string {
  switch (points) {
    case PointEstimate.EIGHT:
      return '8';
    case PointEstimate.FOUR:
      return '4';
    case PointEstimate.ONE:
      return '1';
    case PointEstimate.TWO:
      return '2';
    case PointEstimate.ZERO:
      return '0';
    default:
      return '0';
  }
}

export { convertPoints };
