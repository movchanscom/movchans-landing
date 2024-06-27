'use client';

import { useEffect, useState } from 'react';
import BurgerIcon from '/public/icons/burger.svg';
import PhoneIcon from '/public/icons/phone.svg';

import Modal from '@/components/shared/ui/Modal';
import { usePathname } from 'next/navigation';
import SocialMediaRow from '../SocialMediaRow';
import MobileNavLink from './MobileNavLink';

const MobileMenu = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
            <MobileNavLink
              title='Our investment strategies'
              href='#our-investment-strategies'
              onClick={()=>setOpenMobileMenu(false)}
            />
            <MobileNavLink
              title='Partners & Providers'
              href='#partners-providers'
              onClick={()=>setOpenMobileMenu(false)}
            />
            <MobileNavLink
              title='Team'
              href='#team'
              onClick={()=>setOpenMobileMenu(false)}
            />
            <MobileNavLink
              title='Contacts'
              href='#contacts'
              onClick={()=>setOpenMobileMenu(false)}
            />
          </ul>
        </nav>
        <div className='flex flex-col items-center justify-center gap-6 md:gap-10'>
          {/* <LanguageSelector /> */}
          <a href='tel:+357 - 22030814' className='flex items-center gap-1 p-2'>
            <PhoneIcon />
            <p className='b3m-body-med'>+357 - 22030814</p>
          </a>
          <SocialMediaRow />
          <p className='b4m-body-reg py-3 text-gray-600 md:mt-2'>
            Powered by{' '}
            <a
              href='https://redrocket.software'
              target='_blank'
              className='hover:underline'
            >
              Red Rocket Software
            </a>
          </p>
        </div>
      </Modal>
    </>
  );
};

export default MobileMenu;
