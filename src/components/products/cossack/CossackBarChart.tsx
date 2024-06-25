'use client';

import { useScopedI18n } from '@/locales/client';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from 'recharts';
import { typedEntries } from '@/utils';
import { COSSACK_BARS_DATA } from '@/constants/products.constants';
import SectionWrapper from '@/components/shared/wrappers/SectionWrapper';
import { FC } from 'react';

const CossackBarChart = () => {
  const t = useScopedI18n('products.cossack.barGraph');

  const CustomTooltip: FC<TooltipProps<number, string>> = ({
    active,
    payload,
    label,
  }) => {
    if (active && payload && payload.length) {
      return (
        <div className='flex w-[5.5rem] flex-col overflow-hidden rounded-md bg-gray-100 md:w-[8rem]'>
          <div className='b3m-body-reg md:b3m-body-reg w-full bg-blue-700 py-2 text-center text-basic-white'>
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

  const colors = {
    0: '#394E6E',
    1: '#C6D8F4',
    2: '#CACFD8',
    3: '#BFA58E',
  };

  return (
    <SectionWrapper>
      <div className='flex flex-col gap-8 xl:flex-row'>
        <div className='w-full text-blue-700 xl:w-[40%]'>
          <p className='b3m-body-med md:h6-headline-med xl:h5-headline mb-4 md:mb-6'>
            {t('title')}
          </p>
          <div className='mb-4 flex flex-col gap-2 md:mb-10 md:gap-3'>
            {typedEntries(colors).map(([key, value]) => (
              <div key={key} className='flex items-center gap-2'>
                <span
                  style={{ background: value }}
                  className={`h-6 w-6 rounded-sm`}
                />
                <span className='b4m-body-med md:b2m-body-med'>
                  {t(`bars.${key}` as any)}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className='h-[29.125rem] w-full xl:w-[60%]'>
          <ResponsiveContainer width='100%' height='100%'>
            <BarChart data={COSSACK_BARS_DATA}>
              <XAxis
                dataKey='name'
                padding={{ left: 10, right: 10 }}
                height={100}
                interval={0}
                tick={{ fill: '#777C85' }}
                axisLine={{ stroke: '#E4E7EC' }}
                tickLine={{ stroke: '#E4E7EC' }}
                className='b4m-body-reg xl:b3m-body-med'
              />
              <YAxis
                domain={[0, 'auto']}
                padding={{ top: 20, bottom: 20 }}
                tick={{ fill: '#777C85' }}
                axisLine={{ stroke: 'transparent' }}
                tickLine={{ stroke: 'transparent' }}
                className='b4m-body-reg xl:b3m-body-med'
              />
              <Tooltip content={<CustomTooltip />} />
              {typedEntries(colors).map(([key, value]) => (
                <Bar
                  key={key}
                  dataKey={key}
                  fill={value}
                  stroke={value}
                  radius={[4, 4, 0, 0]}
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CossackBarChart;
