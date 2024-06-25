'use client';

import { FOOTER_COLUMNS } from '@/constants';
import { useScopedI18n } from '@/locales/client';
import { NavItemsType } from '@/types/constants.type';
import Link from 'next/link';
import { FC } from 'react';

type InfoColumnProps = {
  column: NavItemsType;
};

const InfoColumn: FC<InfoColumnProps> = ({ column }) => {
  const t = useScopedI18n('footer.columns');
  return (
    <div className='flex flex-col gap-5'>
      <h6 className='b1m-body-med'>{t(`${column.title}.title` as any)}</h6>
      <div className='flex flex-col gap-3'>
        {!!column.items && (
          <>
            {column.items.map((item) => (
              <Link
                href={item.href}
                key={item.href}
                className='b3m-body-reg text-gold-on-hover'
              >
                {column.rawValues
                  ? item.title
                  : t(`${column.title}.items.${item.title}` as any)}
              </Link>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default InfoColumn;
