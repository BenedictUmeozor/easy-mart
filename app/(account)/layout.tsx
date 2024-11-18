import { getAuthSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
import type { ReactNode } from 'react';

export default async function AccountLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getAuthSession();

  if (!session) redirect('/login');

  return <div>{children}</div>;
}
