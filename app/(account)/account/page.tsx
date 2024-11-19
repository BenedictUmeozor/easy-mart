import MenuBar from '@/components/account/menu-bar';
import ProfileForm from '@/components/forms/account';
import Container from '@/components/layout/container';
import BreadCrumbComponent from '@/components/shared/breadcrumb-component';
import type { BreadCrumbLink } from '@/interfaces';
import { getAuthSession } from '@/lib/auth';
import { getUser } from '@/server/queries/db';
import { redirect } from 'next/navigation';

const links: BreadCrumbLink[] = [
  {
    id: 1,
    name: 'Home',
    href: '/',
    isPage: false,
  },
  {
    id: 2,
    name: 'My Account',
    href: '/account',
    isPage: true,
  },
];

export default async function Page() {
  const session = await getAuthSession();

  if (!session || !session.user) return redirect('/login');

  const user = await getUser(session!.user!.email!);

  return (
    <main className='space-y-12 py-8 lg:py-12'>
      <Container className='flex items-center gap-6 max-lg:flex-col lg:justify-between'>
        <BreadCrumbComponent links={links} />
        <p>
          Welcome <span className='text-primary'>{user?.name}</span>
        </p>
      </Container>
      <Container className='grid grid-cols-1 gap-8 lg:grid-cols-12'>
        <MenuBar />
        <div className='rounded bg-white p-8 shadow-md lg:col-span-9'>
          <ProfileForm user={user} />
        </div>
      </Container>
    </main>
  );
}
