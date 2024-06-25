'use client';

import { LANGUAGES } from '@/constants';
import { useChangeLocale } from '@/locales/client';
import { useParams } from 'next/navigation';
import { Fragment } from 'react';

const LanguageSelector = () => {
  const changeLocale = useChangeLocale();
  const params = useParams();

  return (
    <div className='flex gap-1'>
      {LANGUAGES.map((language, index) => (
        <Fragment key={language}>
          <button
            className={params.locale === language ? '' : 'text-gray-400'}
            onClick={() => changeLocale('ru')}
          >
            {language.toUpperCase()}
          </button>
          {index !== LANGUAGES.length - 1 && '|'}
        </Fragment>
      ))}
    </div>
  );
};

export default LanguageSelector;
