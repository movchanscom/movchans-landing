import { INVEST_PRODUCTS_ICONS } from '@/constants';
import { useScopedI18n } from '@/locales/client';
import { NumbersToFive } from '@/types/constants.type';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

type ProductStatsProps = {
  number: NumbersToFive;
};

const ProductStats: FC<ProductStatsProps> = ({ number }) => {
  const t = useScopedI18n('home.products');
  return (
    <Link
      href={`/${t(`section2.cards.card${number}.title`).toLowerCase()}`}
      key={number}
      className='flex h-[18.6875rem] w-[18.25rem] flex-col gap-6 rounded-lg bg-gray-200 p-4 transition-all duration-200 hover:bg-blue-100 lg:w-auto'
    >
      <div className='flex items-center justify-between'>
        <p className='h4-headline-reg uppercase'>
          {t(`section2.cards.card${number}.title`)}
        </p>
        <div className='flex items-center gap-2'>
          {INVEST_PRODUCTS_ICONS.section2[number - 1].map((_, index) => (
            <div key={index} className='shrink-0 rounded-lg bg-gray-100 p-2'>
              <Image
                src={`/icons/products/${INVEST_PRODUCTS_ICONS.section2[number - 1][index]}.svg`}
                width={24}
                height={25}
                alt=''
              />
            </div>
          ))}
        </div>
      </div>
      <div className='flex grow flex-col justify-between'>
        <div className='flex flex-col gap-3'>
          <p className='b3m-body-med'>
            {t(`section2.cards.card${number}.paragraph1`)}
          </p>
          <p className='b3m-body-reg text-blue-600'>
            {t(`section2.cards.card${number}.paragraph2`)}
          </p>
        </div>
        <div className='flex flex-col gap-4'>
          <p className='b2m-body-med text-blue-600'>
            {t(`section2.cards.card${number}.subtitle`)}
          </p>
          <div className='w-fit rounded-lg bg-basic-white px-4 py-2'>
            <p className='b1m-body-med text-gold-700'>
              {t(`section2.cards.card${number}.value`)}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductStats;
