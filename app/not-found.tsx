import Container from '@/components/layout/container';
import BreadCrumbComponent from '@/components/shared/breadcrumb-component';
import { Button } from '@/components/ui/button';
import type { BreadCrumbLink } from '@/interfaces';
import Link from 'next/link';

const links: BreadCrumbLink[] = [
  {
    id: 1,
    name: 'Home',
    href: '/',
    isPage: false,
  },
  {
    id: 2,
    name: '404 Error',
    href: '/404',
    isPage: true,
  },
];

export default function NotFound() {
  return (
    <section className='space-y-12 py-8 lg:py-12'>
      <Container className='items-center justify-center max-lg:flex'>
        <BreadCrumbComponent links={links} />
      </Container>
      <Container className='space-y-12 text-center'>
        <h2 className='text-4xl lg:text-8xl'>404 Not Found</h2>
        <p>Your visited page not found. You may go home page.</p>
        <div className='grid place-items-center'>
          <Button className='w-44' asChild>
            <Link href='/'>Back to Home</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
