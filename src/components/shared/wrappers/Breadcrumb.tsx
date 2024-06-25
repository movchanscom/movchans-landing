'use client';

import { Fragment, ReactNode } from 'react';
import { useParams, usePathname } from 'next/navigation';
import Link from 'next/link';
import clsx from 'clsx';
import { useScopedI18n } from '@/locales/client';
import SectionWrapper from '@/components/shared/wrappers/SectionWrapper';

type BreadcrumbProps = {
  homeElement?: string;
  separator?: ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  titles?: string[];
};

const Breadcrumb = ({
  homeElement = 'home',
  separator = '/',
  containerClasses = '',
  listClasses = '',
  activeClasses = '',
  titles = [],
}: BreadcrumbProps) => {
  const t = useScopedI18n('breadcrumbs');
  const params = useParams();
  const paths = usePathname();
  const pathNames = paths
    .split('/')
    .filter((path) => path !== params.locale && Boolean(path));

  const getItemTitle = (index: number): string => {
    const titleIndex = titles.length - pathNames.length + index;
    return titleIndex >= 0 ? titles[titleIndex] : t(pathNames[index] as any);
  };

  return (
    <SectionWrapper className='mb-6 mt-4'>
      <ul className={clsx('flex items-center gap-3', containerClasses)}>
        <li
          className={clsx(
            'b3m-body-reg text-gray-600 hover:text-basic-black',
            listClasses
          )}
        >
          <Link href={`/${params.locale}`}>{t(homeElement as any)}</Link>
        </li>
        {pathNames.length > 0 && (
          <li className='b3m-body-reg text-gray-600'>{separator}</li>
        )}
        {pathNames.map((link, index) => {
          const href = `/${params.locale}/${pathNames.slice(0, index + 1).join('/')}`;
          const isActive = paths === href;

          const itemLink = getItemTitle(index);

          return (
            <Fragment key={index}>
              {isActive ? (
                <li
                  className={clsx(
                    'b3m-body-reg w-full truncate text-blue-600',
                    activeClasses
                  )}
                >
                  {itemLink}
                </li>
              ) : (
                <Link
                  className='b3m-body-reg text-gray-600  hover:text-basic-black'
                  href={href}
                >
                  <span>{itemLink}</span>
                </Link>
              )}
              {pathNames.length !== index + 1 && (
                <li className='b3m-body-reg text-gray-600'>{separator}</li>
              )}
            </Fragment>
          );
        })}
      </ul>
    </SectionWrapper>
  );
};

export default Breadcrumb;
