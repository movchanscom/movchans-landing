import PlusIcon from '/public/icons/plus.svg';
import MinusIcon from '/public/icons/minus.svg';
import { NavItemsType } from '@/types/constants.type';
import { FC, useState } from 'react';
import Link from 'next/link';
import { useScopedI18n } from '@/locales/client';
import { AnimatePresence, motion } from 'framer-motion';

const MobileNavLink: FC<NavItemsType> = ({
  title,
  withPopup = false,
  items,
  rawValues = false,
  href,
}) => {
  const t = useScopedI18n(
    title.startsWith('column') ? 'footer.columns' : 'header.navigation'
  );

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className='flex flex-col gap-4 border-b border-gray-200'>
      <button
        className='flex w-full items-center justify-between'
        onClick={toggleOpen}
      >
        {!href ? (
          <span className='b2m-body-med pb-3 !leading-6'>
            {t(`${title}.title` as any)}
          </span>
        ) : (
          <Link href={href} className='b2m-body-med pb-3 !leading-6'>
            {t(`${title}.title`)}
          </Link>
        )}
        {withPopup && items && (
          <span className='block p-2'>
            {isOpen ? <MinusIcon /> : <PlusIcon />}
          </span>
        )}
      </button>
      <AnimatePresence>
        {withPopup && items && isOpen && (
          <motion.ul
            initial={{ height: 0 }}
            exit={{ height: 0 }}
            animate={{ height: 'auto' }}
            transition={{ duration: 0.2 }}
            className='flex flex-col gap-3 overflow-hidden'
          >
            {items.map((item) => (
              <li key={item.title} className='py-3'>
                <Link {...item} className='!b2m-body-reg'>
                  {rawValues
                    ? item.title
                    : t(`${title}.items.${item.title}` as any)}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
};

export default MobileNavLink;
