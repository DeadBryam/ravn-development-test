import { IoIosSettings } from 'react-icons/io';
import { PiSquaresFour } from 'react-icons/pi';
import { Outlet } from 'react-router-dom';

import { BottomBar } from '@/components';
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
    <div className="flex flex-col h-screen w-screen">
      <div id="nav-layout" className="p-2 md:p-6 lg:p-8 flex flex-row gap-8 h-full w-full overflow-hidden">
        <SideBar items={items} className="min-w-[232px] hidden pointer-events-none lg:block lg:pointer-events-auto" />
        <section className="size-full flex-1 flex flex-col gap-4 h-full overflow-hidden">
          <Outlet />
        </section>
      </div>
      <BottomBar items={items} className="lg:hidden lg:poiner-events-none" />
    </div>
  );
}

export { NavLayout };
