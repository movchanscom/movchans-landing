import SectionWrapper from '@/components/shared/wrappers/SectionWrapper';
import { FC } from 'react';
import { useScopedI18n } from '@/locales/client';
import { getScopedI18n } from '@/locales/server';

type HistoricalMetricsProps = {
  product: 'laif';
};

const HistoricalMetrics: FC<HistoricalMetricsProps> = async ({ product }) => {
  const t = await getScopedI18n(`products.${product}.historicalMetrics`);
  return (
    <SectionWrapper title={t('title')}>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3'>
        {Array.from({ length: Number(t('itemsCount')) }).map((_, index) => (
          <div
            key={index}
            className='b3m-body-med md:b2m-body-med xl:b1m-body-med flex h-full items-center justify-between gap-2 rounded-lg bg-blue-100 p-2 md:p-3'
          >
            <p className='text-blue-700 '>{t(`items.${index}.title` as any)}</p>
            <span className='h-auto shrink-0 items-center justify-center rounded-lg bg-basic-white px-4 py-2'>
              {t(`items.${index}.value` as any)}
            </span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default HistoricalMetrics;
