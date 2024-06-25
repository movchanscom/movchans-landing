'use client';

import { useEffect, useState } from 'react';
import Modal from '@/components/shared/ui/Modal';
import TextInput from '@/components/shared/ui/TextInput';
import { useForm, FormProvider, SubmitHandler } from 'react-hook-form';
import { useScopedI18n } from '@/locales/client';
import MainButton from '@/components/shared/ui/MainButton';
import Select from '@/components/shared/ui/Select';
import Consultants from '@/components/shared/modals/ContactModal/Consultants';
import ModalPolicyAndTerms from '@/components/shared/modals/ModalPolicyAndTerms';
import { CURRENCIES, GOOGLE_SHEET_RANGES, INVEST_PRODUCTS, KNOW_US_FROM } from '@/constants';
import clsx from 'clsx';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { INPUTS_CHECK_CONSTANTS } from '@/constants/inputs.constants';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  currency: string;
  actives: string;
  strategy: string;
  source: string;
  consultant1: boolean;
  consultant2: boolean;
  privacyPolicy: boolean;
  termsOfUse: boolean;
}

const ContactModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const methods = useForm<FormData>();
  const t = useScopedI18n('modals.contactModal');
  const [isLoading, setIsLoading] = useState(false);
  const initialText = t('buttonText');
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const [buttonText, setButtonText] = useState<string>(initialText);

  useEffect(() => {
    if (searchParams.get('modal') === 'contact' && !isModalOpen) {
      setIsModalOpen(true);
      return;
    }
    if (!(searchParams.get('modal') === 'contact') && isModalOpen) {
      setIsModalOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const handleContactModal = (type: 'open' | 'close' = 'open') => {
    const queryString = new URLSearchParams(searchParams);

    if (type === 'close') {
      queryString.delete('modal');
    } else {
      queryString.set('modal', 'contact');
    }

    router.replace(
      `${pathname}${queryString.toString() ? `?${queryString.toString()}` : ''}`,
      {
        scroll: false,
      }
    );
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const { privacyPolicy, termsOfUse, ...rest } = data;
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
          phone: data.phone,
          email: data.email,
          country: data.country,
          actives: data.actives,
          currency: data.currency,
          strategy: data.strategy,
          source: data.source,
          consultant1: data.consultant1,
          consultant2: data.consultant2,
          range: GOOGLE_SHEET_RANGES.connect,
        }),
      });
      await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: 'Запись',
          text: `
Имя: ${data.firstName},
Фамилия: ${data.firstName},
Телефон: ${data.firstName},
Email: ${data.email},
Страна: ${data.country},
Ликвидные активы: ${data.actives},
Валюта: ${data.currency},
Cтратегия: ${data.actives},
Откуда узнали о нас: ${data.source},
Консультант Прокофьева: ${data.consultant1},
Консультант Нагапетьянц: ${data.consultant2},
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
        isModalOpen && handleContactModal('close');
        setButtonText(initialText);
      }, 3000);
    }
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={() => handleContactModal('close')}
      title={t('title')}
    >
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className='flex flex-col gap-4'
        >
          <div className='grid gap-4 md:grid-cols-2'>
            <div className='flex flex-col gap-4'>
              <TextInput
                name='firstName'
                placeholder={t('inputPlaceholders.firstName')}
                registerProps={{ required: true }}
              />
              <TextInput
                name='phone'
                placeholder={t('inputPlaceholders.phone')}
                registerProps={{ required: true }}
              />
              <TextInput
                name='country'
                placeholder={t('inputPlaceholders.country')}
                registerProps={{ required: true }}
              />
              <Select
                name='currency'
                placeholder={t('inputPlaceholders.currency')}
                options={CURRENCIES}
              />
            </div>
            <div className='flex flex-col gap-4'>
              <TextInput
                name='lastName'
                placeholder={t('inputPlaceholders.lastName')}
                registerProps={{ required: true }}
              />
              <TextInput
                name='email'
                placeholder={t('inputPlaceholders.email')}
                registerProps={{
                  required: true,
                  pattern: INPUTS_CHECK_CONSTANTS.EMAIL_PATTERN,
                }}
              />
              <TextInput
                name='actives'
                placeholder={t('inputPlaceholders.actives')}
                registerProps={{ required: true }}
              />
              <Select
                name='strategy'
                placeholder={t('inputPlaceholders.strategy')}
                options={INVEST_PRODUCTS}
              />
            </div>
          </div>
          <Select
            name='source'
            placeholder={t('inputPlaceholders.source')}
            options={KNOW_US_FROM}
          />
          <Consultants />
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

export default ContactModal;
