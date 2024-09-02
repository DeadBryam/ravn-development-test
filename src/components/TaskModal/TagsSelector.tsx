import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import { useCallback, useMemo } from 'react';
import { useController } from 'react-hook-form';
import { RiPriceTag3Fill } from 'react-icons/ri';
import { Else, If, Then } from 'react-if';

import { TaskTag } from '@/__generated__/types';
import { converTags } from '@/utils';

import { CheckBox } from '../CheckBox';
import { ErrorMessage } from '../Form';
import { Tag } from '../Tag';

type TagsSelectorProps = {
  name: string;
  className?: string;
};

function TagsSelector({ name, className }: TagsSelectorProps) {
  const tags = useMemo(() => Object.values(TaskTag), []);

  const {
    field: { value },
    field,
  } = useController({
    name,
  });

  const onChange = useCallback(
    (point: TaskTag) => {
      const newValue = value?.includes(point) ? (value as Array<string>).filter((p) => p !== point) : [...(value as Array<string>), point];
      field.onChange(newValue);
    },
    [field, value]
  );

  const currentValue: string | undefined = useMemo(() => {
    if (!value || value?.length === 0) return undefined;
    return (value as Array<string>).join(', ');
  }, [value]);

  return (
    <Popover className={className}>
      <PopoverButton className="w-full">
        <If condition={Boolean(currentValue)}>
          <Then>
            <Tag>
              <p className="max-w-[120px] whitespace-nowrap text-ellipsis overflow-hidden">{currentValue}</p>
            </Tag>
          </Then>
          <Else>
            <Tag>
              <RiPriceTag3Fill size={20} />
              <p>Tags</p>
            </Tag>
          </Else>
        </If>
        <ErrorMessage name={name} />
      </PopoverButton>
      <PopoverPanel anchor="bottom" className="default-dropdown">
        <p className="dropdown-title">Tags</p>
        {tags.map((tag, index) => (
          <CheckBox key={index} label={converTags(tag)} active={value?.includes(tag)} className="!justify-start" onClick={onChange.bind(null, tag)} />
        ))}
      </PopoverPanel>
    </Popover>
  );
}

export { TagsSelector };
