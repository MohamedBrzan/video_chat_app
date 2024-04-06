import { cn } from '@/lib/utils';
import Image from 'next/image';

interface HomeCardProps {
  color: string;
  icon: string;
  title: string;
  desc: string;
  handleClick: () => void;
}

export default function HomeCard({
  color,
  icon,
  title,
  desc,
  handleClick,
}: HomeCardProps) {
  return (
    <div
      className={cn(
        'px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer',
        color
      )}
      onClick={handleClick}
    >
      <div className='flex-center glassmorphism size-12 rounded-[10px]'>
        <Image src={icon} alt='meeting' width={27} height={27} />
      </div>
      <div className='flex flex-col gap-2'>
        <h1 className='text-2xl font-bold capitalize'>{title}</h1>
        <p className='text-lg font-normal'>{desc}</p>
      </div>
    </div>
  );
}
