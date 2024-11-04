import Link from 'next/link';
import Container from './container';
import { Input } from '../ui/input';
import {
  Facebook,
  Instagram,
  Linkedin,
  SendHorizonalIcon,
  Twitter,
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className='space-y-20 bg-black pb-4 pt-16 text-white'>
      <Container className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5'>
        <div className='space-y-4'>
          <Link href='/' className='text-xl font-bold lg:text-2xl'>
            EasyMart
          </Link>
          <p className='font-semibold'>Subscribe</p>
          <p className='text-white/70'>Get 10% off your first order</p>
          <div className='relative'>
            <Input
              placeholder='Enter your email'
              type='email'
              aria-label='Email'
              className='bg-black'
            />
            <SendHorizonalIcon className='absolute right-2 top-1/2 h-5 w-5 -translate-y-1/2' />
          </div>
        </div>
        <div className='space-y-4'>
          <h3 className='text-xl font-bold lg:text-2xl'>Support</h3>
          <div className='space-y-3 text-white/70'>
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
        </div>
        <div className='space-y-4'>
          <h3 className='text-xl font-bold lg:text-2xl'>Account</h3>
          <ul className='space-y-3 text-white/70'>
            <li>
              <Link href='/account' className='hover:text-white'>
                My Account
              </Link>
            </li>
            <li>
              <Link href='/login' className='hover:text-white'>
                Login
              </Link>
            </li>
            <li>
              <Link href='/cart' className='hover:text-white'>
                Cart
              </Link>
            </li>
            <li>
              <Link href='/wishlist' className='hover:text-white'>
                Wishlist
              </Link>
            </li>
            <li>
              <Link href='/shop' className='hover:text-white'>
                Shop
              </Link>
            </li>
          </ul>
        </div>
        <div className='space-y-4'>
          <h3 className='text-xl font-bold lg:text-2xl'>Quick Links</h3>
          <ul className='space-y-3 text-white/70'>
            <li>
              <Link href='#' className='hover:text-white'>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href='#' className='hover:text-white'>
                Terms Of Use
              </Link>
            </li>
            <li>
              <Link href='#' className='hover:text-white'>
                FAQ
              </Link>
            </li>
            <li>
              <Link href='#' className='hover:text-white'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className='space-y-4'>
          <h3 className='text-xl font-bold lg:text-2xl'>Follow Us</h3>
          <div className='flex items-center gap-4 text-white/70'>
            <Link href='#' className='hover:text-white'>
              <Facebook className='h-5 w-5' />
            </Link>
            <Link href='#' className='hover:text-white'>
              <Twitter className='h-5 w-5' />
            </Link>
            <Link href='#' className='hover:text-white'>
              <Instagram className='h-5 w-5' />
            </Link>
            <Link href='#' className='hover:text-white'>
              <Linkedin className='h-5 w-5' />
            </Link>
          </div>
        </div>
      </Container>
      <Container className='text-center text-white/40'>
        &copy; Copyright Benedict 2024. All right reserved
      </Container>
    </footer>
  );
};
export default Footer;
