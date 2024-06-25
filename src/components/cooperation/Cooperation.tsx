'use client';

import SectionWrapper from '@/components/shared/wrappers/SectionWrapper';
import Map from '@/components/contacts/Map';
import { useScopedI18n } from '@/locales/client';
import MainButton from '@/components/shared/ui/MainButton';
import CooperationAccordion from './CooperationAccordion';
import { COOPERATION_ITEMS } from '@/constants/cooperation.constants';
import { MouseEvent, useState } from 'react';
import { CooperationItemTitleType } from '@/types/constants.type';

const Cooperation = () => {
  const t = useScopedI18n('cooperation');
  const [activeChapter, setActiveChapter] = useState<CooperationItemTitleType>(
    COOPERATION_ITEMS[0].title
  );

  const handleActiveChapter = (event: MouseEvent<HTMLButtonElement>) => {
    const name = event.currentTarget.name;
    setActiveChapter(name as CooperationItemTitleType);
  };

  return (
    <SectionWrapper id={t('title')}>
      <div className='flex flex-col gap-10 md:gap-20'>
        <div className='relative flex h-auto w-full flex-col-reverse items-center md:flex-row'>
          <h1 className='h4-headline-med md:h1-headline z-2 -mx-4 -mt-4 w-full shrink-0 overflow-visible rounded-t-lg bg-[rgba(255,255,255,0.50)] py-10 pr-10 text-blue-600 backdrop-blur-sm md:mx-0 md:mt-0 md:w-[30rem] md:rounded-r-lg md:rounded-tl-none'>
            {t('title')}
          </h1>
          <img
            alt='Cooperation background'
            src={'/images/cooperation-bg.jpg'}
            className='img-max-screen h-[10rem] w-screen object-cover object-center md:-ml-28  md:-mr-10 md:h-[13.9375rem] md:w-full md:rounded-l-lg xl:-mr-[6.25rem]'
          />
        </div>
        <div>
          {COOPERATION_ITEMS.map((chapter, index) => (
            <CooperationAccordion
              key={chapter.title}
              activeChapter={activeChapter}
              chapter={chapter}
              index={index}
              handleActiveChapter={handleActiveChapter}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Cooperation;
