import { useScopedI18n } from '@/locales/client';
import Image from 'next/image';
import FirstConsultantImage from '/public/images/modals/consultants/consultant-1.png';
import SecondConsultantImage from '/public/images/modals/consultants/consultant-2.png';
import Switch from '@/components/shared/ui/Switch';

const Consultants = () => {
  const t = useScopedI18n('modals.contactModal.inputPlaceholders.consultants');

  return (
    <div className='mb-2 flex flex-col gap-4'>
      <p className='b3m-body-reg text-blue-700'>{t('description')}</p>
      <div className='grid md:grid-cols-2 gap-4'>
        <div className='flex gap-4'>
          <Image
            src={FirstConsultantImage}
            alt='First Consultant'
            width={80}
            height={80}
          />
          <div className='flex flex-col justify-between'>
            <p className='b3m-body-med'>{t('consultant1')}</p>
            <Switch name='consultant1' />
          </div>
        </div>
        <div className='flex gap-4'>
          <Image
            src={SecondConsultantImage}
            alt='Second Consultant'
            width={80}
            height={80}
          />
          <div className='flex flex-col justify-between'>
            <p className='b3m-body-med'>{t('consultant2')}</p>
            <Switch name='consultant2' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultants;
