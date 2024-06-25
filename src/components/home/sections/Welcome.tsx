'use client';

import IntroBackground from '/public/images/welcome.jpg';
import MainButton from '@/components/shared/ui/MainButton';
import { useScopedI18n } from '@/locales/client';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import RoundIcon from '/public/icons/round.svg';

const Welcome = () => {
  const t = useScopedI18n('home.introduction');

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
    <div className='relative mb-9 md:mb-20'>
      <Image
        src={IntroBackground}
        alt='welcome'
        className='h-[48.875rem] w-full object-cover md:h-[68.3125rem] xl:h-[49.125rem]'
        priority
      />
      <div className='absolute bottom-0 left-0 right-0 top-0 bg-[#ffffff80]' />
      <div className='absolute left-4 right-4 top-[9rem] flex max-w-[50rem] transform flex-col gap-10 md:left-10 md:right-auto md:top-1/2 md:-translate-y-1/2 xl:left-[6.25rem]'>
        <p className='b1m-body-sb md:h3-headline-sb'>{t('section1.title')}</p>

        <MainButton
          label={t('section1.buttonText')}
          size={'m'}
          withIcon
          action={handleButtonClick}
        />
      </div>
      <div className='absolute bottom-0 right-0 z-10 max-w-[19rem] rounded-tl-2xl bg-basic-white pl-4 pt-4 md:max-w-[35rem] xl:max-w-[51.375rem] '>
        <span className='absolute -left-3 bottom-0'>
          <RoundIcon />
        </span>
        <span className='absolute -top-3 right-0'>
          <RoundIcon />
        </span>
        <div className='flex w-full flex-col gap-2 rounded-xl bg-blue-100 py-2 pl-2 pr-4 md:h-[19.5rem] md:py-6 md:pl-6 md:pr-10 xl:h-[16.1672rem] xl:pr-[6.25rem]'>
          <p className='b3m-body-med md:b1m-body-med'>{t('section2.title')}</p>
          <p className='b4m-body-reg md:b2m-body-reg'>
            {t('section2.paragraph1')}
          </p>
          <p className='b4m-body-reg md:b2m-body-reg'>
            {t('section2.paragraph2')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
