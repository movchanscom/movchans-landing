import SectionWrapper from '@/components/shared/wrappers/SectionWrapper';
import { getScopedI18n } from '@/locales/server';
import { ProductNameType } from '@/types/constants.type';
import Image from 'next/image';
import { FC } from 'react';

type FounderOpinionProps = {
  product: ProductNameType;
};

const FounderOpinion: FC<FounderOpinionProps> = async ({ product }) => {
  const t = await getScopedI18n(`products.${product}.founderOpinion`);

  return (
    <SectionWrapper id='Founder Opinion'>
      <div className='relative pb-[19.5rem] pt-4 md:pb-10 md:pt-10'>
        <div className='flex w-full flex-col gap-4 rounded-r-lg bg-basic-white py-4 !pl-0 md:max-w-[60%] md:gap-6 md:p-6 xl:p-10'>
          <h3 className='h5-headline md:h3-headline-med text-gold-600'>
            {t('title')}
          </h3>
          <ul
            dangerouslySetInnerHTML={{ __html: t('content') }}
            className='b3m-body-reg md:b1m-body-reg flex flex-col gap-2 text-justify text-blue-700'
          ></ul>
        </div>
        <div className='absolute bottom-0 right-0 h-[18.5rem] w-full md:top-0 md:h-auto md:w-[50%]'>
          <Image
            fill
            src={`/images/video-preview.jpg`}
            alt='Founder photo'
            priority
            className='z-1 object-cover  md:z-[-1] md:rounded-l-lg md:object-[75%center] lg:object-[80%center]'
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FounderOpinion;
