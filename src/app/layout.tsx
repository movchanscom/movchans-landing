import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { ReactNode } from 'react';
import clsx from 'clsx';
import Head from 'next/head';
import OpenGraphImg from '@/../public/images/logo-thumbnail.jpg';
import MainLayout from '@/components/layout/MainLayout';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--montserrat-font',
});

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
        <MainLayout>{children}</MainLayout>
        <div id='modal-root' />
      </body>
    </html>
  );
}
