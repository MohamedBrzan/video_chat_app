import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SheetClose } from './ui/sheet';

export default function SidebarLinks({
  location = 'web',
}: {
  location: string;
}) {
  const pathname = usePathname();
  const condition = location === 'web';

  return condition ? (
    <>
      {sidebarLinks.map((link, index) => {
        const isActive =
          pathname === link.route || pathname.startsWith(link.route + '/');

        return (
          <Link
            href={link.route}
            key={index}
            className={cn('flex gap-4 items-center p-4 rounded-lg', {
              'bg-blue-1': isActive,
              'justify-start': condition,
              'w-full max-w-60': !condition,
            })}
          >
            <Image
              src={link.imgURL}
              alt={link.label}
              width={condition ? 24 : 20}
              height={condition ? 24 : 20}
            />
            <p
              className={cn({
                'text-lg font-semibold max-lg:hidden': condition,
                'font-semibold': !condition,
              })}
            >
              {link.label}
            </p>
          </Link>
        );
      })}
    </>
  ) : (
    <>
      {sidebarLinks.map((link, index) => {
        const isActive = pathname === link.route;

        return (
          <SheetClose asChild key={index}>
            <Link
              href={link.route}
              key={index}
              className={cn('flex gap-4 items-center p-4 rounded-lg', {
                'bg-blue-1': isActive,
                'justify-start': condition,
                'w-full max-w-60': !condition,
              })}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={condition ? 24 : 20}
                height={condition ? 24 : 20}
              />
              <p
                className={cn({
                  'text-lg font-semibold max-lg:hidden': condition,
                  'font-semibold': !condition,
                })}
              >
                {link.label}
              </p>
            </Link>
          </SheetClose>
        );
      })}
    </>
  );
}
