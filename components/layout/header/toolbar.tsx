import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { HeartIcon, ShoppingBagIcon, UserIcon } from 'lucide-react';
import Link from 'next/link';

const Toolbar = () => {
  return (
    <div className='items-center gap-2 lg:flex lg:flex-[2]'>
      <form className='relative hidden flex-1 lg:block'>
        <Input
          placeholder='What are you looking for?'
          className={cn('w-full placeholder:text-sm')}
        />
      </form>
      <div className='flex items-center lg:w-40'>
        <Button size='icon' variant='ghost' asChild>
          <Link href='/wishlist'>
            <HeartIcon className='h-5 w-5' />
          </Link>
        </Button>
        <Button size='icon' variant='ghost' asChild>
          <Link href='/cart'>
            <ShoppingBagIcon className='h-5 w-5' />
          </Link>
        </Button>
        <Button size='icon' variant='ghost' asChild>
          <Link href='/account'>
            <UserIcon className='h-5 w-5' />
          </Link>
        </Button>
      </div>
    </div>
  );
};
export default Toolbar;
