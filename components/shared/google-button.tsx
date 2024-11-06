'use client';

import google from '@/assets/google.svg';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const GoogleButton = () => {
  return (
    <Button
      variant='outline'
      type='button'
      size='lg'
      className={cn('flex w-full items-center gap-2')}
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
