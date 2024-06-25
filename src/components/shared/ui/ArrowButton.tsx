'use client';

import { ButtonHTMLAttributes, FC, Ref } from 'react';
import ArrowBackIcon from '/public/icons/arrow-left-white.svg';
import clsx from 'clsx';

type ArrowButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  direction: 'up' | 'down' | 'left' | 'right';
  buttonRef?: (node: HTMLButtonElement | null) => void;
};

const ArrowButton: FC<ArrowButtonProps> = ({
  direction,
  className,
  buttonRef,
  ...rest
}) => {
  return (
    <button
      {...rest}
      ref={buttonRef}
      className={clsx(
        'rounded-lg border bg-gold-500 p-2 transition-all duration-200 hover:bg-gold-400',
        {
          '-rotate-90 transform': direction === 'down',
          'rotate-90 transform': direction === 'up',
          'rotate-180 transform': direction === 'right',
        },
        className
      )}
    >
      <ArrowBackIcon />
    </button>
  );
};

export default ArrowButton;
