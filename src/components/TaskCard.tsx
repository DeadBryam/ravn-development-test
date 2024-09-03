import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import clsx from 'clsx';
import { useMemo } from 'react';
import { useDrag } from 'react-dnd';
import { GrTrash } from 'react-icons/gr';
import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import { IoMdAlarm } from 'react-icons/io';
import { IoChatbubbleOutline } from 'react-icons/io5';
import { RiNodeTree, RiPencilLine } from 'react-icons/ri';
import { TbPaperclip } from 'react-icons/tb';

import { Task } from '@/__generated__/types';
import { convertPoints, getDaysDiff, parseDate } from '@/utils';
import { dndKeys } from '@/utils/const';

import { Avatar } from './Avatar';
import { PlatformTag } from './PlatformTag';
import { Tag } from './Tag';

type TaskCardProps = {
  className?: string;
  onEdit?: () => void;
  onDelete?: () => void;
  task: Task;
};

function TaskCard({ className, task, onEdit, onDelete }: TaskCardProps) {
  const [{ isDragging }, drag] = useDrag({
    type: dndKeys.CARD,
    item: task,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const items = useMemo(() => {
    return [
      {
        icon: <TbPaperclip size={16} />,
      },
      {
        icon: <RiNodeTree size={16} />,
        amount: 5,
      },
      {
        icon: <IoChatbubbleOutline size={16} />,
        amount: 3,
      },
    ];
  }, []);

  const timeTagVariant = useMemo(() => {
    const expiringDays = getDaysDiff(task.dueDate);
    if (expiringDays < 0) return 'primary';
    if (expiringDays <= 2) return 'tertiary';
    return 'default';
  }, [task.dueDate]);

  const options = useMemo(() => {
    return [
      {
        label: 'Edit',
        icon: <RiPencilLine size={20} />,
        onClick: () => onEdit && onEdit(),
      },
      {
        label: 'Delete',
        icon: <GrTrash size={20} />,
        onClick: () => onDelete && onDelete(),
      },
    ];
  }, [onDelete, onEdit]);

  return (
    <div
      className={clsx(
        'bg-neutral-4 rounded-lg p-4 flex flex-col gap-4 w-[340px] text-b-m',
        {
          'opacity-40': isDragging,
        },
        className
      )}
      ref={drag}
      id={`task-${task.id}`}
    >
      <div className="flex justify-between items-center flex-row">
        <p>{task.name}</p>
        <Menu>
          <MenuButton>
            <HiOutlineDotsHorizontal size={20} className="text-neutral-2" />
          </MenuButton>
          <MenuItems anchor="bottom" className="default-dropdown">
            {options.map((option, index) => (
              <MenuItem key={index}>
                <button className="default-dropdown-item" onClick={option.onClick} title={option.label}>
                  {option.icon}
                  <p>{option.label}</p>
                </button>
              </MenuItem>
            ))}
          </MenuItems>
        </Menu>
      </div>
      <div className="flex justify-between items-center flex-row">
        <p>{convertPoints(task?.pointEstimate)} Pts</p>
        <Tag className="gap-2" color={timeTagVariant}>
          <IoMdAlarm size={16} />
          {parseDate(task.dueDate)}
        </Tag>
      </div>
      <div className="flex flex-row gap-2 overflow-auto">
        {task.tags.map((tag) => (
          <PlatformTag key={tag} tag={tag} />
        ))}
      </div>
      <div className="flex justify-between items-center flex-row">
        <Avatar src={task?.assignee?.avatar} size="sm" />
        <div className="flex flex-row gap-3 text-neutral-1">
          {items.map((item, index) => (
            <div key={index} className="flex flex-row gap-1 items-center">
              {item.amount && item.amount}
              {item.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { TaskCard };
