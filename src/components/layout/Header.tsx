'use client';

import useMediaQuery from '@/hooks/useMediaQuery';
import clsx from 'clsx';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import NavBar from './NavBar';
import CallAndEmail from './CallAndEmail';
import MobileMenu from './mobile/MobileMenu';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const lessThan1024x = useMediaQuery('(max-width: 1024px)');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <header
      className={clsx(
        'max-w-screen fixed left-0 right-0 top-0 z-20 mx-auto w-full bg-transparent px-4 transition-colors duration-200 md:px-10 xl:px-0',
        {
          'border-b border-blue-200 !bg-basic-white': isScrolled,
        }
      )}
    >
      <div className='mx-auto flex w-full max-w-[77.5rem] items-center justify-between py-4'>
        <Link href='/'>
          <img
            src={'/icons/logo.svg'}
            alt='Logo'
            className=' h-7 w-fit object-contain transition-all duration-200 hover:scale-110 md:h-10'
          />
        </Link>
        <div className='flex gap-10'>
          {!lessThan1024x && (
            <NavBar
              links={[
                {
                  title: 'Our investment strategies',
                  href: '#our-investment-strategies',
                },
                {
                  title: 'Partners & Providers',
                  href: '#partners-providers',
                },
                {
                  title: 'Team',
                  href: '#team',
                },
                {
                  title: 'Contacts',
                  href: '#contacts',
                },
              ]}
            />
          )}
          <div className='flex items-center gap-6'>
            <div className='flex items-center gap-2'>
              <CallAndEmail />
              {lessThan1024x && <MobileMenu />}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
