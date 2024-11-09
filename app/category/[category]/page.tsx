import CategoryPage from '@/components/category';
import Container from '@/components/layout/container';
import BreadCrumbComponent from '@/components/shared/breadcrumb-component';
import type { BreadCrumbLink } from '@/interfaces';

export default async function Page({
  params,
}: {
  params: { category: string };
}) {
  const { category } = await params;

  const links: BreadCrumbLink[] = [
    {
      id: 1,
      name: 'Home',
      href: '/',
      isPage: false,
    },
    {
      id: 2,
      name: 'Category',
      href: '/category',
      isPage: false,
    },
    {
      id: 3,
      name: category,
      href: `/category/${category}`,
      isPage: true,
    },
  ];
  return (
    <main className='space-y-12 py-8 lg:py-12'>
      <Container className='items-center justify-center max-lg:flex'>
        <BreadCrumbComponent links={links} />
      </Container>
      <CategoryPage page={1} category={category} />
    </main>
  );
}
