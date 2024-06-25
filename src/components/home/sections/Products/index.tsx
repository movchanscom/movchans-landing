'use client';

import SectionWrapper from '@/components/shared/wrappers/SectionWrapper';
import { FC } from 'react';
import LogoGray from '/public/icons/products/logo-gray.svg';
import { NumbersToFive, NumbersToTwo } from '@/types/constants.type';
import ProductsInfoItem from './ProductsInfoItem';
import ProductStats from './ProductStats';
import useMediaQuery from '@/hooks/useMediaQuery';
import MovchansSwiper from '@/components/shared/MovchansSwiper';
import { SwiperSlide } from 'swiper/react';
import Image from 'next/image';

type ProductsProps = {
  title: string;
};

const Products: FC<ProductsProps> = (props) => {
  const lessThan1280px = useMediaQuery('(max-width: 1280px');

  return (
    <SectionWrapper {...props}>
      <div className='flex flex-col gap-8'>
        <div className='flex items-center justify-between'>
          <div className='grid w-full grid-cols-1 gap-4 xl:grid-cols-2'>
            <div className='col-span-1 flex w-full flex-col items-center justify-between gap-2 rounded-lg border border-gray-200 p-4'>
              {Array.from(Array(2).keys()).map((number) => (
                <ProductsInfoItem
                  number={(number + 1) as NumbersToTwo}
                  key={number}
                />
              ))}
            </div>
            <div className='relative col-span-1 hidden h-auto w-full xl:block'>
              <Image
                src={'/images/products-bg.jpg'}
                sizes={'100%'}
                alt='Products background'
                fill
                priority
                className='rounded-lg object-cover'
              />
            </div>
          </div>
        </div>
        {lessThan1280px ? (
          <MovchansSwiper freeMode>
            {Array.from(Array(5).keys()).map((number) => (
              <SwiperSlide key={number} className='!w-[18.25rem]'>
                <ProductStats number={(number + 1) as NumbersToFive} />
              </SwiperSlide>
            ))}
          </MovchansSwiper>
        ) : (
          <div className='grid grid-cols-3 items-center gap-6'>
            {Array.from(Array(5).keys()).map((number) => (
              <ProductStats
                key={number}
                number={(number + 1) as NumbersToFive}
              />
            ))}
            <div className='flex items-center justify-center '>
              <LogoGray />
            </div>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
};

export default Products;
