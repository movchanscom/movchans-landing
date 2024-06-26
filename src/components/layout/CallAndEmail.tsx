'use client';

import EnvelopeIcon from '/public/icons/envelope.svg';
import PhoneIcon from '/public/icons/phone.svg';

const CallEmailButtons = () => {
    return (
    <div className='flex items-center gap-2'>
      <a
        href={`tel:+357 - 22030814`}
        title='Call'
        className='p-2 transition-transform duration-150 hover:scale-110'
      >
        <PhoneIcon />
      </a>
      <a
      href={'mailto:contact@movchans.com'}
        title='Email'
        className='p-2 transition-transform duration-150 hover:scale-110'
      >
        <EnvelopeIcon />
      </a>
    </div>
  );
};

export default CallEmailButtons;
