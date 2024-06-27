import OpenGraphImg from '@/../public/images/logo-thumbnail.jpg';
import Disclaimer from '@/components/Disclaimer';
import OurTeam from '@/components/OurTeam';
import PartnersProviders from '@/components/PartnersProviders';
import Products from '@/components/Products';
import WebPageLd from '@/components/SchemaLd/WebPageLd';
import Welcome from '@/components/Welcome';
import Contact from '@/components/contact';
import { Metadata } from 'next';

export async function generateMetadata({ params }: any): Promise<Metadata> {
  return {
    title: "MOVCHAN'S GROUP",
    description:
      'We manage a family of global investment funds and separate accounts for affluent customers with conservative risk profiles.',
    openGraph: {
      title: "MOVCHAN'S GROUP",
      description:
        'We manage a family of global investment funds and separate accounts for affluent customers with conservative risk profiles.',
      images: OpenGraphImg.src,
    },
  };
}

export default async function HomePage() {
  return (
    <main>
      <WebPageLd
        name="MOVCHAN'S GROUP"
        description='We manage a family of global investment funds and separate accounts for affluent customers with conservative risk profiles.'
        url='/'
      />
      <Welcome />
      <Products />
      <PartnersProviders />
      <OurTeam />
      <Contact />
      <Disclaimer/>
    </main>
  );
}
