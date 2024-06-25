'use client';

import MainButton from '@/components/shared/ui/MainButton';
import SectionWrapper from '@/components/shared/wrappers/SectionWrapper';
import { getScopedI18n } from '@/locales/server';
import { ProductNameType } from '@/types/constants.type';
import MainBenefitIcon from '/public/icons/products/main-benefit.svg';
import CalendarIcon from '/public/icons/products/calendar.svg';
import ClockIcon from '/public/icons/products/clock.svg';
import { FC } from 'react';
import AwardItem from '@/components/shared/Awards/AwardItem';
import clsx from 'clsx';
import { useScopedI18n } from '@/locales/client';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type BusinessCardProps = {
  product: ProductNameType;
  bgImage?: string;
};

const BusinessCard: FC<BusinessCardProps> = ({ product, bgImage }) => {
  const t = useScopedI18n(`products.${product}.businessCard`);

  const showPeriod = product !== 'arq';

  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleButtonClick = () => {
    const queryString = new URLSearchParams(params);

    queryString.set('modal', 'contact');
    router.replace(`${pathname}?${queryString.toString()}`, {
      scroll: false,
    });
  };

  return (
    <SectionWrapper id='Business Card'>
      <div className='flex h-full flex-col gap-6 rounded-[1.25rem] bg-gray-100 p-3 md:p-6 xl:flex-row'>
        <div className='flex flex-col gap-6 md:gap-10'>
          <div className='flex flex-col gap-4'>
            <h2 className='h4-headline-med md:h3-headline-med xl:h2-headline text-gold-500'>
              {t('title')}
            </h2>
            <p className='h6-headline-med md:h4-headline-med xl:h3-headline-med text-blue-700'>
              {t('subtitle')}
            </p>
            <div className='flex items-center gap-2'>
              <span className='flex h-5 w-5 items-center justify-center'>
                <MainBenefitIcon />
              </span>
              <p className='b3m-body-reg md:b1m-body-reg text-blue-700'>
                {t('mainBenefit')}
              </p>
            </div>
            {showPeriod && (
              <div className='flex items-center gap-2'>
                <span className='flex h-5 w-5 items-center justify-center'>
                  <CalendarIcon />
                </span>
                <p className='b3m-body-reg md:b1m-body-reg text-blue-700'>
                  {t('period')}
                </p>
              </div>
            )}
            <div className='flex items-center gap-2'>
              <span className='flex h-5 w-5 items-center justify-center'>
                <ClockIcon />
              </span>
              <p className='b3m-body-reg md:b1m-body-reg text-blue-700'>
                {t('liquidity')}
              </p>
            </div>
          </div>
          <MainButton
            label={t('buttonText')}
            size='m'
            withIcon
            className='gap-4 md:!w-fit'
            action={handleButtonClick}
          />
        </div>
        <div
          style={{
            backgroundImage: `url("/images/products/business-card/${bgImage ?? 'awards-bg'}.jpg")`,
          }}
          className={clsx(
            'flex h-full min-h-[24.5rem] w-full shrink-0 flex-wrap content-center !items-center !justify-center gap-4 rounded-lg bg-cover bg-center bg-no-repeat md:min-h-[20rem] xl:h-auto xl:w-[30rem]',
            {
              'mix-blend-luminosity':
                product === 'cossack' || product === 'arq',
            }
          )}
        >
          {Array.from(Array(Number(t('awardsCount')) || 0).keys()).map(
            (index) => (
              <AwardItem
                key={index}
                number={index + 1}
                imagePath={`/images/products/business-card/awards/${product}-${index + 1}.png`}
                className={clsx('!ml-0 !object-cover', {
                  '!h-[18rem] !w-[18rem] !p-8': product === 'laif',
                  '!h-[8.625rem] !w-[8.625rem] !p-4': product !== 'laif',
                })}
              />
            )
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default BusinessCard;
