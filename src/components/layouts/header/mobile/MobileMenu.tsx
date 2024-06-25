'use client';

import { useEffect, useState } from 'react';
import BurgerIcon from '/public/icons/burger.svg';
import PhoneIcon from '/public/icons/phone.svg';

import Modal from '@/components/shared/ui/Modal';
import { HEADER_NAV_LINKS } from '@/constants';
import MobileNavLink from './MobileNavLink';
import LanguageSelector from '../LanguageSelector';
import { useScopedI18n } from '@/locales/client';
import SocialMediaRow from '../../footer/SocialMediaRow';
import { usePathname } from 'next/navigation';

const MobileMenu = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const pathName = usePathname();
  const t = useScopedI18n('footer.columns.column4');

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setOpenMobileMenu(false);
  }, [pathName]);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <button className='p-2' onClick={() => setOpenMobileMenu(true)}>
        <BurgerIcon />
      </button>
      <Modal
        variant='right'
        isOpen={openMobileMenu}
        onClose={() => setOpenMobileMenu(false)}
      >
        <nav>
          <ul className='flex flex-col gap-5'>
            {HEADER_NAV_LINKS.map((item) => (
              <MobileNavLink key={item.title} {...item} />
            ))}
          </ul>
        </nav>
        <div className='flex flex-col items-center justify-center gap-6 md:gap-10'>
          {/* <LanguageSelector /> */}
          <div className='flex items-center gap-1 p-2'>
            <PhoneIcon />
            <p className='b3m-body-med'>{t('items.phone')}</p>
          </div>
          <SocialMediaRow />
          <p className='b4m-body-reg py-3 text-gray-600 md:mt-2'>
            Powered by Red Rocket Software
          </p>
        </div>
      </Modal>
    </>
  );
};

export default MobileMenu;
