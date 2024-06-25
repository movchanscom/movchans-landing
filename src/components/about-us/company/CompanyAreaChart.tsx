'use client';

import { ABOUT_COMPANY_AREA_DATA } from '@/constants/about-us.constants';
import { useScopedI18n } from '@/locales/client';
import { FC } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  TooltipProps,
} from 'recharts';

const CompanyAreaChart = () => {
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <AreaChart
        data={ABOUT_COMPANY_AREA_DATA}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id='colorInvestors' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='5%' stopColor='#7da5fa' stopOpacity={0.8} />
            <stop offset='95%' stopColor='#7da5fa' stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis
          dataKey='name'
          padding={{ left: 20, right: 20 }}
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
        <Area
          type='linear'
          dataKey='investors'
          stroke='#3F78F3'
          fillOpacity={1}
          fill='url(#colorInvestors)'
          dot={{ stroke: '#3F78F3', strokeWidth: 2, r: 5, fill: '#3F78F3' }}
          activeDot={{
            stroke: '#3F78F3',
            strokeWidth: 2,
            r: 8,
            fill: '#3F78F3',
          }}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default CompanyAreaChart;

interface CustomTooltipProps extends TooltipProps<number, string> {
  label?: string;
}

export const CustomTooltip: FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
}) => {
  console.log('🚀 ~ payload:', payload);
  const t = useScopedI18n('about-us.company.ariaChart');

  if (active && payload && payload.length) {
    return (
      <div className='flex w-[20.6rem] flex-col gap-4 rounded-3xl bg-gray-100 p-4 text-blue-700'>
        <p className='b1m-body-med w-fit rounded-lg bg-basic-white p-2'>{`${label} ${t('year')}`}</p>
        <p className='b2m-body-med rounded-lg border-b border-gray-300'>
          Количество клиентов:{' '}
          <span className='b1m-body-sb'>{payload[0].value}</span>
        </p>
        <p
          className='b3m-body-reg'
          dangerouslySetInnerHTML={{ __html: t(`years.${label}` as any) }}
        />
      </div>
    );
  }

  return null;
};
