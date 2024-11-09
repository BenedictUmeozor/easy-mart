'use client';

import type { AppProduct } from '@/interfaces';
import Image from 'next/image';
import Link from 'next/link';
import { Rating } from '@mui/material';
import useIsMounted from '@/hooks/mounted';

const Product = ({ product }: { product: AppProduct }) => {
  const isMounted = useIsMounted();

  return (
    <div className='space-y-2'>
      <Link
        href={`/product/${product.id}`}
        className='group relative block bg-primary-foreground'
      >
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={300}
          height={300}
          className='aspect-square w-full object-cover'
        />
        <button className='absolute bottom-0 left-0 z-10 hidden w-full bg-black py-2 text-center text-sm text-white group-hover:block'>
          Add to cart
        </button>
      </Link>
      <div className='space-y-2'>
        <Link
          href={`/product/${product.id}`}
          className='line-clamp-1 font-medium hover:underline'
        >
          {product.title}
        </Link>
        <div className='flex items-center gap-2'>
          <span className='text-primary'>${product.price}</span>
          <span className='text-gray-400 line-through'>
            $
            {(product.price / (1 - product.discountPercentage / 100)).toFixed(
              2
            )}
          </span>
        </div>
        {isMounted && <Rating value={product.rating} readOnly />}
      </div>
    </div>
  );
};
export default Product;
