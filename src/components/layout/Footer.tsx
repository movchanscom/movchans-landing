import Link from 'next/link';
import SocialMediaRow from './SocialMediaRow';

const Footer = () => {
  return (
    <footer className='section-spacing mx-auto flex h-full w-full max-w-[77.5rem] flex-col gap-5 px-4 md:gap-7 md:px-10 lg:gap-10 xl:px-0'>
      <div className='md:10 flex flex-col justify-between gap-8 border-t border-solid border-gray-100 pb-8 pt-6 md:gap-10 md:pb-10 md:pt-4 lg:flex-row lg:py-10'>
        <Link href='/'>
          <img
            src={'/icons/logo.svg'}
            alt='Logo'
            className=' h-7 w-fit object-contain transition-all duration-200 hover:scale-110 md:h-10'
          />
        </Link>
        <div className='flex flex-col gap-8 md:gap-10 lg:items-end'>
          <FooterNav
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
      </div>
      <div className='flex flex-col md:flex-row flex-wrap justify-between gap-2 border-t border-solid border-gray-100 pb-2 pt-5 md:pb-4 md:pt-6 lg:pb-5'>
        <div className='flex flex-col md:flex-row items-start md:items-center  gap-6'>
          <p className='b4m-body-reg pr-6 text-gray-700 md:border-r md:border-gold-500'>
            &copy; Movchans all rights reserved 2024
          </p>
          <div className='flex items-center gap-6'>
            <Link
              target='_blank'
              href='https://movchans.com/privacy-policy'
              className='link text-blue-600'
            >
              Privacy Policy
            </Link>
          </div>
        </div>
        <p className='b4m-body-reg py-3 text-gray-600'>
          Powered by{' '}
          <Link
            target='_blank'
            href='https://redrocket.software'
            className='hover:underline'
          >
            Red Rocket Software
          </Link>
        </p>
      </div>
    </footer>
  );
};

interface FooterNavProps {
  links: Array<{
    href: string;
    title: string;
  }>;
}
const FooterNav = (props: FooterNavProps) => {
  return (
    <nav className='flex flex-col flex-wrap justify-between gap-4 md:flex-row md:gap-6'>
      {props.links.map((item, idx) => (
        <Link
          href={item.href}
          key={idx}
          className='b2m-body-reg lg:b1m-body-reg py-2 text-basic-black transition-all duration-200 hover:text-gold-600 lg:py-0'
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );
};

export default Footer;
