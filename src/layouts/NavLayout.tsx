import { IoIosSettings } from 'react-icons/io';
import { PiSquaresFour } from 'react-icons/pi';
import { Outlet } from 'react-router-dom';

import { SideBar } from '@/components/SideBar';

function NavLayout() {
  const items = [
    {
      title: 'DASHBOARD',
      icon: PiSquaresFour,
      href: '/',
    },
    {
      title: 'SETTINGS',
      icon: IoIosSettings,
      href: '/settings',
    },
  ];

  return (
    <div id="nav-layout" className="p-8 flex flex-row gap-8 h-screen w-screen">
      <SideBar items={items} className="min-w-[232px]" />
      <section className="size-full flex-1 overflow-hidden">
        <Outlet />
      </section>
    </div>
  );
}

export { NavLayout };
