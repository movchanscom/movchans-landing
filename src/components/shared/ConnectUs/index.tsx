import SectionWrapper from '@/components/shared/wrappers/SectionWrapper';
import Image from 'next/image';
import ConnectUsBG from '/public/images/connect-us.jpg';
import ConnectUsDetails from './ConnectUsDetails';
import { getScopedI18n } from '@/locales/server';

const ConnectUs = async () => {
  const t = await getScopedI18n('shared.connectUs');
  return (
    <div className='mx-auto flex max-w-[77.5rem] flex-col px-4 md:flex-row md:px-8 xl:px-0'>
      <SectionWrapper
        title={t('title')}
        className='relative w-full rounded-lg bg-gray-100 !p-4 md:!p-6 lg:!p-10 xl:!p-10'
      >
        <ConnectUsDetails />
      </SectionWrapper>
      <Image
        src={ConnectUsBG}
        alt='Connect Us'
        className='h-[10rem] w-full shrink overflow-hidden rounded-b-lg object-cover md:h-auto md:!w-[45%] md:rounded-r-lg md:rounded-bl-none lg:w-[33rem]'
        priority
      />
    </div>
  );
};

export default ConnectUs;
