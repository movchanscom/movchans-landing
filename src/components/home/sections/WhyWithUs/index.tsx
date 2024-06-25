import SectionWrapper from '@/components/shared/wrappers/SectionWrapper';
import { getScopedI18n } from '@/locales/server';
import { FC } from 'react';
import WhyUsIcon from '/public/icons/why-us.svg';
import BenefitAccordion from './BenefitAccordion';
import { NumbersToFour } from '@/types/constants.type';

type WhyWithUsProps = {
  title: string;
};

const WhyWithUs: FC<WhyWithUsProps> = async (props) => {
  const t = await getScopedI18n('home.whyWithUs');

  return (
    <SectionWrapper {...props}>
      <div className='flex items-center justify-between'>
        <p className='h5-headline-caps md:h4-headline-reg w-fit border-b border-gray-300 pb-2 uppercase'>
          {t('subtitle')}
        </p>
        <WhyUsIcon />
      </div>
      <div className='grid items-start gap-4 md:gap-6 lg:grid-cols-2'>
        <div className='flex flex-col gap-4 md:gap-6'>
          {Array.from(Array(4).keys()).map((number) => (
            <BenefitAccordion
              key={number}
              index={(number + 1) as NumbersToFour}
              column={1}
            />
          ))}
        </div>
        <div className='flex flex-col gap-4 md:gap-6'>
          {Array.from(Array(4).keys()).map((number) => (
            <BenefitAccordion
              key={number}
              index={(number + 1) as NumbersToFour}
              column={2}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhyWithUs;
