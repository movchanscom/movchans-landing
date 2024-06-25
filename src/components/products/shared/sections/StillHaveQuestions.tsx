'use client';

import MainButton from '@/components/shared/ui/MainButton';
import SectionWrapper from '@/components/shared/wrappers/SectionWrapper';
import { useScopedI18n } from '@/locales/client';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const StillHaveQuestions = () => {
  const t = useScopedI18n('shared.haveQuestions');

  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleOpenModal = () => {
    const queryString = new URLSearchParams(params);

    queryString.set('modal', 'contact');
    router.replace(`${pathname}?${queryString.toString()}`, {
      scroll: false,
    });
  };

  return (
    <SectionWrapper>
      <div className='flex flex-col md:flex-row'>
        <div className='flex w-full flex-col gap-6 rounded-t-lg bg-gray-100 p-4 md:w-[60%] md:gap-10 md:rounded-l-lg md:rounded-bl-none md:p-6 xl:p-10'>
          <div className='flex flex-col gap-4 text-blue-700'>
            <h5 className='b1m-body-med md:h5-headline'>{t('title')}</h5>
            <p className='b2m-body-reg md:b1m-body-reg'>{t('description')}</p>
          </div>
          <MainButton
            label={t('consultationButtonText')}
            size='s'
            className='!w-full lg:!w-1/2'
            action={handleOpenModal}
          />
        </div>
        <div className='relative h-[10rem] grow md:h-auto'>
          <Image
            src='/images/have-questions.jpg'
            alt='Still have questions?'
            fill
            priority
            className='rounded-b-lg object-cover md:rounded-r-lg md:rounded-bl-none'
          />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default StillHaveQuestions;
