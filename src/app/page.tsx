import InNumbers from '@/components/home/sections/InNumbers';
import PartnersAndProviders from '@/components/home/sections/PartnersAndProviders';
import Products from '@/components/home/sections/Products';
import VideoSample from '@/components/home/sections/VideoSample';
import Welcome from '@/components/home/sections/Welcome';
import WhyWithUs from '@/components/home/sections/WhyWithUs';
import ConnectUs from '@/components/shared/ConnectUs';
import Awards from '@/components/shared/Awards';
import InvestProducts from '@/components/home/sections/InvestProducts';
import WebPageLd from '@/components/SchemaLd/WebPageLd';
import { Metadata } from 'next';
import OpenGraphImg from '@/../public/images/logo-thumbnail.jpg';

export async function generateMetadata({ params }: any): Promise<Metadata> {
  return {
    title: 'Movchan`s group',
    description:
      'MOVCHAN’S GROUP — группа компаний, управляющая семейством глобальных инвестиционных фондов и индивидуальными счетами для состоятельных частных инвесторов с консервативным риск-профилем',
    openGraph: {
      title: 'Movchan`s group',
      description:
        'MOVCHAN’S GROUP — группа компаний, управляющая семейством глобальных инвестиционных фондов и индивидуальными счетами для состоятельных частных инвесторов с консервативным риск-профилем',
      images: OpenGraphImg.src,
    },
  };
}

export default async function HomePage() {
  return (
    <>
      <WebPageLd
        name='Movchan`s group'
        description='MOVCHAN’S GROUP — группа компаний, управляющая семейством глобальных инвестиционных фондов и индивидуальными счетами для состоятельных частных инвесторов с консервативным риск-профилем'
        url='/'
      />
      <Welcome />
      <div className='mb:mb-[7.5rem] mb-[6.25rem]  flex flex-col gap-[6.25rem] md:gap-[7.5rem] lg:gap-[8.75rem]'>
        <InvestProducts title={t('investProducts.title')} />
        <InNumbers title={t('inNumbers.title')} />
        <VideoSample />
        <WhyWithUs title={t('whyWithUs.title')} />
        <Products title={t('products.title')} />
        <Awards title={t('awards.title')} />
        <PartnersAndProviders title={t('partnersAndProviders.title')} />
        <ConnectUs />
      </div>
    </>
  );
}
