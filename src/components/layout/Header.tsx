'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import CallAndEmail from './CallAndEmail';
import NavBar from './NavBar';
import MobileMenu from './mobile/MobileMenu';
import { motion } from 'framer-motion';

const Header = () => {
  const [loaded, setLoaded] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setLoaded(true);
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
    <motion.header
      className={clsx(
        'max-w-screen fixed left-0 right-0 top-0 z-20 mx-auto w-full bg-transparent  transition-colors duration-200 ',
        {
          '!bg-basic-white': isScrolled,
        }
      )}
      animate={
        !loaded
          ? {
              translateY: '-100%',
            }
          : {
              translateY: '0%',
            }
      }
    >
      <div className='mx-auto flex w-full max-w-[90rem] items-center justify-between pl-4 md:pl-10 xl:pl-[100px]'>
        <Link href='/'>
          <img
            src={'/icons/logo.svg'}
            alt='Logo'
            className='h-7 w-fit object-contain transition-all duration-200 hover:scale-110 md:h-10'
          />
        </Link>
        <div className='relative flex gap-10 rounded-bl-lg bg-basic-white py-4 pr-4 md:pr-10 xl:pr-[100px]'>
          <div className='absolute left-0 top-0 h-7 w-7 -translate-x-full overflow-hidden after:absolute after:top-0 after:h-[101%] after:w-[101%] after:rounded-tr-lg after:shadow-[0px_10px_0px_20px_#FFFFFF] after:content-[""]'></div>
          <div className='absolute bottom-0 right-0 h-7 w-7 translate-y-full overflow-hidden after:absolute after:top-0 after:h-[101%] after:w-[101%] after:rounded-tr-lg after:shadow-[0px_10px_0px_20px_#FFFFFF] after:content-[""]'></div>
          <div className='hidden lg:flex'>
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
          </div>
          <div className='flex items-center gap-6'>
            <div className='flex items-center gap-2'>
              <CallAndEmail />
              <div className='lg:hidden'>
                <MobileMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};
export default Header;
