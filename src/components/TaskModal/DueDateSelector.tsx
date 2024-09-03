import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { useCallback, useMemo } from 'react';
import Calendar from 'react-calendar';
import { useController } from 'react-hook-form';
import { RiCalendarCheckLine } from 'react-icons/ri';

import { parseDate } from '@/utils';

import { ErrorMessage } from '../Form';
import { Tag } from '../Tag';

type DueDateSelectorProps = {
  name: string;
  className?: string;
};

function DueDateSelector({ name, className }: DueDateSelectorProps) {
  const {
    field: { value },
    field,
  } = useController({
    name,
  });

  const onChange = useCallback(
    (date: Date) => {
      field.onChange(date);
    },
    [field]
  );

  const currentValue: string = useMemo(() => {
    if (!value) return 'Due Date';
    return parseDate(value as string, { format: 'dd MMM, yyyy' });
  }, [value]);

  return (
    <Popover className={className}>
      <PopoverButton className="w-full">
        <Tag>
          <RiCalendarCheckLine size={20} />
          <p>{currentValue}</p>
        </Tag>
        <ErrorMessage name={name} />
      </PopoverButton>
      <PopoverPanel anchor="bottom" className="default-dropdown">
        <Calendar onChange={(date) => onChange(date as Date)} value={value as Date} />
      </PopoverPanel>
    </Popover>
  );
}

export { DueDateSelector };
