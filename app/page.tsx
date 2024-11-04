import BestSellingProducts from '@/components/home/best-selling';
import Categories from '@/components/home/categories';
import Hero from '@/components/home/hero';
import Features from '@/components/shared/features';

export default function Page() {
  return (
    <main className='space-y-12 pb-8 md:pb-12 lg:pb-16'>
      <Hero />
      <BestSellingProducts />
      <Categories />
      <Features />
    </main>
  );
}
