import SectionWrapper from '@/components/shared/wrappers/SectionWrapper';
import { ProductNameType } from '@/types/constants.type';
import { FC, ReactNode } from 'react';
import ProfitUpIcon from '/public/icons/profit-up.svg';
import { useScopedI18n } from '@/locales/client';

type HistoricalProfitabilityProps = {
  children?: ReactNode;
  product: ProductNameType;
};

const HistoricalProfitability: FC<HistoricalProfitabilityProps> = ({
  children,
  product,
}) => {
  const t = useScopedI18n(`products.${product}.historicalProfitability`);
  const showSubtitle =
    product !== 'laif' && product !== 'arq' && product !== 'cossack';
  return (
    <SectionWrapper title={t('title')}>
      <div className='flex flex-col gap-6 md:gap-10'>
        {showSubtitle && (
          <div className='flex items-end justify-between gap-4'>
            <p className='b3m-body-reg md:b1m-body-reg max-w-[57.75rem] border-b border-gray-200 pb-4 leading-[1.6875rem] text-blue-700'>
              {t('subtitle')}
            </p>
            <div className='shrink-0 rounded-lg bg-gray-100 p-2'>
              <ProfitUpIcon />
            </div>
          </div>
        )}
        {children}
      </div>
    </SectionWrapper>
  );
};

export default HistoricalProfitability;
