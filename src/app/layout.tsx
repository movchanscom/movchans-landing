import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import clsx from 'clsx';
import Head from 'next/head';
import MainLayout from '@/components/layouts/MainLayout';
import ScrollIndicator from '@/components/layouts/ScrollIndicator';
import OpenGraphImg from '@/../public/images/logo-thumbnail.jpg';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--montserrat-font',
});

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

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang='en'>
      <Head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#ffffff' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <body
        className={clsx(montserrat.className, 'max-w-screen overflow-x-hidden')}
        suppressHydrationWarning
      >
        <MainLayout>
          <main className='mx-auto mb-[6.25rem] max-w-[90rem] md:mb-[7.5rem]'>
            <ScrollIndicator />
            {children}
          </main>
        </MainLayout>
        <div id='modal-root' />
      </body>
    </html>
  );
}
