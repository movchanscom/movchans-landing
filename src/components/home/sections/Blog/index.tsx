'use client';

import SectionWrapper from '@/components/shared/wrappers/SectionWrapper';
import { FC } from 'react';
import MovchansSwiper from '@/components/shared/MovchansSwiper';
import BlogSlide from './BlogSlide';
import { BLOG_IMAGES } from '@/constants';
import { NumbersToThree } from '@/types/constants.type';
import useMediaQuery from '@/hooks/useMediaQuery';

type BlogProps = {
  title: string;
  link?: string;
  buttonText?: string;
};

const Blog: FC<BlogProps> = (props) => {
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1024px)');

  return (
    <SectionWrapper {...props} id='Blog'>
      <MovchansSwiper>
        {Array.from(Array(3).keys()).map((number) => (
          <BlogSlide
            key={number}
            number={(number + 1) as NumbersToThree}
            image={`${BLOG_IMAGES[number]}${isTablet ? '-md' : ''}`}
          />
        ))}
      </MovchansSwiper>
    </SectionWrapper>
  );
};

export default Blog;
