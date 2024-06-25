'use client';

import { ButtonHTMLAttributes, FC } from 'react';
import PlusIcon from '/public/icons/plus.svg';
import MinusIcon from '/public/icons/minus.svg';
import clsx from 'clsx';

type ZoomButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  zoomType: 'in' | 'out';
};

const ZoomButton: FC<ZoomButtonProps> = ({
  zoomType,
  className,
  ...rest
}) => {
  const Icon = zoomType === 'in' ? PlusIcon : MinusIcon;

  return (
    <button
      {...rest}
      className={clsx(
        'border border-gold-500 bg-basic-white p-2',
        {
          'rounded-t-md border-b-0': zoomType === 'in',
          'rounded-b-md border-t-0': zoomType === 'out',
        },
        className
      )}
    >
      <Icon />
    </button>
  );
};

export default ZoomButton;
