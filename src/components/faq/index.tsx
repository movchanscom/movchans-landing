'use client';

import { FAQ_CHAPTERS_ITEMS } from '@/constants/faq.constants';
import { FAQChaptersKeysType } from '@/types/constants.type';
import { useState } from 'react';
import Chapters from '@/components/faq/Chapters';
import QuestionAnswer from '@/components/faq/QuestionAnswer';
import SectionWrapper from '@/components/shared/wrappers/SectionWrapper';
import CloseIcon from '/public/icons/close.svg';
import PlusIcon from '/public/icons/plus.svg';

import { useScopedI18n } from '@/locales/client';
import clsx from 'clsx';
import useMediaQuery from '@/hooks/useMediaQuery';

const FAQ = () => {
  const t = useScopedI18n('faq');
  const moreThan1024px = useMediaQuery('(min-width: 1024px)');
  const FaqItems: FAQChaptersKeysType[] = Object.keys(
    FAQ_CHAPTERS_ITEMS
  ) as FAQChaptersKeysType[];
  const [activeChapter, setActiveChapter] =
    useState<FAQChaptersKeysType>('fund');
  const [showChaptersOnMobile, setShowChaprersOnMobile] =
    useState<boolean>(false);

  const handleActiveChapter = (chapter: FAQChaptersKeysType) => {
    setActiveChapter(chapter);
    setShowChaprersOnMobile(false);
  };

  return (
    <SectionWrapper id={t('title')}>
      <div className='flex flex-col gap-10 md:gap-20'>
        <div className='relative flex h-auto w-full flex-col-reverse items-center md:flex-row'>
          <h1 className='h4-headline-med md:h1-headline z-[2] -mt-4 w-full shrink-0 overflow-visible rounded-r-lg bg-[rgba(255,255,255,0.50)] py-10 pr-10 text-blue-600 backdrop-blur-sm md:mt-0 md:w-[45%]'>
            {t('title')}
          </h1>
          <img
            alt='FAQ background'
            src={'/images/faq-bg.jpg'}
            className='h-[10rem] w-screen overflow-hidden rounded-lg object-cover object-right-top md:-ml-10 md:-mr-10 md:h-[13.9375rem] md:rounded-l-lg md:rounded-r-none xl:mr-0'
          />
        </div>
        <div className='flex flex-col gap-6'>
          {showChaptersOnMobile || moreThan1024px ? (
            <button
              onClick={() => setShowChaprersOnMobile(false)}
              className='b1m-body-med md:h5-headline flex items-center justify-between p-4'
            >
              {t('subtitle')}
              {!moreThan1024px && (
                <span className='p-2'>
                  <CloseIcon />
                </span>
              )}
            </button>
          ) : (
            <div>
              <button
                onClick={() => setShowChaprersOnMobile(true)}
                className={clsx(
                  'flex w-full items-center justify-between gap-2 border-b border-gray-200 p-4'
                )}
              >
                <p className='b1m-body-reg flex items-center justify-between text-left leading-[1.6875rem] text-blue-700'>
                  {t(`chapters.${activeChapter}.title`)}
                </p>
                <span className='p-2'>
                  <PlusIcon />
                </span>
              </button>
            </div>
          )}
          <div className='relative flex flex-col gap-6 lg:flex-row'>
            {(showChaptersOnMobile || moreThan1024px) && (
              <Chapters
                activeChapter={activeChapter}
                items={FaqItems}
                setActiveChapter={handleActiveChapter}
              />
            )}
            <div className='flex flex-col gap-4 md:gap-6'>
              {Array.from(Array(FAQ_CHAPTERS_ITEMS[activeChapter]).keys()).map(
                (index) => (
                  <QuestionAnswer
                    key={`${activeChapter}-${index}`}
                    activeChapter={activeChapter}
                    itemNumber={index + 1}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FAQ;
