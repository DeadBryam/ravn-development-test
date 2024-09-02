import clsx from 'clsx';
import { CiSearch } from 'react-icons/ci';
import { PiBellSimple } from 'react-icons/pi';

import { useGetProfile } from '@/hooks';

import { Avatar } from './Avatar';

type TopNavigationBarProps = {
  className?: string;
};

function TopNavigationBar({ className }: TopNavigationBarProps) {
  const { data } = useGetProfile();
  return (
    <div className={clsx('default-top-nav-bar text-neutral-2', className)}>
      <CiSearch size={24} />
      <input type="text" placeholder="Search" className="h-16 flex-1 bg-transparent p-2" />
      {/* <PiXCircleLight size={22} /> */}
      <PiBellSimple size={24} />
      <Avatar src={data?.profile?.avatar} size="md" />
    </div>
  );
}

export { TopNavigationBar };
