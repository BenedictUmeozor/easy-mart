import { fetchCategories, fetchProducts } from '@/server/queries';
import Container from '../layout/container';
import Link from 'next/link';
import ProductSwiper from './product-swiper';
import { Suspense } from 'react';

const Hero = async () => {
  const resource = await fetchCategories();
  const categories = resource.slice(0, 12);
  return (
    <Container className='grid-cols-12 gap-8 lg:grid lg:max-h-[500px]'>
      <div className='col-span-3 hidden border-r pt-4 lg:block'>
        <ul className='space-y-4'>
          {categories.map(category => (
            <li key={category.slug}>
              <Link
                href={`/category/${category.slug}`}
                className='hover:text-primary'
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Suspense>
        <SwiperContainer />
      </Suspense>
    </Container>
  );
};

const SwiperContainer = async () => {
  const data = await fetchProducts({ limit: 8, skip: 0 });
  return (
    <div className='col-span-9 pt-4'>
      <ProductSwiper products={data.products} />
    </div>
  );
};

export default Hero;
