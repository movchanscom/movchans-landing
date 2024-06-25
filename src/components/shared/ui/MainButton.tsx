'use client';

import ArrowRightLongIcon from '/public/icons/arrow-right-long.svg';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { ButtonHTMLAttributes, FC } from 'react';

type MainButtonProps = {
  label: string;
  size: 's' | 'm';
  withIcon?: boolean;
  action?: () => void;
  buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
  className?: string;
  route?: string;
  changeToSmallOnMd?: boolean;
  variant?: 'contained' | 'outlined';
};

const MainButton: FC<MainButtonProps> = ({
  label,
  size = 's',
  withIcon = false,
  action,
  buttonProps,
  className = '',
  route = '',
  changeToSmallOnMd = true,
  variant = 'contained',
}) => {
  const router = useRouter();

  const handleAction = () => {
    action && action();
    route && router.push(route);
  };

  return (
    <button
      title={label}
      onClick={handleAction}
      className={clsx(
        'b3m-body-med md:b1m-body-med focus:shadow-[0px 0px 0px 3px #E8EFFB] flex w-full items-center justify-between rounded-[2.5rem] outline-[#E8EFFB] transition-all duration-300 disabled:bg-gray-300 sm:w-[18.25rem]',
        {
          'p-2 pl-6 md:p-3 md:pl-8':
            size === 'm' && withIcon && changeToSmallOnMd,
          'p-3 md:px-7 md:py-3': size === 'm' && !withIcon && changeToSmallOnMd,
          'p-2 pl-6': size === 's' && withIcon,
          'p-3': size === 's' && !withIcon,
          'p-3 pl-8': size === 'm' && withIcon,
          'px-7 py-3': size === 'm' && !withIcon,
          '!justify-center': !withIcon,
          'border border-blue-600 bg-transparent text-blue-600 hover:border-blue-500 hover:text-blue-500 active:border-blue-400 active:text-blue-400':
            variant === 'outlined',
          'bg-blue-600 text-basic-white hover:bg-blue-500 focus:bg-blue-400 active:bg-blue-400':
            variant === 'contained',
        },
        className
      )}
      {...buttonProps}
    >
      {label}
      {withIcon && (
        <div
          className={clsx('rounded-full bg-basic-white p-1', {
            'scale-90 md:scale-100': changeToSmallOnMd,
          })}
        >
          <ArrowRightLongIcon />
        </div>
      )}
    </button>
  );
};

export default MainButton;
