'use client';

import ChapterItem from '@/components/faq/ChapterItem';
import { FC } from 'react';
import { FAQChaptersKeysType } from '@/types/constants.type';

type ChaptersProps = {
  activeChapter: FAQChaptersKeysType;
  setActiveChapter: (chapter: FAQChaptersKeysType) => void;
  items: FAQChaptersKeysType[];
};

const Chapters: FC<ChaptersProps> = ({
  activeChapter,
  setActiveChapter,
  items,
}) => {
  return (
    <div className='flex h-fit w-full shrink-0 flex-col lg:sticky lg:top-[100px] lg:max-w-[24.8125rem]'>
      {items.map((chapter) => (
        <ChapterItem
          key={chapter}
          activeChapter={activeChapter}
          handleActiveChapter={() => setActiveChapter(chapter)}
          chapter={chapter}
        />
      ))}
    </div>
  );
};

export default Chapters;
