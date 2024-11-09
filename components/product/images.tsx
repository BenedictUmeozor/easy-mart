'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const Images = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    images.forEach(image => {
      ReactDOM.preload(image, { as: 'image', fetchPriority: 'high' });
    });
  }, [images]);

  return (
    <div className='flex items-start gap-8 max-lg:flex-col lg:col-span-7'>
      <div
        className={cn(
          'flex h-full flex-row gap-4 max-lg:order-2 lg:w-40 lg:flex-col',
          images.length > 2 && 'justify-between'
        )}
      >
        {images.map((image, index) => (
          <div
            key={image}
            className={cn(
              'group flex cursor-pointer items-center justify-center rounded-sm bg-primary-foreground p-4 hover:border hover:border-primary',
              currentIndex === index && 'border border-primary'
            )}
            onClick={() => setCurrentIndex(index)}
          >
            <Image
              src={image}
              alt='image'
              width={100}
              height={100}
              priority
              className='aspect-square w-full object-contain transition-transform duration-200 ease-linear group-hover:scale-105'
            />
          </div>
        ))}
      </div>
      <div className='flex flex-1 items-center justify-center rounded-sm bg-primary-foreground p-8 max-lg:order-1'>
        <Image
          src={images[currentIndex]}
          alt='image'
          width={500}
          height={500}
          priority
          className='aspect-[5/6] w-full object-contain'
        />
      </div>
    </div>
  );
};
export default Images;
