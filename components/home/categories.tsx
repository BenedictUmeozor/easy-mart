import { fetchCategories } from '@/server/queries';
import { Suspense } from 'react';
import Category from './category';

const Categories = async () => {
  const categories = await fetchCategories();

  return (
    <section>
      {categories.map(category => (
        <Suspense key={category.slug}>
          <Category category={category} />
        </Suspense>
      ))}
    </section>
  );
};
export default Categories;
