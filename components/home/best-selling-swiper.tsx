'use client';

import type { AppProduct } from '@/interfaces';
import type { SwiperOptions } from 'swiper/types';
import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Product from '../shared/product';

const BestSellingSwiper = ({ products }: { products: AppProduct[] }) => {
  const options: SwiperOptions = {
    slidesPerView: 5,
    spaceBetween: 10,
    pagination: false,
    modules: [Pagination, Scrollbar, A11y, Autoplay],
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
      1280: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
    },
  };

  return (
    <Swiper className='mb-12' {...options}>
      {products.map(product => (
        <SwiperSlide key={product.id}>
          <Product product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default BestSellingSwiper;
