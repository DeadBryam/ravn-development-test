import clsx from 'clsx';
import { IconType } from 'react-icons';
import { useLocation } from 'react-router-dom';

import { BottomBarItem } from './BottomBarItem';

type BottomBarProps = {
  className?: string;
  items: Array<{
    title: string;
    icon: IconType;
    href: string;
  }>;
};

function BottomBar({ items, className }: BottomBarProps) {
  const location = useLocation();
  const { pathname } = location;
  return (
    <div className={clsx('default-bottom-nav', className)}>
      {items.map((item, index) => (
        <BottomBarItem {...item} key={index} active={pathname === item.href} />
      ))}
    </div>
  );
}

export { BottomBar };
