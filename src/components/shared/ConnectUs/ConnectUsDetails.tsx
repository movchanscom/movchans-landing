'use client';

import MainButton from '@/components/shared/ui/MainButton';
import { useScopedI18n } from '@/locales/client';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';

const ConnectUsDetails = () => {
  const t = useScopedI18n('shared.connectUs');

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
    <div className='flex flex-grow flex-col justify-between gap-10'>
      <p className='b3m-body-med lg:h6-headline-med'>{t('description')}</p>
      <MainButton
        label={t('buttonText')}
        size='m'
        action={handleButtonClick}
        withIcon
      />
    </div>
  );
};

export default ConnectUsDetails;
