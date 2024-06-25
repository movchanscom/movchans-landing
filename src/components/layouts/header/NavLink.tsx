'use client';

import Link from 'next/link';
import ArrowDownIcon from '/public/icons/arrow-down.svg';
import { FC, useState } from 'react';
import { NavItemsType } from '@/types/constants.type';
import { useScopedI18n } from '@/locales/client';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

const NavLink: FC<NavItemsType> = ({
  title,
  withPopup = false,
  items,
  rawValues = false,
  href,
}) => {
  const [showChildren, setShowChildren] = useState<boolean>(false);
  const t = useScopedI18n('header.navigation');
  return (
    <li
      className='group relative block w-fit'
      onMouseEnter={() => setShowChildren(true)}
      onMouseLeave={() => setShowChildren(false)}
    >
      {!href ? (
        <span className='b3m-body-reg xl:b2m-body-reg flex w-fit cursor-pointer items-center rounded-t-md bg-transparent p-4 transition-all duration-200 group-hover:text-gold-600 group-hover:bg-gray-200'>
          {t(`${title}.title` as any)}
          <ArrowDownIcon />
        </span>
      ) : (
        <Link
          href={href}
          className='b3m-body-reg xl:b2m-body-reg text-basic-black flex items-center p-4 transition-all duration-200 hover:text-gold-600'
        >
          {t(`${title}.title` as any)}
        </Link>
      )}
      {withPopup && items && (
        <AnimatePresence>
          {showChildren && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              exit={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              transition={{ duration: 0.2 }}
              className='absolute z-20 overflow-hidden'
            >
              <ul
                className={clsx(
                  'flex flex-wrap rounded-r-md rounded-bl-md bg-gray-200 p-2',
                  {
                    'w-[24.875rem]': items.length > 4,
                    'w-[12.7rem]': items.length < 4,
                  }
                )}
              >
                {items.map((item) => (
                  <Link
                    key={item.title}
                    {...item}
                    className='b2m-body-reg w-[11.7rem] rounded-sm px-2 py-3 transition-colors duration-200 hover:bg-blue-600 hover:text-basic-white'
                  >
                    {rawValues
                      ? item.title
                      : t(`${title}.items.${item.title}` as any)}
                  </Link>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </li>
  );
};

export default NavLink;
