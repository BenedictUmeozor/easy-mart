import Link from 'next/link';
import Container from '../container';
import DesktopNav from './desktop-nav';
import Toolbar from './toolbar';
import MobileNav from './mobile-nav';
import Marquee from 'react-fast-marquee';

const Header = () => {
  return (
    <header className='border-b'>
      <section className='bg-black text-center text-white'>
        <Marquee direction='left' className='py-2 text-sm' pauseOnHover={true}>
          Summer sales for all products and free express delivery{' '}
          <Link
            href='/shop'
            className='ml-2 inline-block font-semibold underline hover:text-primary'
          >
            Shop now!
          </Link>
        </Marquee>
      </section>
      <Container className='flex items-center gap-8 py-4 max-lg:justify-between'>
        <div className='flex items-center gap-2 lg:block lg:flex-1'>
          <MobileNav />
          <Link
            href='/'
            className='text-xl font-bold hover:text-primary lg:text-2xl'
          >
            EasyMart
          </Link>
        </div>
        <DesktopNav />
        <Toolbar />
      </Container>
    </header>
  );
};
export default Header;
