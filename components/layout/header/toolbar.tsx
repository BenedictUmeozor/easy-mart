'use client';

import { Button } from '@/components/ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import {
  BookmarkIcon,
  HeartIcon,
  LogOutIcon,
  ShoppingBagIcon,
  UserIcon,
} from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Toolbar = () => {
  const { status } = useSession();
  return (
    <div className='items-center gap-2 lg:flex lg:flex-[2]'>
      <form className='relative hidden flex-1 lg:block'>
        <Input
          placeholder='What are you looking for?'
          className={cn('w-full placeholder:text-sm')}
        />
      </form>
      {status === 'authenticated' ? (
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
          <Account />
        </div>
      ) : (
        <Button asChild>
          <Link href='/login'>Login</Link>
        </Button>
      )}
    </div>
  );
};

const Account = () => {
  const pathname = usePathname();

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button size='icon' variant='ghost' asChild>
          <Link href='/account'>
            <UserIcon className='h-5 w-5' />
          </Link>
        </Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <ul>
          <li>
            <Button
              variant='ghost'
              className='flex w-full items-center justify-start'
              asChild
            >
              <Link
                href='/account'
                className={cn(
                  'flex w-full items-center gap-1 py-2 text-sm',
                  pathname === '/account' && 'text-primary'
                )}
              >
                <UserIcon className='h-4 w-4' /> Manage my Account
              </Link>
            </Button>
          </li>
          <li>
            <Button
              variant='ghost'
              className='flex w-full items-center justify-start'
              asChild
            >
              <Link
                href='/account/orders'
                className={cn(
                  'flex w-full items-center gap-1 py-2 text-sm',
                  pathname === '/account/orders' && 'text-primary'
                )}
              >
                <ShoppingBagIcon className='h-4 w-4' /> My Orders
              </Link>
            </Button>
          </li>
          <li>
            <Button
              variant='ghost'
              className='flex w-full items-center justify-start'
              asChild
            >
              <Link
                href='/account/wishlists'
                className={cn(
                  'flex w-full items-center gap-1 py-2 text-sm',
                  pathname === '/account/wishlists' && 'text-primary'
                )}
              >
                <BookmarkIcon className='h-4 w-4' /> My Wishlist
              </Link>
            </Button>
          </li>
          <li>
            <Button
              className={cn(
                'flex w-full items-center justify-start gap-1 py-2 text-sm'
              )}
              variant='ghost'
              onClick={() => signOut()}
            >
              <LogOutIcon className='h-4 w-4' /> Logout
            </Button>
          </li>
        </ul>
      </HoverCardContent>
    </HoverCard>
  );
};

export default Toolbar;
