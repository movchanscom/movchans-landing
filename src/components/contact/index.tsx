import ContactBg from '@/../public/images/contact-bg.jpg';
import SectionWrapper from '../shared/wrappers/SectionWrapper';
import Image from 'next/image';
import PhoneIcon from '/public/icons/phone.svg';
import EnvelopeIcon from '/public/icons/envelope.svg';

const Contact = () => {
  return (
    <SectionWrapper className='section-spacing' id='contacts'>
      <div className='grid grid-cols-1 overflow-hidden rounded-lg md:grid-cols-2'>
        <div className='bg-blue-600 p-4 md:p-6 lg:p-10'>
          <div className='flex flex-col gap-6 md:gap-10'>
            <h2 className='headline-small md:headline-med w-fit rounded-3xl border border-solid border-basic-white px-4 py-1 text-basic-white'>
              CONTACTS
            </h2>
            <div>
              <p className=' b1m-body-med md:h6-headline-med lg:h5-headline text-blue-100'>
                For all matters please use emails below
              </p>
              <div className='mt-6 flex flex-wrap md:flex-col md:gap-1 lg:flex-row lg:gap-4'>
                <a
                  href='mailto:skukhno@movchans.com '
                  className='b1m-body-reg flex flex-row items-center gap-1  text-blue-100'
                >
                  <EnvelopeIcon className='fill-blue-100' />{' '}
                  skukhno@movchans.com
                </a>
                <div className='hidden h-[27px] w-[1px] bg-gold-500 lg:flex'></div>
                <a
                  href='mailto:contact@movchans.com'
                  className='b1m-body-reg  ml-7 text-blue-100 lg:ml-0'
                >
                  contact@movchans.com
                </a>
              </div>
              <a
                href='tel:+357 - 22030814'
                className='b1m-body-reg mt-4 flex flex-row items-center gap-1 text-blue-100'
              >
                <PhoneIcon className='fill-blue-100' /> +357 - 22030814
              </a>
            </div>
          </div>
        </div>
        <Image
          {...ContactBg}
          quality={100}
          className='h-[180px] object-cover object-top md:h-full'
          alt='For all matters please use emails below'
        />
      </div>
    </SectionWrapper>
  );
};

export default Contact;
