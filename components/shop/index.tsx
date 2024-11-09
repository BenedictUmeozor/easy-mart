import type { ProductResponse } from '@/interfaces';
import Container from '../layout/container';
import Product from '../shared/product';
import AppPagination from '../shared/pagination';
// import FilterProducts from './filter';

const getProducts = async (skip: number = 0): Promise<ProductResponse> => {
  const res = await fetch(
    `https://dummyjson.com/products?limit=25&skip=${skip}`,
    {
      next: { revalidate: 6 * 3600 },
    }
  );

  return res.json();
};

const Shop = async ({ page }: { page: number }) => {
  const skip = (page - 1) * 25;
  const { products, total } = await getProducts(skip);
  return (
    <Container className='space-y-12'>
      <div className='flex items-center justify-between gap-4 max-lg:flex-col'>
        <h2 className='text-xl font-semibold lg:text-3xl'>
          All Products <span className='italic text-gray-500'>({total})</span>
        </h2>
        {/* <FilterProducts /> */}
      </div>
      <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <AppPagination page={page} total={total} pathname='/shop' />
    </Container>
  );
};
export default Shop;
