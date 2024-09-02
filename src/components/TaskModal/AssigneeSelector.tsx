import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { useCallback, useMemo } from 'react';
import { useController } from 'react-hook-form';
import { LuLoader } from 'react-icons/lu';
import { RiUser3Fill } from 'react-icons/ri';
import { Else, If, Then } from 'react-if';

import { User } from '@/__generated__/types';
import { useGetUsers } from '@/hooks';

import { Avatar } from '../Avatar';
import { ErrorMessage } from '../Form';
import { Tag } from '../Tag';

type AssigneeSelectorProps = {
  name: string;
  className?: string;
};

function AssigneeSelector({ name, className }: AssigneeSelectorProps) {
  const { data: usersData, loading: usersLoading } = useGetUsers();

  const {
    field: { value },
    field,
  } = useController({
    name,
  });

  const onChange = useCallback(
    (assigneeId: string) => {
      field.onChange(assigneeId);
    },
    [field]
  );

  const currentValue: User | undefined = useMemo(() => {
    if (!value) return undefined;
    return usersData?.users.find((user) => user.id === value);
  }, [value, usersData]);

  return (
    <Menu>
      <MenuButton className={className}>
        <If condition={Boolean(currentValue)}>
          <Then>
            <Tag className="bg-transparent !py-0">
              <Avatar src={currentValue?.avatar} size="sm" />
              <p>{currentValue?.fullName}</p>
            </Tag>
          </Then>
          <Else>
            <Tag>
              <RiUser3Fill size={20} />
              <p>Assignee</p>
            </Tag>
          </Else>
        </If>
        <ErrorMessage name={name} />
      </MenuButton>
      <MenuItems anchor="bottom" className="default-dropdown">
        <p className="dropdown-title">Assignee To...</p>
        <If condition={usersLoading}>
          <Then>
            <Tag>
              <LuLoader className="animate-spin h-6 w-6" />
              <p>Loading...</p>
            </Tag>
          </Then>
        </If>
        {usersData?.users.map((user, index) => (
          <MenuItem key={index}>
            <Tag className="bg-transparent hover:bg-neutral-4 !justify-start !py-2" onClick={onChange.bind(null, user.id)}>
              <Avatar src={user.avatar} size="sm" />
              <p>{user.fullName}</p>
            </Tag>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}

export { AssigneeSelector };
