'use client';

import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import SwiperCore, { Swiper as SwiperInstance } from 'swiper';
import SwiperArrowButton from '@/components/home/sections/Blog/BlogSwiper/SwiperArrowButton';
import SwiperProgressBar from '@/components/home/sections/Blog/BlogSwiper/SwiperProgressBar';
import { useCallback, useEffect, useRef, useState } from 'react';
import BlogSlide from '@/components/home/sections/Blog/BlogSlide';
import { NumbersToThree } from '@/types/constants.type';
import { BLOG_IMAGES } from '@/constants';

SwiperCore.use([Navigation, Pagination]);

const BlogSwiper = () => {
  const [progress, setProgress] = useState<number>(0);
  const swiperRef = useRef<SwiperInstance | null>(null);

  const handleNext = useCallback(() => {
    if (
      swiperRef.current &&
      typeof swiperRef.current.slideNext === 'function'
    ) {
      swiperRef.current.slideNext();
    }
  }, []);

  const handlePrev = useCallback(() => {
    if (
      swiperRef.current &&
      typeof swiperRef.current.slidePrev === 'function'
    ) {
      swiperRef.current.slidePrev();
    }
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      if (swiperRef.current) {
        const swiper = swiperRef.current;
        const progress = (swiper.realIndex + 1) / swiper.slides.length;
        setProgress(progress);
      }
    };

    if (swiperRef.current) {
      const swiper = swiperRef.current;
      swiper.on('slideChange', updateProgress);
      updateProgress();
    }

    return () => {
      if (swiperRef.current) {
        swiperRef.current.off('slideChange', updateProgress);
      }
    };
  }, []);

  return (
    <div>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        navigation={false}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
      >
        {Array.from(Array(3).keys()).map((number) => (
          <BlogSlide
            key={number}
            number={(number + 1) as NumbersToThree}
            image={BLOG_IMAGES[number]}
          />
        ))}
      </Swiper>
      <div className='mt-6 flex items-center justify-end gap-4 self-end'>
        <SwiperArrowButton direction='left' action={handlePrev} />
        <SwiperProgressBar progress={progress} />
        <SwiperArrowButton direction='right' action={handleNext} />
      </div>
    </div>
  );
};

export default BlogSwiper;
