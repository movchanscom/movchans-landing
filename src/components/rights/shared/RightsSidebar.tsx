'use client';

import { PRIVACY_CHAPTERS_ITEMS } from '@/constants/privacy.constants';
import { TERMS_CHAPTERS_ITEMS } from '@/constants/terms.constants';
import { useScopedI18n } from '@/locales/client';
import Link from 'next/link';
import { FC } from 'react';

type RightsSidebarProps = {
  type: 'privacy-policy' | 'terms-of-use';
};

const RightsSidebar: FC<RightsSidebarProps> = ({ type }) => {
  const t = useScopedI18n(`${type}.chapters`);
  const RightObject =
    type === 'privacy-policy' ? PRIVACY_CHAPTERS_ITEMS : TERMS_CHAPTERS_ITEMS;
  return (
    <ul className='sticky ml-4 hidden h-fit w-fit max-w-[25rem] shrink-0 list-disc flex-col gap-4 lg:top-[100px] lg:flex '>
      {RightObject.map((item) => (
        <li key={item}>
          <Link href={`#${item}`} className='b1m-body-med text-blue-500'>
            {t(`${item}.title`)}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default RightsSidebar;
