import Container from '@/components/layout/container';
import BreadCrumbComponent from '@/components/shared/breadcrumb-component';
import Shop from '@/components/shop';
import type { BreadCrumbLink } from '@/interfaces';

export default async function Page({ params }: { params: { page: string } }) {
  const { page } = await params;

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
      isPage: false,
      isClickable: false,
    },
    {
      id: 3,
      name: `Page ${page}`,
      href: `/shop/${page}`,
      isPage: true,
    },
  ];
  return (
    <main className='space-y-12 py-8 lg:py-12'>
      <Container className='items-center justify-center max-lg:flex'>
        <BreadCrumbComponent links={links} />
      </Container>
      <Shop page={Number(page)} />
    </main>
  );
}
