'use client';

import PhoneIcon from '/public/icons/phone.svg';
import { useScopedI18n } from '@/locales/client';

const ContactsInfo = () => {
  const t = useScopedI18n('footer.columns.column4');
  return (
    <div className='flex flex-col gap-5'>
      <h6 className='b1m-body-med'>{t('title')}</h6>
      <div className='flex flex-col gap-3'>
        <a
          href={`tel:${t('items.phone')}`}
          className='text-gold-on-hover flex items-center gap-1'
        >
          <PhoneIcon />
          <p className='b3m-body-med'>{t('items.phone')}</p>
        </a>
        <div className='flex flex-col gap-2'>
          <p className='b3m-body-reg'>
            {t('items.emailForCommonQuestion.title')}
          </p>
          <a
            href={`mailto:${t('items.emailForCommonQuestion.email')}`}
            className='b3m-body-med text-gold-on-hover'
          >
            {t('items.emailForCommonQuestion.email')}
          </a>
        </div>
        <div className='flex flex-col gap-2'>
          <p className='b3m-body-reg'>
            {t('items.emailForCooperationAndPR.title')}
          </p>
          <a
            href={`mailto:${t('items.emailForCooperationAndPR.email')}`}
            className='b3m-body-med text-gold-on-hover'
          >
            {t('items.emailForCooperationAndPR.email')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactsInfo;
