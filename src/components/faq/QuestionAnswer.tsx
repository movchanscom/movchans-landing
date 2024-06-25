'use client';

import { useScopedI18n } from '@/locales/client';
import { FAQChaptersKeysType } from '@/types/constants.type';
import PlusIcon from '/public/icons/plus.svg';
import MinusIcon from '/public/icons/minus.svg';
import { FC, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type QuestionAnswerProps = {
  activeChapter: FAQChaptersKeysType;
  itemNumber: number;
};

const QuestionAnswer: FC<QuestionAnswerProps> = ({
  activeChapter,
  itemNumber,
}) => {
  const t = useScopedI18n(`faq.chapters.${activeChapter}`);
  const [openAnswer, setOpenAnswer] = useState<boolean>(false);
  return (
    <div className='flex flex-col rounded-lg border border-gray-200 p-2 md:p-6'>
      <div className='flex items-center justify-between gap-1'>
        <p className='b2m-body-sb md:h6-headline-sb text-left text-blue-600'>
          {t(`items.item${itemNumber}.question` as any)}
        </p>
        <button
          aria-label='open/close'
          onClick={() => setOpenAnswer((prev) => !prev)}
          className='p-2'
        >
          {openAnswer ? <MinusIcon /> : <PlusIcon />}
        </button>
      </div>

      <AnimatePresence>
        {openAnswer && (
          <motion.div
            initial={{ height: 0, gap: 0 }}
            exit={{ height: 0, gap: 0 }}
            animate={{ height: 'auto', gap: '1.5rem' }}
            transition={{ duration: 0.2 }}
            className='overflow-hidden'
          >
            <p className='b3m-body-reg md:b2m-body-reg mt-10 md:mt-6 text-blue-700'>
              {t(`items.item${itemNumber}.answer` as any)}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default QuestionAnswer;
