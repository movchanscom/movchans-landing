'use client';

import { FC, useEffect, useState } from 'react';
import Modal from '@/components/shared/ui/Modal';
import TextInput from '@/components/shared/ui/TextInput';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { useScopedI18n } from '@/locales/client';
import MainButton from '@/components/shared/ui/MainButton';
import ModalPolicyAndTerms from '@/components/shared/modals/ModalPolicyAndTerms';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { INPUTS_CHECK_CONSTANTS } from '@/constants/inputs.constants';
import clsx from 'clsx';
import { GOOGLE_SHEET_RANGES, KNOW_US_FROM } from '@/constants';
import Select from '@/components/shared/ui/Select';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  source: string;
  privacyPolicy: boolean;
  termsOfUse: boolean;
}

const SubscribtionModal: FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timerExecuted, setTimerExecuted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const t = useScopedI18n('modals.subscriptionModal');

  const initialText = t('buttonText');

  const [buttonText, setButtonText] = useState<string>(initialText);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const methods = useForm<FormData>();

  useEffect(() => {
    if (searchParams.get('modal') === 'subscribe' && !isModalOpen) {
      setIsModalOpen(true);
      return;
    }
    if (!(searchParams.get('modal') === 'subscribe') && isModalOpen) {
      setIsModalOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handleSubscribeModal = (type: 'open' | 'close' = 'open') => {
    const queryString = new URLSearchParams(searchParams);

    if (type === 'close') {
      queryString.delete('modal');
      methods.reset();
    } else {
      queryString.set('modal', 'subscribe');
    }

    router.replace(
      `${pathname}${queryString.toString() ? `?${queryString.toString()}` : ''}`,
      {
        scroll: false,
      }
    );
  };

  useEffect(() => {
    if (!timerExecuted) {
      const timer = setTimeout(() => {
        if (!isModalOpen && !searchParams.has('modal')) {
          handleSubscribeModal();
        }
        setTimerExecuted(true);
      }, 15000);

      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams]);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    try {
      await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          country: data.country,
          source: data.source,
          range: GOOGLE_SHEET_RANGES.subscribe,
        }),
      });
      await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: 'Подписка',
          text: `
Имя: ${data.firstName},
Фамилия: ${data.firstName},
Email: ${data.email},
Страна: ${data.country},
Откуда узнали о нас: ${data.source},
          `,
        }),
      });
      setButtonText(t('successButtonText'));
      methods.reset();
    } catch (e: any) {
      console.error(e.message);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        isModalOpen && handleSubscribeModal('close');
        setButtonText(initialText);
      }, 3000);
    }
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={() => handleSubscribeModal('close')}
      title={t('title')}
    >
      <h6 className='b3m-body-reg'>
        {t('description')}{' '}
        <span className='b3m-body-med'>{`Movchan's Group`}.</span>
      </h6>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className='flex flex-col gap-4'
        >
          <TextInput
            name='firstName'
            placeholder={t('inputPlaceholders.firstName')}
            registerProps={{
              required: true,
            }}
          />
          <TextInput
            name='lastName'
            placeholder={t('inputPlaceholders.lastName')}
            registerProps={{
              required: true,
            }}
          />
          <TextInput
            name='email'
            placeholder={t('inputPlaceholders.email')}
            registerProps={{
              required: true,
              pattern: INPUTS_CHECK_CONSTANTS.EMAIL_PATTERN,
            }}
          />
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <TextInput
              name='country'
              placeholder={t('inputPlaceholders.country')}
            />
            <Select
              name='source'
              placeholder={t('inputPlaceholders.source')}
              options={KNOW_US_FROM}
            />
          </div>
          <ModalPolicyAndTerms />
          <MainButton
            size='m'
            buttonProps={{ disabled: isLoading }}
            label={buttonText}
            className={clsx('mx-auto w-full max-w-[15.6875rem] text-center', {
              'bg-green-300 hover:bg-green-400': buttonText !== initialText,
            })}
          />
        </form>
      </FormProvider>
    </Modal>
  );
};

export default SubscribtionModal;
