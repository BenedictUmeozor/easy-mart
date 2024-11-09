import type { ProductResponse } from '@/interfaces';
import Container from '../layout/container';
import Product from '../shared/product';
import AppPagination from '../shared/pagination';
import { fetchCategories } from '@/server/queries';
import { Button } from '../ui/button';
import Link from 'next/link';
import { MoveUpRightIcon } from 'lucide-react';

const getProducts = async (
  skip: number = 0,
  category: string
): Promise<ProductResponse> => {
  const res = await fetch(
    `https://dummyjson.com/products/category/${category}?limit=25&skip=${skip}`,
    {
      next: { revalidate: 6 * 3600 },
    }
  );

  return res.json();
};

const CategoryPage = async ({
  page,
  category,
}: {
  page: number;
  category: string;
}) => {
  const skip = (page - 1) * 25;
  const { products, total } = await getProducts(skip, category);
  const categories = (await fetchCategories()).filter(
    cat => cat.slug !== category
  );

  return (
    <Container className='space-y-12'>
      <h2 className='text-xl font-semibold capitalize max-lg:text-center lg:text-3xl'>
        {category} Products{' '}
        <span className='italic text-gray-500'>({total})</span>
      </h2>

      <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      {total > 25 && (
        <AppPagination
          page={page}
          total={total}
          pathname={`/category/${category}`}
        />
      )}
      <div className='space-y-4'>
        <h5 className='text-sm tracking-wide max-lg:text-center'>
          EXPLORE MORE CATEGORIES
        </h5>
        <div className='flex flex-wrap items-center gap-2'>
          {categories.map(category => (
            <Button key={category.slug} variant='ghost' asChild>
              <Link
                className='flex items-center gap-1'
                href={`/category/${category.slug}`}
              >
                {category.name}
                <MoveUpRightIcon className='h-3 w-3' />
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </Container>
  );
};
export default CategoryPage;
