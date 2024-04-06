'use client';

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import Image from 'next/image';
import Link from 'next/link';
import SidebarLinks from './SidebarLinks';

export default function MobileNav() {
  return (
    <section className='w-full max-w-[264px]'>
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src='/icons/hamburger.svg'
            width={36}
            height={36}
            alt='hamburger icons'
            className='cursor-pointer sm:hidden'
          />
        </SheetTrigger>
        <SheetContent side='left' className='border-none bg-dark-1'>
          <Link href='/' className='flex items-center gap-1'>
            <Image
              src='/icons/logo.svg'
              width={32}
              height={32}
              alt='Yoom Logo'
              className='max-sm:size-10'
            />
            <p className='text-[26px] font-extrabold text-white'>Yoom</p>
          </Link>
          <div className='flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto'>
            <SheetClose asChild>
              <section className='flex h-full flex-col gap-6 pt-16 text-white'>
                <SidebarLinks location='mobile' />
              </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
}
