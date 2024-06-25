'use client';

import SectionWrapper from '@/components/shared/wrappers/SectionWrapper';
import Image from 'next/image';
import VideoPreview from '/public/images/video-preview.jpg';
import PlayIcon from '/public/icons/play.svg';
import { useState } from 'react';
import { useScopedI18n } from '@/locales/client';
import { AnimatePresence, motion } from 'framer-motion';

const VideoSample = () => {
  const [showPreview, setShowPreview] = useState(true);
  const t = useScopedI18n('home.videoSample');

  const handleClosePreview = () => {
    setShowPreview(false);
  };
  return (
    <SectionWrapper id={t('title')}>
      <div className='flex flex-col gap-6'>
        <h2 className='h6-headline-med md:h4-headline-med text-blue-600'>
          {t('title')}
        </h2>
        <div className='relative h-[16.25rem] overflow-hidden rounded-lg md:h-[33.875rem]'>
          <AnimatePresence>
            {showPreview && (
              <motion.div
              initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className='absolute inset-0'>
                <Image
                  src={VideoPreview}
                  alt='welcome'
                  className='h-full w-full object-cover'
                  priority
                  onClick={handleClosePreview}
                />

                <button
                  title='Play'
                  className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform transition-transform duration-300 hover:scale-125'
                  onClick={handleClosePreview}
                >
                  <PlayIcon />
                </button>
                <div className='absolute bottom-6 right-6 rounded-[1.25rem] bg-basic-white px-2 py-[0.3175rem]'>
                  <p className='b3m-body-med'>3:42</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <iframe
            width='100%'
            height='100%'
            src='https://www.youtube.com/embed/WQGxlDZV4FM?si=5L7XL_A5J4bIgZW3&amp;controls=0'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default VideoSample;
