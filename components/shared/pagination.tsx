import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../ui/pagination';
import { cn } from '@/lib/utils';

const AppPagination = ({
  page,
  total,
  pathname,
}: {
  total: number;
  page: number;
  pathname: string;
}) => {
  const totalPages = Math.ceil(total / 25);

  const pageNumbers: number[] = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const maxPageNumberLimit = 5;
  const pageNumLimit = Math.floor(maxPageNumberLimit / 2);

  const activePages = pageNumbers.slice(
    Math.max(0, Number(page) - 1 - pageNumLimit),
    Math.min(Number(page) - 1 + pageNumLimit + 1, pageNumbers.length)
  );

  const renderPages = () => {
    const renderedPages = activePages.map(p => {
      return (
        <PaginationItem key={p}>
          <PaginationLink
            href={`${pathname}/page/${p}`}
            className={cn({
              'bg-neutral-100': page === p || (!page && page === 1),
            })}
          >
            {p}
          </PaginationLink>
        </PaginationItem>
      );
    });

    if (activePages[0] > 1) {
      renderedPages.unshift(<PaginationEllipsis key='ellipsis-start' />);
    }

    if (activePages[activePages.length - 1] < pageNumbers.length) {
      renderedPages.push(<PaginationEllipsis key='ellipsis-end' />);
    }

    return renderedPages;
  };

  const prevPageUrl = () => {
    const prevPage = page - 1;
    if (prevPage > 0) {
      return `${pathname}/page/${prevPage}`;
    }
    return `${pathname}/page/1`;
  };

  const nextPageUrl = () => {
    const nextPage = page + 1;
    if (nextPage <= totalPages) {
      return `${pathname}/page/${nextPage}`;
    }
    return `${pathname}/page/${totalPages}`;
  };

  return (
    <div className='mt-8 grid place-items-center'>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={prevPageUrl()}
              className={cn({
                'bg-neutral-100': page === 1 || !page,
              })}
            />
          </PaginationItem>
          {renderPages()}
          <PaginationItem>
            <PaginationNext
              href={nextPageUrl()}
              className={cn({
                'bg-neutral-100': page === totalPages,
              })}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default AppPagination;
