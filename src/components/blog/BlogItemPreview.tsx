'use client';

import { BlogCardResponse } from '@/contentful/blog';
import ReadMoreButton from '../home/sections/Blog/ReadMoreButton';
import { useScopedI18n } from '@/locales/client';
import { useRouter } from 'next/navigation';

import { FC } from 'react';
import Image from 'next/image';

type BlogItemPreviewProps = {
  blogPost: BlogCardResponse;
};

const BlogItemPreview: FC<BlogItemPreviewProps> = ({ blogPost }) => {
  const { navigationImage, title, shortDescription, slug } = blogPost;
  const t = useScopedI18n('blog');
  const router = useRouter();
  return (
    <div className='relative flex w-full flex-col overflow-hidden rounded-lg lg:flex-row'>
      {navigationImage && (
        // eslint-disable-next-line jsx-a11y/alt-text
        <Image
          {...navigationImage}
          className='h-[12.5rem] w-full object-cover object-center lg:h-[21.75rem] lg:w-fit'
        />
      )}
      <div className='relative bottom-0 right-0 top-0 -mt-4 flex w-full grow flex-col justify-between rounded-t-lg bg-gray-100 p-4 lg:absolute lg:mt-0  lg:w-[70%] lg:rounded-t-none'>
        <div className='flex grow flex-col gap-6'>
          <h3 className='h5-headline-caps  md:h5-headline-caps xl:h4-headline-sb-caps'>
            {title}
          </h3>
          <p className='xl:b2m-body-reg b3m-body-reg line-clamp-5 overflow-hidden text-blue-700'>
            {shortDescription}
          </p>
        </div>
        <div className='flex justify-end'>
          <ReadMoreButton
            label={t('readMore')}
            action={() => router.push(`/blog/${slug}`)}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogItemPreview;
