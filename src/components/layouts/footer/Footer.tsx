'use client';

import { FOOTER_NAV_LINKS } from '@/constants';
import InfoColumn from './InfoColumn';
import Logo from '/public/icons/logo.svg';
import ContactsInfo from './ContactsInfo';
import RightsAndSocial from './RightsAndSocial';
import useMediaQuery from '@/hooks/useMediaQuery';
import MobileFooter from './MobileFooter';
import AddressInfo from './AddressInfo';
import Link from 'next/link';
import ScrollToTopButton from '../ScrollUpButton';
import { useRef } from 'react';
import ContactUsButton from '../ContactUsButton';

const Footer = () => {
  const moreThan1024px = useMediaQuery('(min-width: 1024px)');
  const ref = useRef(null);

  return (
    <footer
      ref={ref}
      className='mx-auto max-w-[77.5rem] px-4  md:px-10 xl:px-0'
    >
      <div className='flex flex-col'>
        <div className='flex flex-col justify-between py-8 lg:flex-row'>
          <Link href='/'>
            <img
              src={'/icons/logo.svg'}
              alt='Logo'
              className=' h-7 w-fit object-contain md:h-10'
            />
          </Link>
          {moreThan1024px ? (
            <div className='flex flex-row lg:gap-[4rem] xl:gap-[7.38rem]'>
              {FOOTER_NAV_LINKS.map((column) => (
                <InfoColumn key={column.title} column={column} />
              ))}
              <div className='flex flex-col gap-3'>
                <ContactsInfo />
                <AddressInfo />
              </div>
            </div>
          ) : (
            <MobileFooter />
          )}
        </div>
        <RightsAndSocial />
      </div>
      <div className='fixed bottom-[40vh] right-4 hidden flex-col gap-2 xl:flex z-10'>
        <ScrollToTopButton elementRef={ref} />
        <ContactUsButton elementRef={ref} />
      </div>
    </footer>
  );
};

export default Footer;
