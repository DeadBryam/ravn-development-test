import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { useCallback, useMemo } from 'react';
import { useController } from 'react-hook-form';
import { RiTaskFill } from 'react-icons/ri';
import { Else, If, Then } from 'react-if';

import { Status } from '@/__generated__/types';
import { convertStatus } from '@/utils';

import { ErrorMessage } from '../Form';
import { Tag } from '../Tag';

type StatusSelectorProps = {
  name: string;
  className?: string;
};

function StatusSelector({ name, className }: StatusSelectorProps) {
  const statuses = useMemo(() => Object.values(Status), []);

  const {
    field: { value },
    field,
  } = useController({
    name,
  });

  const onChange = useCallback(
    (status: Status) => {
      field.onChange(status);
    },
    [field]
  );

  const currentValue: string | undefined = useMemo(() => {
    if (!value) return undefined;
    return convertStatus(value);
  }, [value]);

  return (
    <Menu>
      <MenuButton className={className}>
        <If condition={Boolean(currentValue)}>
          <Then>
            <Tag className="bg-transparent">
              <RiTaskFill size={20} />
              <p className="whitespace-nowrap">{currentValue}</p>
            </Tag>
          </Then>
          <Else>
            <Tag>
              <RiTaskFill size={20} />
              <p>Status</p>
            </Tag>
          </Else>
        </If>
        <ErrorMessage name={name} />
      </MenuButton>
      <MenuItems anchor="bottom" className="default-dropdown">
        <p className="dropdown-title">Status</p>
        {statuses.map((status, index) => (
          <MenuItem key={index}>
            <Tag className="bg-transparent hover:bg-neutral-4 !justify-start" onClick={onChange.bind(null, status)}>
              <RiTaskFill size={20} />
              <p>{convertStatus(status)}</p>
            </Tag>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}

export { StatusSelector };
