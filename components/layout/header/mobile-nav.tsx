'use client';

import { Button } from '@/components/ui/button';
import { NAVLINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { logout } from '@/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { MenuIcon, X } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Fragment, useState } from 'react';

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const { status } = useSession();

  const pathname = usePathname();

  return (
    <Fragment>
      <button className='lg:hidden' onClick={() => setOpen(true)}>
        <MenuIcon className='h-7 w-7' />
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='fixed inset-0 z-[99999] space-y-8 bg-white py-4 lg:hidden'
          >
            <button className='ml-4 md:ml-6' onClick={() => setOpen(false)}>
              <X className='h-6 w-6' />
            </button>
            <ul>
              {NAVLINKS.map(link => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'block border-b border-b-slate-200 p-4 text-slate-900',
                      pathname === link.href && 'text-primary'
                    )}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              {status === 'authenticated' && (
                <li>
                  <Button
                    variant='ghost'
                    className={cn(
                      'flex w-full items-center justify-start text-base hover:text-primary'
                    )}
                    onClick={logout}
                  >
                    Logout
                  </Button>
                </li>
              )}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </Fragment>
  );
};
export default MobileNav;
