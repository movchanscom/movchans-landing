import ArrowRightLongIcon from '/public/icons/arrow-right-long.svg';
import { getScopedI18n } from '@/locales/server';
import Link from 'next/link';
import SectionWrapper from '../shared/wrappers/SectionWrapper';
import { FC } from 'react';

type BottomNavigationProps = {
  nextArticleSlug: string | undefined;
};

const BottomNavigation: FC<BottomNavigationProps> = async ({
  nextArticleSlug,
}) => {
  const t = await getScopedI18n('blog');

  return (
    <SectionWrapper>
      <div className='grid grid-cols-12 gap-4 md:gap-10'>
        <div className='col-span-2 hidden lg:block' />
        <div className='relative col-span-12 py-10 lg:col-span-8'>
          <div className='absolute left-1/2 top-1/2 z-[-1] mx-auto h-full  w-screen -translate-x-1/2 -translate-y-1/2 bg-gray-100 !transition-none lg:max-w-[90rem] ' />
          <div className='b3m-body-med md:b1m-body-med flex items-center justify-between text-blue-600'>
            <Link
              href={'/blog'}
              className='flex items-center gap-4 px-3 py-3 md:px-5'
            >
              <span className='rotate-180'>
                <ArrowRightLongIcon />
              </span>
              {t('allPosts')}
            </Link>
            {nextArticleSlug && (
              <Link
                href={`/blog/${nextArticleSlug}`}
                className='flex items-center gap-4 px-3 py-3 md:px-5'
              >
                {t('nextPost')}
                <span>
                  <ArrowRightLongIcon />
                </span>
              </Link>
            )}
          </div>
        </div>
        <div className='col-span-2 hidden lg:block' />
      </div>
    </SectionWrapper>
  );
};

export default BottomNavigation;
