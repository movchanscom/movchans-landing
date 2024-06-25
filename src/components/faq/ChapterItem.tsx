'use client';

import { useScopedI18n } from '@/locales/client';
import ArrowRightIcon from '/public/icons/arrow-right.svg';
import { FC } from 'react';
import clsx from 'clsx';
import { FAQChaptersKeysType } from '@/types/constants.type';

type ChapterItemProps = {
  chapter: FAQChaptersKeysType;
  activeChapter: FAQChaptersKeysType;
  handleActiveChapter: () => void;
};

const ChapterItem: FC<ChapterItemProps> = ({
  chapter,
  activeChapter,
  handleActiveChapter,
}) => {
  const t = useScopedI18n('faq.chapters');
  return (
    <button
      onClick={handleActiveChapter}
      className={clsx(
        'flex items-center justify-between gap-2 border-b border-gray-200 p-4',
        {
          'border-b-0 border-l-[3px] border-blue-700 bg-gray-100 pl-[calc(1rem-3px)]':
            activeChapter === chapter,
        }
      )}
    >
      <p className='b1m-body-reg text-left leading-[1.6875rem] text-blue-700'>
        {t(`${chapter}.title`)}
      </p>
      <span className='p-2'>
        <ArrowRightIcon />
      </span>
    </button>
  );
};

export default ChapterItem;
