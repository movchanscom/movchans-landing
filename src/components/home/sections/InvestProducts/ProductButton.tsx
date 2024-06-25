import { FC } from 'react';
import ArrowUpRight from '/public/icons/arrow-up-right.svg';
import Link from 'next/link';

type ProductButtonProps = {
  item: {
    title: string;
    href: string;
  };
};

const ProductButton: FC<ProductButtonProps> = ({ item }) => {
  return (
    <Link {...item} className='group flex gap-2 px-2 lg:px-5 lg:py-3'>
      <p className='b1m-body-med-caps text-blue-600 group-hover:text-gold-600'>
        {item.title}
      </p>
      <span className='relative h-auto w-6'>
        <ArrowUpRight className='absolute -bottom-2 -left-2 opacity-0 transition-all duration-200 group-hover:bottom-2 group-hover:left-2 group-hover:opacity-100' />
      </span>
    </Link>
  );
};

export default ProductButton;
