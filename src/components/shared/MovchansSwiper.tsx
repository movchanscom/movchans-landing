'use client';

import { Swiper, SwiperProps } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import { FreeMode, Navigation, Pagination, Grid } from 'swiper/modules';
import SwiperCore, { Swiper as SwiperInstance } from 'swiper';
import SwiperArrowButton from './SwiperArrowButton';
import SwiperProgressBar from './SwiperProgressBar';
import { FC, ReactNode, useCallback, useEffect, useRef, useState } from 'react';

SwiperCore.use([Navigation, Pagination]);

type MovchansSwiperProps = {
  children: ReactNode;
  freeMode?: boolean;
  grid?: boolean;
  swiperProps?: SwiperProps;
};

const MovchansSwiper: FC<MovchansSwiperProps> = ({
  children,
  freeMode = false,
  grid = false,
  swiperProps,
}) => {
  const [progress, setProgress] = useState<number>(0);
  const swiperRef = useRef<SwiperInstance | null>(null);

  const handleNext = useCallback(() => {
    swiperRef.current?.slideNext();
  }, []);

  const handlePrev = useCallback(() => {
    swiperRef.current?.slidePrev();
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      if (swiperRef.current) {
        const swiper = swiperRef.current;
        const progress = swiper.progress;
        setProgress(progress);
      }
    };

    if (swiperRef.current) {
      const swiper = swiperRef.current;
      swiper.on('slideChange', updateProgress);
      swiper.on('progress', updateProgress);
      updateProgress();
    }

    return () => {
      if (swiperRef.current) {
        swiperRef.current.off('slideChange', updateProgress);
        swiperRef.current.off('progress', updateProgress);
      }
    };
  }, []);

  const modules = [Navigation, Pagination];
  if (freeMode) modules.push(FreeMode);

  if (grid) modules.push(Grid);
  
  return (
    <div>
      <Swiper
        spaceBetween={30}
        slidesPerView={'auto'}
        navigation={false}
        freeMode={freeMode}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={modules}
        {...swiperProps}
      >
        {children}
      </Swiper>
      <div className='mt-6 flex items-center justify-center gap-4 self-end md:justify-end'>
        <SwiperArrowButton direction='left' action={handlePrev} />
        <SwiperProgressBar progress={progress} />
        <SwiperArrowButton direction='right' action={handleNext} />
      </div>
    </div>
  );
};

export default MovchansSwiper;
