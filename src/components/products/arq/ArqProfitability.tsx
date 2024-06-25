'use client';

import { useCurrentLocale, useScopedI18n } from '@/locales/client';
import HistoricalProfitability from '../shared/sections/HistoricalProfitability';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from 'recharts';
import { typedEntries } from '@/utils';
import MainButton from '@/components/shared/ui/MainButton';
import {
  ARQ_AREAS_DATA,
  monthTranslations,
} from '@/constants/products.constants';
import { FC } from 'react';

const ArqProfitability = () => {
  const t = useScopedI18n('products.arq.areaGraph');
  const locale = useCurrentLocale();

  const translateMonth = (dateStr: string) => {
    const [month, year] = dateStr.split('.');
    const translatedMonth = monthTranslations[locale][month];
    return `${translatedMonth} ${year}`;
  };

  const translatedData = ARQ_AREAS_DATA.map((item) => ({
    ...item,
    name: translateMonth(item.name),
  }));

  const colors = {
    0: '#BFA58E',
    1: '#394E6E',
  };
  return (
    <HistoricalProfitability product='arq'>
      <div className='flex flex-col gap-8'>
        <div className='text-blue-700'>
          <p className='b3m-body-med md:h6-headline-med xl:h5-headline mb-4 md:mb-6'>
            {t('title')}
          </p>
          <div className='mb-4 flex flex-col gap-2 md:mb-10 md:gap-3'>
            {typedEntries(colors).map(([key, value]) => (
              <div key={key} className='flex items-center gap-2'>
                <span
                  style={{ background: value }}
                  className={`h-3 w-3 rounded-full`}
                />
                <span className='b4m-body-med md:b2m-body-med'>
                  {t(`areas.${key}` as any)}
                </span>
              </div>
            ))}
          </div>
          <MainButton label={t('buttonText')} size='m' className='sm:!w-fit' />
        </div>
        <div className='no-scrollbar !max-w-screen -mx-4 h-[40rem] w-screen overflow-x-scroll md:-mx-10 lg:mx-0 lg:w-full'>
          <div className='h-full w-[1240px] xl:w-full'>
            <ResponsiveContainer width='100%' height='100%'>
              <AreaChart data={translatedData}>
                <defs>
                  {typedEntries(colors).map(([key, value], index) => (
                    <linearGradient
                      key={key}
                      id={key}
                      x1='0'
                      y1='0'
                      x2='0'
                      y2='1'
                    >
                      <stop offset='0%' stopColor={value} stopOpacity={0.2} />
                      <stop offset='100%' stopColor={value} stopOpacity={0} />
                    </linearGradient>
                  ))}
                </defs>
                <XAxis
                  dataKey='name'
                  padding={{ left: 20, right: 20 }}
                  height={100}
                  interval={0}
                  tick={{ fill: '#777C85' }}
                  axisLine={{ stroke: '#E4E7EC' }}
                  tickLine={{ stroke: '#E4E7EC' }}
                  className='b4m-body-reg xl:b3m-body-med'
                />
                <YAxis
                  domain={['auto', 'auto']}
                  padding={{ top: 20, bottom: 20 }}
                  tick={{ fill: '#777C85' }}
                  axisLine={{ stroke: 'transparent' }}
                  tickLine={{ stroke: 'transparent' }}
                  className='b4m-body-reg xl:b3m-body-med'
                />
                <Tooltip content={<CustomTooltip />} />
                {typedEntries(colors).map(([key, value]) => (
                  <Area
                    key={key}
                    type='linear'
                    dataKey={key}
                    stroke={value}
                    fillOpacity={1}
                    fill={`url(#${key})`}
                    dot={{
                      stroke: value,
                      strokeWidth: 2,
                      r: 5,
                      fill: value,
                    }}
                    activeDot={{
                      stroke: value,
                      strokeWidth: 2,
                      r: 8,
                      fill: value,
                    }}
                  />
                ))}
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </HistoricalProfitability>
  );
};

export default ArqProfitability;

interface CustomTooltipProps extends TooltipProps<number, string> {
  label?: string;
}

export const CustomTooltip: FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    return (
      <div className='flex w-[5.5rem] flex-col overflow-hidden rounded-md bg-gray-100 md:w-[8rem]'>
        <div className='b3m-body-reg md:b3m-bdoy-reg w-full bg-blue-700 py-2 text-center text-basic-white'>
          {label}
        </div>
        <div className='flex flex-col gap-2 bg-gray-100 py-4 md:gap-3'>
          {payload.map((item) => (
            <div
              key={item.color}
              className='flex items-center justify-center gap-2'
            >
              <span
                style={{ background: item.color }}
                className={`h-2 w-2 rounded-full`}
              />
              <span className='b3m-body-med md:b3m-body-med'>
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
};
