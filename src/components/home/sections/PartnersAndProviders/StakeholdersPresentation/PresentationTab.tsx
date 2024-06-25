import { useScopedI18n } from '@/locales/client';
import Image from 'next/image';
import { FC } from 'react';
import { motion } from 'framer-motion';

type PresentationTabProps = {
  translationKey: 'clearingSystems' | 'dataBases';
  imagesLength: number;
  lastSlagToImage: string;
};

const PresentationTab: FC<PresentationTabProps> = ({
  translationKey,
  imagesLength,
  lastSlagToImage,
}) => {
  const t = useScopedI18n(`home.partnersAndProviders.${translationKey}`);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className='grid-col-1 grid min-h-[22.875rem] items-center justify-center gap-4 rounded-lg bg-basic-white p-6 md:min-h-[19rem] lg:min-h-[28.21rem] lg:grid-cols-2 lg:gap-6'
    >
      <div className='flex flex-col justify-center gap-4 md:gap-6 '>
        <h6 className='h6-headline-sb'>{t('title')}</h6>
        <p className='b3m-body-med leading-[1.3125rem]'>{t('description')}</p>
      </div>
      <div className='flex flex-wrap items-center justify-center gap-2 border-t border-gray-200 pt-4 md:gap-4 lg:border-none'>
        {Array.from(Array(imagesLength).keys()).map((imageIndex) => (
          <Image
            width={100}
            height={50}
            key={imageIndex}
            src={`/images/${lastSlagToImage}-${imageIndex + 1}.png`}
            alt={`Clearing sysmem ${imageIndex + 1}`}
            className='h-[2.5rem] w-[5rem] md:h-[50px] md:w-[100px]'
            priority
          />
        ))}
      </div>
    </motion.div>
  );
};

export default PresentationTab;
