'use client';

import { useScopedI18n } from '@/locales/client';
import clsx from 'clsx';
import { FC, MouseEvent, useState } from 'react';
import ArrowDown from '/public/icons/arrow-down.svg';
import { AnimatePresence, motion } from 'framer-motion';
import {
  CooperationItemTitleType,
  CooperationsItemType,
} from '@/types/constants.type';
import { COOPERATION_ITEMS } from '@/constants/cooperation.constants';
import Image from 'next/image';

type CooperationAccordionProps = {
  index: number;
  chapter: CooperationsItemType;
  activeChapter: CooperationItemTitleType;
  handleActiveChapter: (event: MouseEvent<HTMLButtonElement>) => void;
};

const CooperationAccordion: FC<CooperationAccordionProps> = ({
  index,
  chapter,
  activeChapter,
  handleActiveChapter,
}) => {
  const t = useScopedI18n('cooperation');

  const activeChapterIndex = COOPERATION_ITEMS.findIndex(
    (item) => item.title === activeChapter
  );
  const isThisChapterActive = index === activeChapterIndex;

  const getBackgroundClass = () => {
    if (isThisChapterActive) {
      return 'bg-blue-400 text-basic-white';
    }
    const colorClasses = [
      'bg-blue-300',
      'bg-blue-200',
      'bg-blue-100',
      'bg-gray-100',
    ];
    return index < activeChapterIndex
      ? colorClasses[index]
      : colorClasses[index - 1];
  };

  return (
    <div
      className={clsx(
        'rounded-t-lg p-3 transition-all duration-300 md:p-6 xl:p-10',
        {
          [getBackgroundClass()]: true,
          '-mt-2': index > 0,
          'rounded-b-lg': index === COOPERATION_ITEMS.length - 1,
        }
      )}
    >
      <button
        name={chapter.title}
        className='flex w-full items-center justify-between text-left'
        onClick={handleActiveChapter}
      >
        <span className='flex items-center gap-4'>
          <span
            className={clsx('h4-headline-med md:h1-headline', {
              'text-blue-200': isThisChapterActive,
            })}
          >
            0{index + 1}
          </span>
          <h4
            className={clsx('b2m-body-med md:h4-headline-reg uppercase', {
              '': index > 0,
            })}
          >
            {t(`chapters.${chapter.title}.title`)}
          </h4>
        </span>

        {!isThisChapterActive && (
          <span className='shrink-0'>
            <ArrowDown />
          </span>
        )}
      </button>
      <AnimatePresence mode='wait'>
        {isThisChapterActive && (
          <motion.div
            initial={{ height: 0, opacity: 0.5 }}
            exit={{ height: 0, opacity: 0.5 }}
            animate={{ height: 'auto', opacity: 1 }}
            transition={{ duration: 0.5 }}
            className='overflow-hidden'
          >
            <div className='flex flex-col gap-8 pt-10 md:gap-2'>
              {!chapter.childrenLength && index !== 2 ? (
                <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 xl:gap-6'>
                  <p
                    className='b3m-body-reg md:b2m-body-reg'
                    dangerouslySetInnerHTML={{
                      __html: t(`chapters.${chapter.title}.description`),
                    }}
                  />
                  <div className='relative min-h-[8.75rem] md:min-h-[13rem] lg:h-auto'>
                    <Image
                      fill
                      priority
                      src={`/images/cooperation/${chapter.image}`}
                      alt='Chapter related photo'
                      className='h-full w-full rounded-lg object-cover'
                    />
                  </div>
                </div>
              ) : (
                <div className='flex flex-col gap-4'>
                  <p
                    className='b3m-body-reg md:b2m-body-reg'
                    dangerouslySetInnerHTML={{
                      __html: t(`chapters.${chapter.title}.description`),
                    }}
                  />
                  <div className='no-scrollbar flex gap-4 overflow-y-scroll md:grid md:grid-cols-2'>
                    {Array.from(Array(chapter.childrenLength).keys()).map(
                      (childIndex) => (
                        <div
                          key={childIndex}
                          className='w-[90%] max-w-[35.75rem] shrink-0 rounded-lg bg-basic-white p-4 text-blue-700 md:w-full'
                        >
                          <h6 className='h5-headline'>
                            {t(
                              `chapters.${chapter.title}.children.${childIndex}.title` as any
                            )}
                          </h6>
                          <p className='b3m-body-reg'>
                            {t(
                              `chapters.${chapter.title}.children.${childIndex}.content` as any
                            )}
                          </p>
                        </div>
                      )
                    )}
                    <div className='relative col-span-full w-full lg:h-[17.5rem]'>
                      <Image
                        src={`/images/cooperation/${chapter.image}`}
                        alt={'Chapter image'}
                        fill
                        priority
                        quality={50}
                        className='rounded-lg object-cover'
                      />
                    </div>
                  </div>
                </div>
              )}
              <div className='gap-2'>
                <p className='b3m-body-reg md:b2m-body-reg'>
                  {t(`chapters.${chapter.title}.toContact`)}
                </p>
                <p className='b2m-body-med md:b1m-body-med'>
                  {t(`chapters.${chapter.title}.email`)}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CooperationAccordion;
