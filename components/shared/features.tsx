import Image from 'next/image';
import Container from '../layout/container';

const Features = () => {
  return (
    <Container className='my-16 grid grid-cols-1 gap-8 lg:grid-cols-3'>
      <div className='space-y-6 text-center'>
        <div className='mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-300'>
          <div className='flex h-16 w-16 items-center justify-center rounded-full bg-black'>
            <Image
              src='/delivery.svg'
              alt='Fast delivery'
              height={20}
              width={20}
              className='h-12 w-12 rounded-full object-cover'
            />
          </div>
        </div>
        <div className='space-y-1'>
          <h3 className='font-semibold'>FREE AND FAST DELIVERY</h3>
          <p className='text-sm'>Free delivery for all orders over $140</p>
        </div>
      </div>
      <div className='space-y-6 text-center'>
        <div className='mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-300'>
          <div className='flex h-16 w-16 items-center justify-center rounded-full bg-black'>
            <Image
              src='/headphones.svg'
              alt='24/7 support'
              height={20}
              width={20}
              className='h-12 w-12 rounded-full object-cover'
            />
          </div>
        </div>
        <div className='space-y-1'>
          <h3 className='font-semibold'>24/7 CUSTOMER SERVICE</h3>
          <p className='text-sm'>Friendly 24/7 customer support</p>
        </div>
      </div>
      <div className='space-y-6 text-center'>
        <div className='mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-300'>
          <div className='flex h-16 w-16 items-center justify-center rounded-full bg-black'>
            <Image
              src='/secure.svg'
              alt='Secured'
              height={20}
              width={20}
              className='h-12 w-12 rounded-full object-cover'
            />
          </div>
        </div>
        <div className='space-y-1'>
          <h3 className='font-semibold'>MONEY BACK GUARANTEE</h3>
          <p className='text-sm'>We return money within 30 days</p>
        </div>
      </div>
    </Container>
  );
};
export default Features;
