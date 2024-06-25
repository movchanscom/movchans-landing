import GraphUpIcon from '/public/icons/graph-up.svg';
import CurrencyUpIcon from '/public/icons/currency-up.svg';
import { FC } from 'react';
import { getScopedI18n } from '@/locales/server';

type MotivationCardProps = {
  title: 'mission' | 'vision';
};

const MotivationCard: FC<MotivationCardProps> = async ({ title }) => {
  const t = await getScopedI18n('about-us.company.motivation');
  return (
    <div className='flex flex-col gap-6 rounded-lg bg-blue-500 p-4 text-basic-white md:gap-10 md:p-6'>
      <div className='flex items-center justify-between gap-4'>
        <p className='b3m-body-reg md:b1m-body-reg rounded-3xl border border-basic-white px-3 py-2 md:px-4'>
          {t(`${title}.title`)}
        </p>
        {title === 'mission' ? <GraphUpIcon /> : <CurrencyUpIcon />}
      </div>
      <p className='b3m-body-med md:b1m-body-med'>
        {' '}
        {t(`${title}.description`)}
      </p>
    </div>
  );
};

export default MotivationCard;
