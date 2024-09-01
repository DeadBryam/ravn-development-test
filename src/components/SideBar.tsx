import clsx from 'clsx';
import { IconType } from 'react-icons';
import { useLocation } from 'react-router-dom';

import { SideBarItem } from './SideBarItem';
import { RavnLogo } from './svg';

type SideBarProps = {
  className?: string;
  items: Array<{
    title: string;
    icon: IconType;
    href: string;
  }>;
};

function SideBar({ items, className }: SideBarProps) {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div className={clsx('default-sidebar', className)}>
      <RavnLogo className="size-10 mx-auto my-4 mb-11" />
      <div className="flex flex-col gap-2">
        {items.map((item, index) => (
          <SideBarItem {...item} key={index} active={pathname === item.href} />
        ))}
      </div>
    </div>
  );
}

export { SideBar };
