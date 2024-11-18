'use client';

import google from '@/assets/google.svg';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { getProviders, signIn, type ClientSafeProvider } from 'next-auth/react';
import { useEffect, useState } from 'react';

const GoogleButton = ({ disabled }: { disabled?: boolean }) => {
  const [providers, setProviders] = useState<Record<
    string,
    ClientSafeProvider
  > | null>(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <Button
      variant='outline'
      type='button'
      size='lg'
      disabled={!providers?.google || disabled}
      className={cn('flex w-full items-center gap-2')}
      onClick={() => signIn('google', { callbackUrl: '/account' })}
    >
      <Image
        src={google}
        alt='google'
        width={20}
        height={20}
        className='h-5 w-5'
      />
      <span>Continue with Google</span>
    </Button>
  );
};
export default GoogleButton;
