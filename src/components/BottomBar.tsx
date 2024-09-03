import clsx from 'clsx';
import { useLocation } from 'react-router-dom';

import { NavIcon } from '@/types';

import { BottomBarItem } from './BottomBarItem';

type BottomBarProps = {
  className?: string;
  items: Array<NavIcon>;
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
