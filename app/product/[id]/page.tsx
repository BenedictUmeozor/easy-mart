import Container from '@/components/layout/container';
import Images from '@/components/product/images';
import ProductInfo from '@/components/product/product-info';
import BreadCrumbComponent from '@/components/shared/breadcrumb-component';
import type { BreadCrumbLink } from '@/interfaces';
import { fetchProduct } from '@/server/queries';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
  const { id } = await params;
  const product = await fetchProduct(id);

  if (!product) return notFound();

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
    },
    {
      id: 3,
      name: product.title,
      href: '/shop',
      isPage: true,
    },
  ];

  return (
    <main className='space-y-12 py-8 lg:py-12'>
      <Container className='items-center justify-center max-lg:flex'>
        <BreadCrumbComponent links={links} />
      </Container>
      <Container className='grid grid-cols-1 gap-8 lg:grid-cols-12'>
        <Images images={product.images.slice(0, 3)} />
        <ProductInfo product={product} />
      </Container>
    </main>
  );
}
