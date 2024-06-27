'use client';

import MainButton from '@/components/shared/ui/MainButton';
import Modal from '@/components/shared/ui/Modal';
import TextInput from '@/components/shared/ui/TextInput';
import { INPUTS_CHECK_CONSTANTS } from '@/constants/inputs.constants';
import clsx from 'clsx';
import { useState } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

const BUTTON_DEFAULT_TEXT = 'Submit';
const BUTTON_SENDING_TEXT = 'Sending';
const BUTTON_SUCCESS_SENDING = 'Sended';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  actives: string;
  country: string;
  source: string;
  privacyPolicy: boolean;
  termsOfUse: boolean;
}

interface ContactFormModalProps {
  isOpen: boolean;
  handleClose: () => void;
}

const ContactFormModal = (props: ContactFormModalProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const [buttonText, setButtonText] = useState<string>(BUTTON_DEFAULT_TEXT);
  const methods = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    setButtonText(BUTTON_SENDING_TEXT);
    try {
      await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          subject: 'More information',
          text: `
              Имя: ${data.firstName},
              Фамилия: ${data.lastName},
              Email: ${data.email}
          `,
        }),
      });
      setButtonText(BUTTON_SUCCESS_SENDING);
      methods.reset();
    } catch (e: any) {
      console.error(e.message);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setButtonText(BUTTON_DEFAULT_TEXT);
      }, 3000);
    }
  };

  return (
    <Modal
      isOpen={props.isOpen}
      onClose={props.handleClose}
      className='p-4 md:p-6 md:pt-[4.25rem]'
      closeBtnClassName='top-2.5 md:top-1'
    >
      <div className='flex flex-col gap-2'>
        <h6 className='b1m-body-med md:h6-headline-med pr-6 text-basic-black md:pr-0'>
          Please fill out the form to get more information
        </h6>
      </div>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className='flex flex-col gap-4'
        >
          <TextInput
            name='firstName'
            placeholder='Name'
            registerProps={{
              required: {
                value: true,
                message: 'Please fill your name',
              },
            }}
          />
          <TextInput
            name='lastName'
            placeholder='Surname'
            registerProps={{
              required: {
                value: true,
                message: 'Please fill your surname',
              },
            }}
          />
          <TextInput
            name='email'
            placeholder='Email'
            registerProps={{
              required: {
                value: true,
                message: 'Please fill your email',
              },
              pattern: {
                value: INPUTS_CHECK_CONSTANTS.EMAIL_PATTERN,
                message: 'Email is not valid',
              },
            }}
          />
          <div className='mt-6'>
            <MainButton
              size='m'
              variant='contained'
              buttonProps={{ disabled: isLoading }}
              label={buttonText}
              className={clsx('mx-auto w-full max-w-[20rem] text-center', {
                'bg-green-300 hover:bg-green-400':
                  buttonText !== BUTTON_DEFAULT_TEXT,
              })}
            />
          </div>
        </form>
      </FormProvider>
    </Modal>
  );
};

export default ContactFormModal;
