'use client';

import { FOOTER_NAV_LINKS } from '@/constants';
import MobileNavLink from '../header/mobile/MobileNavLink';
import ContactsInfo from './ContactsInfo';
import AddressInfo from './AddressInfo';
import SocialMediaRow from './SocialMediaRow';

const MobileFooter = () => {
  return (
    <div className='flex flex-col gap-10 pt-10'>
      <ul className='flex flex-col gap-5'>
        {FOOTER_NAV_LINKS.map((item) => (
          <MobileNavLink key={item.title} {...item} />
        ))}
      </ul>
      <div className='grid md:grid-cols-2 items-end gap-3'>
        <ContactsInfo />
        <div className='flex flex-col gap-4'>
          <AddressInfo />
          <SocialMediaRow />
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
