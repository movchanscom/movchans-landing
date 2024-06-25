'use client';
import LanguageSelector from '@/components/layouts/header/LanguageSelector';
import NavBar from '@/components/layouts/header/NavBar';
import CallAndEmail from '@/components/layouts/header/CallAndEmail';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import clsx from 'clsx';
import MobileMenu from './mobile/MobileMenu';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useParams, usePathname } from 'next/navigation';

const Header = () => {
  const params = useParams();
  const paths = usePathname();
  const pathNames = paths
    .split('/')
    .filter((path) => path !== params.locale && Boolean(path));
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
          'bg-transparent': pathNames.length === 0,
          'border-b border-blue-200 !bg-basic-white': isScrolled,
          'sticky !bg-basic-white': pathNames.length > 0,
        }
      )}
    >
      <div className='mx-auto flex w-full max-w-[77.5rem] items-center justify-between py-4'>
        <Link href='/'>
          <img
            src={'/icons/logo.svg'}
            alt='Logo'
            className=' h-7 w-fit object-contain md:h-10 hover:scale-110 transition-all duration-200'
          />
        </Link>
        {!lessThan1024x && <NavBar />}
        <div className='flex items-center gap-6'>
          {/* <div className='hidden md:block'>
            <LanguageSelector />
          </div> */}
          <div className='flex items-center gap-2'>
            <CallAndEmail />
            {lessThan1024x && <MobileMenu />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
