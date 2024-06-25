'use client';

import PhoneIcon from '/public/icons/phone.svg';
import EnvelopeIcon from '/public/icons/envelope.svg';
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
      <a
        href={`tel:`}
        title='Call'
        className='p-2 transition-transform duration-150 hover:scale-110'
      >
        <PhoneIcon />
      </a>
      <button
        onClick={handleButtonClick}
        title='Email'
        className='p-2 transition-transform duration-150 hover:scale-110'
      >
        <EnvelopeIcon />
      </button>
    </div>
  );
};

export default CallEmailButtons;
