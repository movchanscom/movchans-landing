'use client';

import Link from 'next/link';
import { FC } from 'react';

type NavItemsType = {
  title: string;
  href: string;
};

const NavLink: FC<NavItemsType> = ({ title, href }) => {
  return (
    <li className='group relative block w-fit'>
      <Link
        href={href}
        className='b3m-body-reg xl:b2m-body-reg flex items-center p-4 text-basic-black transition-all duration-200 hover:text-gold-600'
      >
        {title}
      </Link>
    </li>
  );
};

export default NavLink;
