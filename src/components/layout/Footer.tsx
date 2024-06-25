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
        <div className='flex flex-col lg:items-end gap-8 md:gap-10'>
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
          <SocialMediaRow />
        </div>
      </div>
      <div className='border-t border-solid border-gray-100'>
        
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
