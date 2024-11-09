'use client';

import type { SingleProduct } from '@/interfaces';
import { Rating } from '@mui/material';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import {
  HeartIcon,
  MinusIcon,
  PlusIcon,
  RotateCwIcon,
  TruckIcon,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const ProductInfo = ({ product }: { product: SingleProduct }) => {
  return (
    <div className='space-y-8 lg:col-span-5'>
      <div className='space-y-4'>
        <h4 className='text-xl font-semibold tracking-wide lg:text-2xl'>
          {product.title}
        </h4>
        <div className='flex flex-wrap items-center gap-3'>
          <Rating value={product.rating} precision={0.5} readOnly />
          <span className='text-gray-500'>
            ({product.reviews.length} reviews){' '}
            <span className='mx-2 inline-block'>|</span>
            <span className='text-green-600'>in stock</span>
          </span>
        </div>
        <p className='text-xl font-normal tracking-wide lg:text-2xl'>
          ${product.price}
        </p>
        <p>{product.description}</p>
      </div>
      <Separator />
      <div className='flex items-center gap-4'>
        <div className='flex flex-1 items-center gap-2'>
          <div className='flex flex-1 items-center rounded-md border'>
            <Button
              variant='ghost'
              className={cn(
                'group flex-1 rounded-br-none rounded-tr-none hover:bg-primary'
              )}
            >
              <MinusIcon className='h-4 w-4 group-hover:text-white' />
            </Button>
            <div className='flex-[2] text-center'>1</div>
            <Button
              variant='ghost'
              className={cn(
                'group flex-1 rounded-bl-none rounded-tl-none hover:bg-primary'
              )}
            >
              <PlusIcon className='h-4 w-4 group-hover:text-white' />
            </Button>
          </div>
          <Button className='flex-1'>Add to Cart</Button>
        </div>
        <Button variant='outline' size='icon'>
          <HeartIcon className='h-6 w-6' />
        </Button>
      </div>
      <div>
        <div className='flex items-center gap-4 px-4 py-8'>
          <TruckIcon className='h-8 w-8' />
          <div className='space-y-1'>
            <p>Free delivery</p>
            <p className='text-sm underline'>
              Enter your postal code for Delivery Availability
            </p>
          </div>
        </div>
        <Separator />
        <div className='flex items-center gap-4 px-4 py-8'>
          <RotateCwIcon className='h-8 w-8' />
          <div className='space-y-1'>
            <p>Return delivery</p>
            <p className='text-sm underline'>
              Free 30 Days Delivery Returns. Details
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductInfo;
