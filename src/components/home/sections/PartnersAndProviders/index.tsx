import SectionWrapper from '@/components/shared/wrappers/SectionWrapper';
import { getScopedI18n } from '@/locales/server';
import { FC } from 'react';
import ProfitUpIcon from '/public/icons/profit-up.svg';
import StakeholdersPresentation from './StakeholdersPresentation';

type PartnersAndProvidersProps = {
  title: string;
};

const PartnersAndProviders: FC<PartnersAndProvidersProps> = async (props) => {
  const t = await getScopedI18n('home.partnersAndProviders');
  return (
    <SectionWrapper {...props}>
      <div className='flex flex-col gap-6 md:gap-10'>
        <div className='flex items-end justify-between'>
          <p className='b3m-body-reg md:b1m-body-reg max-w-[57.75rem] border-b border-gray-200 pb-4 leading-[1.6875rem] text-blue-700'>
            {t('description')}
          </p>
          <div className='p-2'>
            <ProfitUpIcon />
          </div>
        </div>
        <div className='rounded-lg bg-gray-200 p-6'>
          <StakeholdersPresentation />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default PartnersAndProviders;
