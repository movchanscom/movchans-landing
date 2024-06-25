'use client';

import SearchInput from '../shared/ui/SearchInput';
import { useScopedI18n } from '@/locales/client';
import Tabs from '../shared/ui/Tabs';
import { FC } from 'react';

type BlogNavigationProps = {
  activeCategory: string;
  handleActiveCategory: (category: string) => void;
  handleSearchQuery: (query: string) => void;
  categories: string[];
};

const BlogNavigation: FC<BlogNavigationProps> = ({
  activeCategory,
  handleActiveCategory,
  handleSearchQuery,
  categories,
}) => {
  const t = useScopedI18n('blog');

  return (
    <div className='-mx-4 flex flex-col items-center justify-center gap-6 bg-gray-200 p-4 md:-mx-[2.5rem] md:p-10 xl:-mx-[6.25rem]'>
      <div className='w-full max-w-[23.125rem]'>
        <SearchInput
          placeholder={t('searchPlaceholder')}
          onSearch={handleSearchQuery}
        />
      </div>
      <Tabs
        translationPath='blog.categories'
        items={categories}
        activeTab={activeCategory}
        handleActiveItem={handleActiveCategory}
        className='no-scrollbar max-w-fit !flex-row overflow-x-scroll'
        tabClassName='shrink-0'
      />
    </div>
  );
};

export default BlogNavigation;
