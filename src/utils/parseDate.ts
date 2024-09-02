import { format } from 'date-fns';

type DateType = string | number | Date;

type ParseDateOptions = {
  format?: string;
};

function getDaysDiff(date: DateType): number {
  const parsedDate = new Date(date);
  return Math.ceil((parsedDate.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
}

function parseDate(date: DateType, options: ParseDateOptions = {}): string {
  if (!date) return '';

  const parsedDate = new Date(date);
  const daysDiff = getDaysDiff(parsedDate);

  if (daysDiff === 0) return 'Today';
  if (daysDiff === 1) return 'Tomorrow';
  if (daysDiff === -1) return 'Yesterday';
  if (daysDiff > -1 && daysDiff <= -5) return `${daysDiff} days ago`;

  return format(parsedDate, options.format || 'dd MMM, yyyy');
}

export { getDaysDiff, parseDate };
