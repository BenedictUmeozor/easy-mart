import ContactForm from '@/components/forms/contact';
import Container from '@/components/layout/container';
import BreadCrumbComponent from '@/components/shared/breadcrumb-component';
import { Separator } from '@/components/ui/separator';
import type { BreadCrumbLink } from '@/interfaces';
import { Mail, Phone } from 'lucide-react';

const links: BreadCrumbLink[] = [
  {
    id: 1,
    name: 'Home',
    href: '/',
    isPage: false,
  },
  {
    id: 2,
    name: 'Contact',
    href: '/contact',
    isPage: true,
  },
];

export default function Page() {
  return (
    <main className='space-y-12 py-8 lg:py-12'>
      <Container className='items-center justify-center max-lg:flex'>
        <BreadCrumbComponent links={links} />
      </Container>
      <Container className='grid grid-cols-1 gap-8 lg:grid-cols-12'>
        <div className='flex flex-col gap-4 p-4 shadow-sm lg:col-span-3'>
          <div className='space-y-4'>
            <header className='flex items-center gap-2'>
              <div className='flex h-8 w-8 items-center justify-center rounded-full bg-primary'>
                <Phone className='h-4 w-4 text-white' />
              </div>
              <h5 className='text-lg font-medium'>Call to us</h5>
            </header>
            <div className='space-y-2'>
              <p>We are available 24/7</p>
              <p>Phone: +8801611112222</p>
            </div>
          </div>
          <Separator />
          <div className='space-y-4'>
            <header className='flex items-center gap-2'>
              <div className='flex h-8 w-8 items-center justify-center rounded-full bg-primary'>
                <Mail className='h-4 w-4 text-white' />
              </div>
              <h5 className='text-lg font-medium'>Write to us</h5>
            </header>
            <div className='space-y-2'>
              <p>Fill out our form and we will contact you within 24 hours.</p>
              <p>Email: customer@easymart.com</p>
              <p>Email: support@easymart.com</p>
            </div>
          </div>
        </div>
        <div className='p-6 shadow-sm lg:col-span-9'>
          <ContactForm />
        </div>
      </Container>
    </main>
  );
}
