'use client';

import Link from 'next/link';

interface MobileNavLinkProps {
  href: string;
  title: string;
  onClick: () => void;
}
const MobileNavLink = (props: MobileNavLinkProps) => {
  return (
    <li className='flex flex-col gap-4 border-b border-gray-200'>
      <Link
        href={props.href}
        className='b2m-body-med pb-3 !leading-6'
        onClick={props.onClick}
      >
        {props.title}
      </Link>
    </li>
  );
};

export default MobileNavLink;
