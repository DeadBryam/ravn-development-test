import { format } from 'date-fns';

type DateType = string | number | Date;

type ParseDateOptions = {
  format?: string;
};

function parseDate(date: DateType, options: ParseDateOptions = {}): string {
  if (!date) return '';

  const parsedDate = new Date(date);
  const diff = new Date().getTime() - parsedDate.getTime();

  //today
  switch (diff) {
    case 0:
      return 'Today';
    case 1:
      return 'Yesterday';
    default:
      return format(parsedDate, options.format || 'dd MMM, yyyy');
  }
}

export { parseDate };
