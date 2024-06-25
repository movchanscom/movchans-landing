'use client';

import SectionWrapper from '@/components/shared/wrappers/SectionWrapper';
import Map from '@/components/contacts/Map';
import { useScopedI18n } from '@/locales/client';
import MainButton from '@/components/shared/ui/MainButton';
import Locations from './Locations';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const Contacts = () => {
  const t = useScopedI18n('contacts');

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
    <SectionWrapper className='!px-0' id={t('title')}>
      <div className='ml-auto flex w-full flex-col gap-10 lg:flex-row lg:items-center lg:!pl-10  xl:gap-6 xl:!pl-0'>
        <div className='flex flex-col gap-10 px-4 md:px-10 lg:pl-0'>
          <div className='flex w-fit flex-col gap-6'>
            <h1 className='h3-headline-med md:h1-headline text-blue-600'>
              {t('title')}
            </h1>
            <p className='b2m-body-reg md:b1m-body-reg text-blue-700'>
              {t('description')}
            </p>
          </div>
          <MainButton label={t('buttonText')} size='m' action={handleButtonClick}/>
        </div>
        <div className='h-[19rem] w-full grow md:h-[25rem] lg:max-w-[57.4375rem] xl:-mr-[6.25rem] xl:h-[30.1875rem]'>
          <Map />
        </div>
      </div>
      <Locations />
    </SectionWrapper>
  );
};

export default Contacts;
