import { cn } from '@/lib/utils';
import type { ReactNode } from 'react';

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'container mx-auto max-w-7xl px-4 md:px-6 lg:px-8',
        className
      )}
    >
      {children}
    </div>
  );
};
export default Container;
