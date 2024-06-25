import SectionWrapper from '@/components/shared/wrappers/SectionWrapper';
import { getScopedI18n } from '@/locales/server';
import Image from 'next/image';

const History = async () => {
  const t = await getScopedI18n('about-us.company');
  return (
    <div className='bg-gray-100 py-10 pr-0'>
      <SectionWrapper title={t('title')}>
        <div className='flex h-full flex-col items-center gap-6 md:flex-row'>
          <div
            className='text-justify b3m-body-reg md:b2m-body-reg flex w-full flex-col gap-2 text-blue-700 md:max-w-[30.75rem] md:gap-4 xl:max-w-[44.5625rem]'
            dangerouslySetInnerHTML={{ __html: t('history.paragraphs') }}
          />
          <div className='relative min-h-[12.5rem] w-full grow md:-mr-10 md:h-full md:min-h-[38rem] xl:-mr-[6.25rem] xl:min-h-[27.5rem]'>
            <Image
              fill
              priority
              src='/images/about-us/history-bg.jpg'
              alt='History section image'
              className='h-full w-full rounded-l-lg rounded-r-lg object-cover md:rounded-r-none'
            />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default History;
