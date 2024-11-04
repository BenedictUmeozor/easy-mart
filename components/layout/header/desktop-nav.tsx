'use client';

import { NAVLINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DesktopNav = () => {
  const pathname = usePathname();

  return (
    <nav className='hidden flex-[2] lg:block'>
      <ul className='flex items-center gap-8'>
        {NAVLINKS.map(link => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={cn(
                'hover:text-primary',
                pathname === link.href && 'border-b-2 text-primary'
              )}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default DesktopNav;
