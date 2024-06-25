import OpenGraphImg from '@/../public/images/logo-thumbnail.jpg';
import Products from '@/components/Products';
import WebPageLd from '@/components/SchemaLd/WebPageLd';
import Welcome from '@/components/Welcome';
import { Metadata } from 'next';

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
    <main>
      <WebPageLd
        name='Movchan`s group'
        description='MOVCHAN’S GROUP — группа компаний, управляющая семейством глобальных инвестиционных фондов и индивидуальными счетами для состоятельных частных инвесторов с консервативным риск-профилем'
        url='/'
      />
      <Welcome />
      <Products />
    </main>
  );
}
