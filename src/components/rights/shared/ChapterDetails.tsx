'use client';

import useMediaQuery from '@/hooks/useMediaQuery';
import {
  PrivacyChaptersKeysType,
  TermsChaptersKeysType,
} from '@/types/constants.type';
import PlusIcon from '/public/icons/plus.svg';
import MinusIcon from '/public/icons/minus.svg';
import { AnimatePresence, motion } from 'framer-motion';
import { FC, useState } from 'react';
import { useScopedI18n } from '@/locales/client';

type ChapterDetailsProps = {
  type: 'privacy-policy' | 'terms-of-use';
  chapter: PrivacyChaptersKeysType | TermsChaptersKeysType;
  index: number;
};

const ChapterDetails: FC<ChapterDetailsProps> = ({ type, chapter, index }) => {
  const [showOnMobile, setShowOnMobile] = useState<boolean>(false);
  const moreThan1024px = useMediaQuery('(min-width: 1024px)');
  const t = useScopedI18n(`${type}.chapters.${chapter}` as any);
  const content = t('content' as any, {});

  return (
    <div className='relative flex flex-col overflow-hidden rounded-lg border border-gray-200 p-6 text-justify'>
      <span id={chapter} className='absolute top-[-100px] hidden lg:inline' />
      <div className='flex w-full items-center justify-between'>
        <h6 className='b1m-body-sb text-left text-blue-600'>
          {index + 1}. {t('title')}
        </h6>
        {!moreThan1024px && (
          <button
            aria-label='open/close'
            onClick={() => setShowOnMobile((prev) => !prev)}
            className='p-2'
          >
            {showOnMobile ? <MinusIcon /> : <PlusIcon />}
          </button>
        )}
      </div>
      <AnimatePresence>
        {(moreThan1024px || showOnMobile) && (
          <motion.div
            initial={{ height: 0 }}
            exit={{ height: 0 }}
            animate={{ height: 'auto' }}
            transition={{ duration: 0.2 }}
            className='mt-6 flex flex-col gap-4'
          >
            <div
              dangerouslySetInnerHTML={{
                __html: content
                  .replace(/<b/g, '<b class="b2m-body-med"')
                  .replace(
                    /<ul/g,
                    '<ul class="list flex list-disc flex-col gap-2"'
                  )
                  .replace(/<li/g, '<li class="b3m-body-med ml-6"'),
              }}
              className='b2m-body-reg flex flex-col gap-4 text-blue-700'
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChapterDetails;
