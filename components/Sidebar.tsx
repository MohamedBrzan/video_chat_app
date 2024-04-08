'use client';

import { usePathname } from 'next/navigation';
import SidebarLinks from './SidebarLinks';

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <section className='sticky left-0 top-0 flex h-screen w-fit flex-col justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264px]'>
      <div className='flex flex-1 flex-col gap-6'>
        <SidebarLinks location='' />
      </div>
    </section>
  );
}
