'use client';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Fragment } from 'react';
import type { BreadCrumbLink } from '@/interfaces';
import { SlashIcon } from 'lucide-react';

const BreadCrumbComponent = ({ links }: { links: BreadCrumbLink[] }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {links.map(link => {
          return (
            <Fragment key={link.id}>
              {link.isPage ? (
                <BreadcrumbItem key={link.id}>
                  {' '}
                  <BreadcrumbPage className='text-black'>
                    {link.name}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              ) : (
                <Fragment>
                  <BreadcrumbItem key={link.id}>
                    {link.isClickable === false ? (
                      <BreadcrumbPage className='text-black'>
                        {link.name}
                      </BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink
                        href={link.href}
                        className='text-black/70 hover:text-black/60'
                      >
                        {link.name}
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                  <BreadcrumbSeparator>
                    <SlashIcon />
                  </BreadcrumbSeparator>
                </Fragment>
              )}
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumbComponent;
