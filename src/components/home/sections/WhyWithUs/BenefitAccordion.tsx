'use client';

import { useScopedI18n } from '@/locales/client';
import { NumbersToFour } from '@/types/constants.type';
import { AnimatePresence, motion } from 'framer-motion';
import { FC, useState } from 'react';
import ArrowDown from '/public/icons/arrow-down.svg';
import clsx from 'clsx';
import VectorsIcon from '/public/icons/card-vectors.svg';

type BenefitAccordionProps = {
  index: NumbersToFour;
  column: 1 | 2;
};

const BenefitAccordion: FC<BenefitAccordionProps> = ({ index, column }) => {
  const [open, setOpen] = useState<boolean>(false);

  const t = useScopedI18n('home.whyWithUs.cards');
  return (
    <div className='relative gap-[1.5rem] overflow-hidden rounded-lg bg-gray-100 p-4'>
      <span className='absolute right-0 top-0 z-10'>
        <VectorsIcon />
      </span>
      <div
        className='flex cursor-pointer items-center justify-between'
        onClick={() => setOpen(!open)}
      >
        <p className='b1m-body-med-caps md:h5-headline-caps'>
          {t(`column${column}.card${index}.title`)}
        </p>
        <button
          title='Open/Close'
          className={clsx(
            'scale-[1.2] transform p-2 transition-transform duration-150',
            {
              'rotate-180': open,
            }
          )}
        >
          <ArrowDown />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            exit={{ height: 0 }}
            animate={{ height: 'auto' }}
            transition={{ duration: 0.2 }}
            className='overflow-hidden'
          >
            <p className='b3m-body-reg md:b2m-body-reg mt-5'>
              {t(`column${column}.card${index}.content`)}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BenefitAccordion;
