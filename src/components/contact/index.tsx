import ContactBg from '@/../public/images/contact-bg.jpg';
import SectionWrapper from '../shared/wrappers/SectionWrapper';
import Image from 'next/image';
import PhoneIcon from '/public/icons/phone.svg';
import EnvelopeIcon from '/public/icons/envelope.svg';

const Contact = () => {
  return (
    <SectionWrapper className='section-spacing'>
      <div className='grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-lg'>
        <div className='bg-blue-600 p-4 md:p-6 lg:p-10'>
          <div className='flex flex-col gap-6 md:gap-10'>
            <h2 className='headline-small md:headline-med w-fit rounded-3xl border border-solid border-basic-white px-4 py-1 text-basic-white'>
              CONTACTS
            </h2>
            <div>
              <p className=' b1m-body-med md:h6-headline-med lg:h5-headline text-blue-100'>
                For any external relations please use emails below
              </p>
              <a
                href='tel:+357 - 22030814'
                className='mt-6 flex flex-row items-center gap-1 text-blue-100 b1m-body-reg'
              >
                <PhoneIcon className='fill-blue-100' /> +357 - 22030814
              </a>
              <div className='flex md:flex-col lg:flex-row flex-wrap md:gap-1 lg:gap-4 mt-4'>
                <a
                  href='mailto:skukhno@movchans.com '
                  className='flex flex-row items-center gap-1 text-blue-100  b1m-body-reg'
                >
                  <EnvelopeIcon className='fill-blue-100' />{' '}
                  skukhno@movchans.com
                </a>
                <div className='w-[1px] h-[27px] bg-gold-500 hidden lg:flex'></div>
                <a
                  href='mailto:contact@movchans.com'
                  className='text-blue-100  b1m-body-reg ml-7 lg:ml-0'
                >
                  contact@movchans.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <Image
          {...ContactBg}
          quality={100}
          className='object-cover object-top h-[180px] md:h-full'
          alt='For any external relations please use emails below'
        />
      </div>
    </SectionWrapper>
  );
};

export default Contact;
