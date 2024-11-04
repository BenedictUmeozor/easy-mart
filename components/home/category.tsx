import type { AppCategory } from '@/interfaces';
import Container from '../layout/container';
import { Separator } from '../ui/separator';
import SectionTitle from '../shared/section-title';
import { Button } from '../ui/button';
import Link from 'next/link';
import { fetchCaregoryProducts } from '@/server/queries';
import Product from '../shared/product';

const Category = async ({ category }: { category: AppCategory }) => {
  const data = await fetchCaregoryProducts(category.slug);
  const products = data.products.slice(0, 5);

  return (
    <Container>
      <div>
        <SectionTitle title={category.name} />
        <header className='my-4 flex items-center justify-between'>
          <h3 className='text-xl font-bold lg:text-2xl'>
            Explore {category.name}
          </h3>
          <Button size='sm' asChild>
            <Link href={`/category/${category.slug}`}>View All</Link>
          </Button>
        </header>
        <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
          {products.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Separator className='my-16' />
    </Container>
  );
};
export default Category;
