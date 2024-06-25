'use client';

import Image from 'next/image';
import { FC } from 'react';

type ProductsInfoItemProps = {
  icon: 'graph-up' | 'broker';
  title: string;
};

const ProductsInfoItem: FC<ProductsInfoItemProps> = ({ title, icon }) => {
  return (
    <div className='flex w-full items-center gap-3'>
      <div className='shrink-0 rounded-lg bg-gray-100 p-2'>
        <Image
          src={`/icons/products/${icon}.svg`}
          width={24}
          height={25}
          alt={title}
        />
      </div>
      <p className='b3m-body-med md:b1m-body-med text-basic-black'>{title}</p>
    </div>
  );
};

export default ProductsInfoItem;
