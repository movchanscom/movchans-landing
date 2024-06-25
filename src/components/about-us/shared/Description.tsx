import SectionWrapper from '@/components/shared/wrappers/SectionWrapper';
import { FC } from 'react';
import HandsTogetherIcon from '/public/icons/hands-together.svg';
import AwardIcon from '/public/icons/award.svg';
import { getScopedI18n } from '@/locales/server';

type DescriptionProps = {
  type: 'team' | 'awards';
};

const Description: FC<DescriptionProps> = async ({ type }) => {
  const t = await getScopedI18n(
    `about-us.${type === 'team' ? 'team' : 'awards'}`
  );
  return (
    <SectionWrapper id={t('subtitle')}>
      <div className='flex flex-col gap-4 text-blue-700 md:gap-10'>
        <h3 className='h3-headline-med max-w-[60rem]'>{t('subtitle')}</h3>
        <div className='flex items-end justify-between gap-4'>
          <p
            className='b1m-body-reg w-full max-w-[57.75rem] border-b border-gray-200 pb-4 text-blue-700'
            dangerouslySetInnerHTML={{ __html: t('description') }}
          />
          <div className='shrink-0 p-1 md:p-2'>
            {type === 'team' ? <HandsTogetherIcon /> : <AwardIcon />}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Description;
