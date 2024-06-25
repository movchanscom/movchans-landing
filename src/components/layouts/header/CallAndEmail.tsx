'use client';

import PhoneIcon from '/public/icons/phone.svg';
import EnvelopeIcon from '/public/icons/envelope.svg';
import { MAIN_PHONE_NUMBER } from '@/constants';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const CallEmailButtons = () => {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleButtonClick = () => {
    const queryString = new URLSearchParams(params);

    queryString.set('modal', 'contact');
    router.replace(`${pathname}?${queryString.toString()}`, {
      scroll: false,
    });
  };

  return (
    <div className='flex items-center gap-2'>
      <a href={`tel:${MAIN_PHONE_NUMBER}`} title='Call' className='p-2 hover:scale-110 transition-transform duration-150'>
        <PhoneIcon />
      </a>
      <button onClick={handleButtonClick} title='Email' className='p-2 hover:scale-110 transition-transform duration-150'>
        <EnvelopeIcon />
      </button>
    </div>
  );
};

export default CallEmailButtons;
