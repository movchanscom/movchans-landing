'use client';

import SectionWrapper from '@/components/shared/wrappers/SectionWrapper';
import { useScopedI18n } from '@/locales/client';
import { FC, useState } from 'react';
import BlogNavigation from './BlogNavigation';
import BlogItemsGrid from './BlogItemsGrid';
import BlogPagination from './BlogPagination';
import { BlogsByFilterResponse } from '@/contentful/blog';
import { BlogSearchParams } from '@/app/[locale]/blog/page';
import { useRouter } from 'next/navigation';

type BlogProps = {
  blogData: BlogsByFilterResponse;
  searchParams: BlogSearchParams;
  categories: string[];
};

const Blog: FC<BlogProps> = ({ blogData, searchParams, categories }) => {
  const { page, searchname, category } = searchParams;
  const { blogs, total } = blogData;
  const [blogItemsPerPage] = useState<number>(6);

  const t = useScopedI18n('blog');
  const router = useRouter();
  const mainCategory = t('allCategories');

  const updateSearchParams = (newParams: Partial<BlogSearchParams>) => {
    const updatedParams = { ...searchParams, ...newParams };
    const queryString = new URLSearchParams(updatedParams as any).toString();
    router.push(`/blog?${queryString}`, { scroll: false });
  };

  const handleSearchQueryChange = (newSearchQuery: string) => {
    if (newSearchQuery !== searchname)
      updateSearchParams({ searchname: newSearchQuery, page: 1 });
  };

  const handleActiveCategoryChange = (newCategory: string) => {
    if (newCategory !== category) {
      updateSearchParams({
        category: newCategory === mainCategory ? '' : newCategory,
        page: 1,
      });
    }
  };

  const handlePageChange = (newPage: number) => {
    if (newPage !== page) {
      updateSearchParams({ page: newPage });
    }
  };

  return (
    <SectionWrapper id={t('title')}>
      <div className='flex flex-col gap-10 md:gap-20'>
        <div className='relative flex h-auto w-full flex-col-reverse items-center md:flex-row'>
          <h1 className='h4-headline-med md:h1-headline z-2 -mx-4 -mt-4 w-full shrink-0 overflow-visible rounded-t-lg bg-[rgba(255,255,255,0.50)] py-10 pr-10 text-blue-600 backdrop-blur-sm md:mx-0 md:mt-0 md:w-[30rem] md:rounded-r-lg md:rounded-tl-none'>
            {t('title')}
          </h1>
          <img
            alt='Blog background'
            src={'/images/blog-bg.jpg'}
            className='img-max-screen h-[10rem] w-screen object-cover object-center md:-ml-28  md:-mr-10 md:h-[13.9375rem] md:w-full md:rounded-l-lg xl:-mr-[6.25rem]'
          />
        </div>
        <div className='flex flex-col gap-[5rem]'>
          <BlogNavigation
            categories={[mainCategory, ...categories]}
            activeCategory={category || mainCategory}
            handleSearchQuery={handleSearchQueryChange}
            handleActiveCategory={handleActiveCategoryChange}
          />
          <BlogItemsGrid posts={blogs} noItemsMessage={t('noItemsMessage')} />
          {blogData.blogs.length > 0 && (
            <BlogPagination
              activePage={+page || 1}
              pagesLength={Math.ceil(total / blogItemsPerPage)}
              handlePageChange={handlePageChange}
            />
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Blog;
