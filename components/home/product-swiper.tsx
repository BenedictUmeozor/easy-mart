'use client';

import type { AppProduct } from '@/interfaces';
import type { SwiperOptions } from 'swiper/types';
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

const ProductSwiper = ({ products }: { products: AppProduct[] }) => {
  const options: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: { clickable: true },
    modules: [Pagination, Scrollbar, A11y, Autoplay],
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
  };

  return (
    <div className='h-full rounded-sm bg-black text-white'>
      <Swiper {...options} className='h-full'>
        {products.map(product => (
          <SwiperSlide key={product.id}>
            <div className='flex h-full flex-col gap-8 p-8 lg:flex-row lg:p-16'>
              <div className='flex flex-1 flex-col justify-between gap-4'>
                <p>{product.title}</p>
                <p className='line-clamp-3 text-xl lg:text-2xl'>
                  {product.description}
                </p>
                <Link
                  href={`/product/${product.id}`}
                  className='group inline-flex items-center gap-1'
                >
                  <span className='underline hover:text-primary'>Shop Now</span>{' '}
                  <ArrowRight className='h-4 w-4 transition-all duration-150 ease-linear group-hover:ml-3' />
                </Link>
              </div>
              <div className='flex-1'>
                <Image
                  src={product.thumbnail}
                  alt={product.title}
                  height={300}
                  width={300}
                  priority
                  fetchPriority='high'
                  className='mx-auto aspect-square w-full max-w-xs object-contain'
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default ProductSwiper;
