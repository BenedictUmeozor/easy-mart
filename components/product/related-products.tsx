import { fetchCaregoryProducts } from '@/server/queries';
import Container from '../layout/container';
import SectionTitle from '../shared/section-title';
import Product from '../shared/product';

const RelatedProducts = async ({
  category,
  productId,
}: {
  category: string;
  productId: number;
}) => {
  const { products } = await fetchCaregoryProducts(category);
  const relatedProducts = products
    .filter(product => product.id !== productId)
    .slice(0, 4);

  return (
    <section>
      <Container className='space-y-8'>
        <SectionTitle title='Related Products' />
        <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
          {relatedProducts.map(product => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};
export default RelatedProducts;
