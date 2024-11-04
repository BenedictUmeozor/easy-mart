import { fetchProducts } from '@/server/queries';
import BestSellingSwiper from './best-selling-swiper';
import Container from '../layout/container';
import SectionTitle from '../shared/section-title';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Separator } from '../ui/separator';

const BestSellingProducts = async () => {
  const { products } = await fetchProducts({ skip: 8 });

  return (
    <Container className='space-y-16'>
      <div>
        <SectionTitle title='Best Selling' />
        <header className='my-4 flex items-center justify-between'>
          <h3 className='text-xl font-bold lg:text-2xl'>
            Best Selling Products
          </h3>
        </header>
        <BestSellingSwiper products={products} />
        <div className='flex items-center justify-center'>
          <Button className='mx-auto inline-block' asChild>
            <Link href={`/shop`}>View All Products</Link>
          </Button>
        </div>
      </div>
      <Separator />
    </Container>
  );
};
export default BestSellingProducts;
