'use client';

import SectionWrapper from '@/components/shared/wrappers/SectionWrapper';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const TeamPhotos = () => {
  const initialImages = [
    'team-photo-1.jpg',
    'team-photo-2.jpg',
    'team-photo-3.jpg',
    'team-photo-4.jpg',
    'team-photo-5.jpg',
    'team-photo-6.jpg',
    'team-photo-7.jpg',
    'team-photo-8.jpg',
    'team-photo-9.jpg',
    'team-photo-10.jpg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [animationOn, setAnimationOn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationOn(false);
      setTimeout(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % initialImages.length
        );
        setAnimationOn(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [initialImages.length]);

  return (
    <SectionWrapper id='Gallery'>
      <div className='-mx-4 grid h-[49rem] grid-cols-12 grid-rows-9 gap-2 md:mx-[-2.5rem] md:h-[59.5rem] md:grid-rows-12 md:gap-6 xl:mx-[-6.25rem] xl:h-[44rem]'>
        <div className='relative col-span-6 row-span-3 h-full max-h-full w-full max-w-full md:col-span-7 md:row-span-3 xl:col-span-5 xl:row-span-4'>
          <Image
            style={{ opacity: animationOn ? 1 : 0 }}
            src={`/images/about-us/${initialImages[currentImageIndex]}`}
            alt={`Team photo ${1}`}
            className='object-cover transition-opacity duration-500'
            sizes={'100%'}
            fill
            priority
          />
        </div>
        <div className='relative col-span-6 row-span-3 h-full max-h-full w-full max-w-full md:col-span-5 md:row-span-6 xl:col-span-3 xl:row-span-8'>
          <Image
            style={{ opacity: animationOn ? 1 : 0 }}
            src={`/images/about-us/${initialImages[(currentImageIndex + 1) % initialImages.length]}`}
            alt={`Team photo ${2}`}
            className='object-cover transition-opacity duration-500'
            sizes={'100%'}
            fill
            priority
          />
        </div>
        <div className='relative hidden h-full max-h-full w-full max-w-full md:col-span-7 md:row-span-3 md:block xl:col-span-4 xl:row-span-4'>
          <Image
            style={{ opacity: animationOn ? 1 : 0 }}
            src={`/images/about-us/${initialImages[(currentImageIndex + 2) % initialImages.length]}`}
            alt={`Team photo ${3}`}
            className='object-cover transition-opacity duration-500'
            sizes={'100%'}
            fill
            priority
          />
        </div>
        <div className='col-span-12 row-span-1 flex h-full max-h-full w-full max-w-full items-center justify-center bg-gray-100 object-cover md:col-span-6 md:row-span-3 xl:col-span-5 xl:row-span-4'>
          <img
            src={`/icons/logo.svg`}
            alt={`Team photo ${4}`}
            className='w-full max-w-[19.8rem]'
          />
        </div>
        <div className='relative col-span-12 row-span-3 h-full max-h-full w-full max-w-full md:col-span-6 md:row-span-3 xl:col-span-4 xl:row-span-8'>
          <Image
            style={{ opacity: animationOn ? 1 : 0 }}
            src={`/images/about-us/${initialImages[(currentImageIndex + 3) % initialImages.length]}`}
            alt={`Team photo ${5}`}
            className='object-cover transition-opacity duration-500'
            sizes={'100%'}
            fill
            priority
          />
        </div>
        <div className='relative col-span-12 row-span-2 h-full max-h-full w-full max-w-full md:col-span-12 md:row-span-3 xl:col-span-8 xl:row-span-4'>
          <Image
            style={{ opacity: animationOn ? 1 : 0 }}
            src={`/images/about-us/${initialImages[(currentImageIndex + 4) % initialImages.length]}`}
            alt={`Team photo ${6}`}
            className='object-cover transition-opacity duration-500'
            sizes={'100%'}
            fill
            priority
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TeamPhotos;
