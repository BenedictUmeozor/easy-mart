import Container from '@/components/layout/container';
import { getAuthSession } from '@/lib/auth';
import { PreloadAuthResources } from '@/lib/preload-resources';
import { redirect } from 'next/navigation';
import Image from 'next/image';
import { type ReactNode } from 'react';

export default async function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getAuthSession();
  if (session) redirect('/account');

  return (
    <main className='py-8 lg:py-12'>
      <PreloadAuthResources />
      <Container className='grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center'>
        <div className='hidden items-center justify-center lg:flex'>
          <Image
            src='/auth.png'
            alt='Auth image'
            width={500}
            height={500}
            className='w-full max-w-full object-contain'
            priority
          />
        </div>
        <div>{children}</div>
      </Container>
    </main>
  );
}
