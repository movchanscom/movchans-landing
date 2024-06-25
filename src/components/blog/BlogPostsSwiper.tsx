'use client';

import BlogItemPreview from '@/components/blog/BlogItemPreview';
import MovchansSwiper from '@/components/shared/MovchansSwiper';
import SectionWrapper from '@/components/shared/wrappers/SectionWrapper';
import { BlogCardResponse } from '@/contentful/blog';
import { useScopedI18n } from '@/locales/client';
import { FC } from 'react';
import { SwiperSlide } from 'swiper/react';

type BlogPostsSwiperType = {
  posts: BlogCardResponse[];
  title: string;
  link?: string;
  buttonText?: string;
};

const BlogPostsSwiper: FC<BlogPostsSwiperType> = ({ posts, ...rest }) => {
  return (
    <>
      {posts && !!posts.length && (
        <SectionWrapper {...rest}>
          <MovchansSwiper freeMode swiperProps={{ spaceBetween: 0 }}>
            {posts.map((post, index) => (
              <SwiperSlide key={index} className='md:!w-1/2 p-4'>
                <div className=''>
                  <BlogItemPreview blogPost={post} />
                </div>
              </SwiperSlide>
            ))}
          </MovchansSwiper>
        </SectionWrapper>
      )}
    </>
  );
};

export default BlogPostsSwiper;
