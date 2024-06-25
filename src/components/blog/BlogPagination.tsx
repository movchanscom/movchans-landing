'use client';

import { FC } from 'react';
import ArrowRightLongIcon from '/public/icons/arrow-right-long.svg';
import clsx from 'clsx';

type BlogPaginationProps = {
  activePage: number;
  pagesLength: number;
  handlePageChange: (page: number) => void;
};

const BlogPagination: FC<BlogPaginationProps> = ({
  activePage,
  pagesLength,
  handlePageChange,
}) => {
  return (
    <div className='flex w-full items-center justify-center gap-3'>
      <button
        title='Previous page'
        className='bg-transparent rotate-180 p-2 disabled:opacity-10'
        disabled={activePage === 1}
        onClick={() => handlePageChange(activePage - 1)}
      >
        <ArrowRightLongIcon />
      </button>
      <div className='flex flex-wrap items-center gap-3 justify-center'>
        {Array.from(Array(pagesLength).keys()).map((index) => (
          <button
            title={`Page #${index + 1}`}
            key={index}
            className={clsx(
              'flex aspect-square w-10 items-center justify-center rounded-md text-blue-600',
              {
                'bg-blue-600 !text-basic-white': activePage === index + 1,
              }
            )}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <button
        title='Next page'
        className='bg-transparent p-2 disabled:opacity-10'
        disabled={activePage === pagesLength}
        onClick={() => handlePageChange(activePage + 1)}
      >
        <ArrowRightLongIcon />
      </button>
    </div>
  );
};

export default BlogPagination;
