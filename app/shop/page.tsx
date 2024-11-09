import Container from '@/components/layout/container';
import BreadCrumbComponent from '@/components/shared/breadcrumb-component';
import Shop from '@/components/shop';
import type { BreadCrumbLink } from '@/interfaces';

const links: BreadCrumbLink[] = [
  {
    id: 1,
    name: 'Home',
    href: '/',
    isPage: false,
  },
  {
    id: 2,
    name: 'Shop',
    href: '/shop',
    isPage: true,
  },
];

export default async function Page() {
  return (
    <main className='space-y-12 py-8 lg:py-12'>
      <Container className='items-center justify-center max-lg:flex'>
        <BreadCrumbComponent links={links} />
      </Container>
      <Shop page={1} />
    </main>
  );
}
