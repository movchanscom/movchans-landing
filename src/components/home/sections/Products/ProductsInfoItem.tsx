'use client';

import { INVEST_PRODUCTS_ICONS } from '@/constants';
import { useScopedI18n } from '@/locales/client';
import { NumbersToTwo } from '@/types/constants.type';
import Image from 'next/image';
import { FC } from 'react';

type ProductsInfoItemProps = {
  number: NumbersToTwo;
};

const ProductsInfoItem: FC<ProductsInfoItemProps> = ({ number }) => {
  const t = useScopedI18n('home.products');
  return (
    <div key={number} className='flex w-full items-center gap-3'>
      <div className='shrink-0 rounded-lg bg-gray-100 p-2'>
        <Image
          src={`/icons/products/${INVEST_PRODUCTS_ICONS.section1[number - 1]}.svg`}
          width={24}
          height={25}
          alt={INVEST_PRODUCTS_ICONS.section1[number - 1]}
        />
      </div>
      <p className='b3m-body-med leading-[1.3125rem]'>
        {t(`section1.title${number}`)}
      </p>
    </div>
  );
};

export default ProductsInfoItem;
