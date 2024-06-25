import Checkbox from '@/components/shared/ui/Checkbox';
import { useScopedI18n } from '@/locales/client';
import Link from 'next/link';
import { useFormContext } from 'react-hook-form';

const ModalPolicyAndTerms = () => {
  const t = useScopedI18n('modals.shared');

  return (
    <div className='mb-3 flex flex-col gap-3'>
      <Checkbox
        name='privacyPolicy'
        label={
          <p className=''>
            {t('checkboxes.policy.slag1')}{' '}
            <Link
              href='/privacy-policy'
              className='link'
              rel='noopener noreferrer'
              target='_blank'
            >
              {t('checkboxes.policy.slag2')}
            </Link>{' '}
            {t('checkboxes.policy.slag3')}{' '}
            <Link
              href='/terms-of-use'
              className='link'
              rel='noopener noreferrer'
              target='_blank'
            >
              {t('checkboxes.policy.slag4')}
            </Link>{' '}
            {t('checkboxes.policy.slag5')}
          </p>
        }
        registerProps={{ required: true }}
      />
      <Checkbox
        name='termsOfUse'
        label={t('checkboxes.confirmation')}
        registerProps={{ required: true }}
      />
    </div>
  );
};

export default ModalPolicyAndTerms;
