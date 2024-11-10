'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MenuBar = () => {
  const pathname = usePathname();

  return (
    <div className='space-y-4 lg:col-span-3'>
      <h5 className='text-lg font-medium'>Manage My Account</h5>
      <ul className='space-y-2 pl-4 font-normal'>
        <li>
          <Link
            href='/account'
            className={cn(
              'text-black/60 hover:text-primary',
              pathname === '/account' && 'text-primary'
            )}
          >
            My Profile
          </Link>
        </li>
        <li>
          <Link
            href='/account/orders'
            className={cn(
              'text-black/60 hover:text-primary',
              pathname.includes('orders') && 'text-primary'
            )}
          >
            My Orders
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default MenuBar;
