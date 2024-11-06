import Container from '@/components/layout/container';
import { PreloadAboutResources } from '@/lib/preload-resources';
import {
  CircleDollarSign,
  DollarSignIcon,
  ShoppingBagIcon,
  StoreIcon,
} from 'lucide-react';
import Image from 'next/image';

export default function page() {
  return (
    <main className='space-y-12 py-8 lg:py-12'>
      <PreloadAboutResources />
      <Container className='grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-16'>
        <div className='space-y-8 text-center leading-normal lg:text-left'>
          <h2 className='text-3xl font-semibold lg:text-6xl'>Our Story</h2>
          <div className='space-y-6'>
            <p>
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.{' '}
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
        </div>
        <div>
          <Image
            src='/about.png'
            alt='Our story'
            width={500}
            height={500}
            className='w-full max-w-full object-contain'
            priority
          />
        </div>
      </Container>
      <Container className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
        <div className='flex flex-col items-center justify-center gap-4 border p-4 text-center'>
          <div className='mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-300'>
            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-black'>
              <StoreIcon className='h-6 w-6 text-white' />
            </div>
          </div>
          <div className='space-y-2'>
            <p className='text-lg font-semibold lg:text-xl'>10.5k</p>
            <p className='w-full'>Sellers active our site</p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-4 border p-4 text-center'>
          <div className='mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-300'>
            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-black'>
              <DollarSignIcon className='h-6 w-6 text-white' />
            </div>
          </div>
          <div className='space-y-2'>
            <p className='text-lg font-semibold lg:text-xl'>33k</p>
            <p className='w-full'>Monthly product sales</p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-4 border p-4 text-center'>
          <div className='mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-300'>
            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-black'>
              <ShoppingBagIcon className='h-6 w-6 text-white' />
            </div>
          </div>
          <div className='space-y-2'>
            <p className='text-lg font-semibold lg:text-xl'>45.5k</p>
            <p className='w-full'>Customers active in our site</p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-4 border p-4 text-center'>
          <div className='mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-300'>
            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-black'>
              <CircleDollarSign className='h-6 w-6 text-white' />
            </div>
          </div>
          <div className='space-y-2'>
            <p className='text-lg font-semibold lg:text-xl'>50k</p>
            <p className='w-full'>Annual gross sale in our site</p>
          </div>
        </div>
      </Container>
    </main>
  );
}
