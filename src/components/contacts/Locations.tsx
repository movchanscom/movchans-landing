'use client';

import { ContactsMarkers } from '@/constants/contacts.constants';
import { useCurrentLocale } from '@/locales/client';
import clsx from 'clsx';
import { useMemo, useState } from 'react';
import PhoneIcon from '/public/icons/phone.svg';
import EnvelopeIcon from '/public/icons/envelope.svg';

const Locations = () => {
  const locale = useCurrentLocale();
  const branches = useMemo(() => {
    return ContactsMarkers.map((item) => ({
      ...item,
      country: item.country[locale],
    }));
  }, [locale]);
  const [activeCountry, setActiveCountry] = useState<number>(branches[0].id);

  const activeObject =
    branches.find((branch) => branch.id === activeCountry) || branches[0];

  return (
    <div className='flex flex-col gap-8 bg-gray-100 p-4 md:flex-row md:items-center md:justify-center md:gap-6 md:p-10 xl:-mx-[6.25rem]'>
      <ul className='flex w-full max-w-[24.8125rem] flex-col gap-3 md:gap-4'>
        {branches.map((branch) => (
          <li key={branch.id}>
            <button
              className={clsx('b1m-body-med md:h6-headline-med text-gray-600', {
                '!text-blue-600': activeCountry === branch.id,
              })}
              onClick={() => setActiveCountry(branch.id)}
            >
              &#x1B7C; {branch.country}
            </button>
          </li>
        ))}
      </ul>
      <ul className='b2m-body-med md:b1m-body-med flex w-full max-w-[24.8125rem] flex-col gap-3 text-blue-700 md:gap-4'>
        <li>{activeObject.name}</li>
        {!!activeObject.phone && (
          <li>
            <a
              href={`tel:${activeObject.phone}`}
              className='flex items-center gap-1'
            >
              <PhoneIcon /> {activeObject.phone}
            </a>
          </li>
        )}
        {!!activeObject.email && (
          <li>
            <a
              href={`mailto:${activeObject.email}`}
              className='flex items-center gap-1'
            >
              <EnvelopeIcon /> {activeObject.email}
            </a>
          </li>
        )}
        <li>{activeObject.address}</li>
      </ul>
    </div>
  );
};

export default Locations;
