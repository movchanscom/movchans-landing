'use client';

import SectionWrapper from '@/components/shared/wrappers/SectionWrapper';
import { FC } from 'react';
import AwardItem from './AwardItem';
import { NumbersToSix } from '@/types/constants.type';
import MainButton from '@/components/shared/ui/MainButton';
import { useScopedI18n } from '@/locales/client';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useRouter } from 'next/navigation';

type AwardsProps = {
  title?: string;
  page?: 'home' | 'awards';
};
const Awards: FC<AwardsProps> = ({ title, page = 'home' }) => {
  const router = useRouter();
  const t = useScopedI18n('home.awards');
  const isMobile = useMediaQuery('(max-width: 640px)');

  const calculetAwardsCount = () => {
    if (page === 'home') {
      return isMobile ? 4 : 6;
    }
    return 16;
  };

  return (
    <div className='bg-[url("/images/awards-bg.jpg")] bg-cover bg-top bg-no-repeat py-10'>
      <SectionWrapper title={title} className='items-center'>
        <div className='flex flex-wrap items-center justify-center'>
          {Array.from(Array(calculetAwardsCount()).keys()).map((number) => (
            <AwardItem key={number} number={(number + 1) as NumbersToSix} />
          ))}
        </div>
        {page === 'home' && (
          <MainButton
            label={t('buttonText')}
            size='m'
            withIcon
            route='/awards'
          />
        )}
      </SectionWrapper>
    </div>
  );
};

export default Awards;
