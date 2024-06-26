import Image from 'next/image';
import SectionWrapper from '../shared/wrappers/SectionWrapper';
import PartnerCard from './PartnerCard';
import ProfitUpIcon from '/public/icons/profit-up.svg';
import PartnersBgImage from '@/../public/images/partners-bg.jpg';

const PartnersProviders = () => {
  return (
    <SectionWrapper
      title='Our investment strategies'
      className='section-spacing'
      id="partners-providers"
    >
      <div className='flex flex-col gap-6 md:gap-10'>
        <div className='flex items-end justify-between'>
          <h3 className=' b1m-body-med md:h4-headline-med max-w-[57.75rem] border-b border-gray-200 pb-4 text-blue-700'>
            Our investment company is regulated by Cayman Islands Monetary
            Authority (CIMA)
          </h3>
          <div className='rounded-lg bg-gray-100 p-2'>
            <ProfitUpIcon />
          </div>
        </div>
        <ul className='relative mt-6 grid grid-cols-1 overflow-hidden md:mt-10 md:grid-cols-2 lg:grid-cols-3'>
          <Image
            {...PartnersBgImage}
            alt='Our investment company is regulated by Cayman Islands Monetary
            Authority (CIMA)'
            className='absolute top-0 z-[-1] h-full object-cover opacity-10 object-top'
          />
          <li>
            <PartnerCard
              className='border-b-[8px] md:border-b-[12px] md:border-r-[12px] border-white'
              name='Banks:'
              iconsUrls={[
                {
                  url: '/images/partners/bank-partner-1.png',
                  alt: 'NORTHERN TRUST',
                },
                {
                  url: '/images/partners/bank-partner-2.png',
                  alt: 'Compagnie Bancaire Helvetique',
                },
              ]}
            />
          </li>
          <li>
            <PartnerCard
              className='border-b-[8px] border-t-[8px] md:border-t-0 md:border-b-[12px] md:border-l-[12px] lg:border-r-[12px] border-white'
              name='Brokers:'
              iconsUrls={[
                {
                  url: '/images/partners/broker-partner-1.png',
                  alt: 'LAZARUS CAPITAL PARTNERS',
                },
                {
                  url: '/images/partners/broker-partner-2.png',
                  alt: 'MAREX Financial Products',
                },
                {
                  url: '/images/partners/broker-partner-3.png',
                  alt: 'Compagnie Bancaire Helvetique',
                },
              ]}
            />
          </li>
          <li>
            <PartnerCard
              className='border-b-[8px] border-t-[8px] border-white md:border-b-[12px] md:border-r-[12px] md:border-t-[12px] lg:border-l-[12px] lg:border-r-0 lg:border-t-0'
              name='Auditor:'
              iconsUrls={[
                {
                  url: '/images/partners/auditor-partner-1.png',
                  alt: 'bakertilly',
                },
                {
                  url: '/images/partners/auditor-partner-2.png',
                  alt: 'Deloitte',
                },
              ]}
            />
          </li>
          <li>
            <PartnerCard
              className='border-b-[8px] border-t-[8px] border-white md:border-b-[12px] md:border-l-[12px] md:border-t-[12px] lg:border-b-0 lg:border-l-0 lg:border-r-[12px]'
              name='Administrator:'
              iconsUrls={[
                {
                  url: '/images/partners/administrator-partner-1.png',
                  alt: 'APEX',
                },
                {
                  url: '/images/partners/administrator-partner-2.png',
                  alt: 'AMICORP',
                },
              ]}
            />
          </li>
          <li>
            <PartnerCard
              className='border-t-[8px] border-white md:border-r-[12px] md:border-t-[12px] lg:border-l-[12px]'
              name='Law firms:'
              iconsUrls={[
                {
                  url: '/images/partners/law-firms-partner-1.png',
                  alt: 'WALKERS',
                },
                {
                  url: '/images/partners/law-firms-partner-2.png',
                  alt: 'MAPLES GROUP',
                },
                {
                  url: '/images/partners/law-firms-partner-3.png',
                  alt: 'COLLAS CRILL',
                },
              ]}
            />
          </li>
          <li className='hidden md:block'>
            <PartnerCard className='h-full border-l-[12px] border-t-[12px] border-white' />
          </li>
        </ul>
      </div>
    </SectionWrapper>
  );
};

export default PartnersProviders;
