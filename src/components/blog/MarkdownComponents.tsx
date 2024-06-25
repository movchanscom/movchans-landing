'use client';

import Image from 'next/image';
import {
  AnchorHTMLAttributes,
  BlockquoteHTMLAttributes,
  ClassAttributes,
  DetailedHTMLProps,
  HTMLAttributes,
  ImgHTMLAttributes,
} from 'react';
import { ExtraProps } from 'react-markdown';
import QuoteIcon from '/public/icons/qoute.svg';
import Link from 'next/link';

export const Heading2 = (
  props: ClassAttributes<HTMLHeadingElement> &
    HTMLAttributes<HTMLHeadingElement> &
    ExtraProps
) => {
  return (
    <h2
      id={props.id}
      className='h6-headline-med md:h4-headline-med mb-6 mt-6 border-l-2 border-gold-200 pl-4 text-blue-600 md:mt-16'
    >
      {props.children}
    </h2>
  );
};

export const AnchorLinksBlock = (props: any) => {
  return (
    <div className='ml-4 flex list-disc flex-col gap-3 md:gap-4'>
      {props.children}
    </div>
  );
};

export const AnchorLink = (
  props: ClassAttributes<HTMLAnchorElement> &
    AnchorHTMLAttributes<HTMLAnchorElement> &
    ExtraProps
) => {
  const navigateByLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const elementId = props.href?.replace('#', '');
    if (elementId) {
      const element = document.getElementById(elementId);
      if (element) {
        // Using requestAnimationFrame for more accurate and smoother scrolling
        window.requestAnimationFrame(() => {
          const elementTop =
            element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementTop - 110,
            behavior: 'smooth',
          });

          history.pushState(null, '', `#${elementId}`);
        });
      }
    }
  };

  return (
    <div className='b2m-body-med md:b1m-body-med flex gap-3 text-blue-600'>
      <div className='mt-3 h-1 w-1 rounded-full bg-blue-600' />
      <Link href={`${props.href}`} passHref onClick={navigateByLink}>
        {props.title}
      </Link>
    </div>
  );
};

export const Paragraph = (
  props: ClassAttributes<HTMLParagraphElement> &
    HTMLAttributes<HTMLParagraphElement> &
    ExtraProps
) => {
  return (
    <div className='b3m-body-reg md:b1m-body-reg my-2 text-blue-700 md:my-4'>
      {props.children}
    </div>
  );
};

export const BlogImage = (
  props: ClassAttributes<HTMLImageElement> &
    ImgHTMLAttributes<HTMLImageElement> &
    ExtraProps
) => {
  return (
    <Image
      className='mb-4 mt-6 h-[16.25rem] object-cover md:h-[17.3125rem]'
      width={1240}
      height={1240}
      alt={props.alt || ''}
      src={`${props.src}` || ''}
    />
  );
};

export const twoImages = (props: any) => {
  const filteredChildren = props.children.filter((item: any) => item !== '\n');
  const firstImage = filteredChildren[0].props;
  const secondImage = filteredChildren[1].props;
  return (
    <div className='my-4 flex h-[23.5rem] grid-cols-12 flex-col gap-4 md:my-6 md:grid md:h-[21.75rem]'>
      <Image
        src={firstImage.src}
        alt={firstImage.alt}
        width={1240}
        height={1240}
        className='h-1/2 object-cover md:col-span-7 md:h-full'
      />
      <Image
        src={secondImage.src}
        alt={secondImage.alt}
        width={1240}
        height={1240}
        className='h-1/2 object-cover md:col-span-5 md:h-full'
      />
    </div>
  );
};

export const YoutubeVideo = (props: any) => {
  return (
    <div className='mb-4 mt-6 flex h-[16.25rem] w-full flex-col gap-6 md:mt-16 md:h-[29rem]'>
      <h6 className='h4-headline-med text-blue-600'>{props.title}</h6>
      <iframe
        width='100%'
        height='100%'
        src={`${props.iframesrc}&amp;controls=0`}
        title={props.title}
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;'
      />
    </div>
  );
};
export const BlockQuote = (
  props: DetailedHTMLProps<
    BlockquoteHTMLAttributes<HTMLQuoteElement>,
    HTMLQuoteElement
  >
) => {
  return (
    <div className='relative my-10 py-6 md:my-16'>
      <div className='absolute left-1/2 top-1/2 z-[-1] mx-auto h-full w-screen -translate-x-1/2 -translate-y-1/2 bg-gray-100 !transition-none lg:max-w-[90rem]' />
      <span className='absolute -left-4 top-0 md:-left-6 md:top-4'>
        <QuoteIcon />
      </span>
      <span className='absolute -right-4 bottom-0 md:-right-6 md:bottom-4'>
        <QuoteIcon />
      </span>
      <div className='h5-headline text-blue-700'>{props.children}</div>
    </div>
  );
};

export const OrderedList = (props: any) => {
  return (
    <div className='flex flex-col gap-4 text-blue-500'>
      {props.children
        .filter((item: any) => !!item.props)
        .map((item: any, index: number) => (
          <div key={index} className='flex gap-2'>
            <div className='b1m-body-reg flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-blue-500'>
              {index + 1}
            </div>
            <div className='md:b2m-body-med b3m-body-med text-blue-700'>
              {item.props.children}
            </div>
          </div>
        ))}
    </div>
  );
};

export const UnorderedList = (props: any) => {
  return (
    <div className='flex flex-col gap-4 text-blue-500'>
      {props.children
        .filter((item: any) => !!item.props)
        .map((item: any, index: number) => (
          <div key={index} className='flex gap-2'>
            <div className='b1m-body-reg shrink-0 items-center justify-center rounded-full'>
              &#x1B7C;
            </div>
            <div className='md:b2m-body-med b3m-body-med text-blue-700'>
              {item.props.children}
            </div>
          </div>
        ))}
    </div>
  );
};

export const CardsList = (props: any) => {
  return (
    <div className='mb-4 mt-6 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6'>
      {props.children}
    </div>
  );
};

export const Card = (props: any) => {
  return (
    <div className='col-span-2 flex flex-col gap-4 rounded-lg border border-gray-200 p-2 md:gap-6 md:p-4 '>
      <div className='b1m-body-reg flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-500 text-basic-white'>
        {props.number}
      </div>
      <div className='flex flex-col gap-2 md:gap-4'>
        <div className='b2m-body-med md:b1m-body-med'>{props.title}</div>
        <div className='b3m-body-med text-blue-700'>{props.children}</div>
      </div>
    </div>
  );
};

export const BlogLink = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <Link
      href={props.href || '/'}
      target='_blank'
      className='text-blue-400 underline'
    >
      {props.children}
    </Link>
  );
};
