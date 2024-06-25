import { ReactNode } from 'react';
import { RegisterOptions } from 'react-hook-form';

const INPUTS_CHECK_CONSTANTS = {
  INPUT_MAX_LENGTH: 300,
  URL_PATTERN:
    /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+(\.[a-zA-Z]{2,})?$/,
  EMAIL_PATTERN: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  PHONE_NUMBER_PATTERN:
    /^\+?\d{1,3}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/i,
};

const getErrorMessage = (
  type: keyof RegisterOptions,
  label: string | ReactNode,
  value?: any
): string => {
  switch (type) {
    case 'required':
      return `Поле ${label} обязательно для заполнения`;
    case 'minLength':
      return `Поле ${label} должно содержать минимум ${value} символов`;
    case 'maxLength':
      return `Поле ${label} может содержать максимум ${value} символов`;
    case 'pattern':
      if (value === INPUTS_CHECK_CONSTANTS.URL_PATTERN) {
        return `Поле ${label} должно быть действительным URL`;
      } else if (value === INPUTS_CHECK_CONSTANTS.EMAIL_PATTERN) {
        return `Поле ${label} должно быть действительным email`;
      } else if (value === INPUTS_CHECK_CONSTANTS.PHONE_NUMBER_PATTERN) {
        return `Поле ${label} должно быть действительным номером телефона`;
      }
      return `Поле ${label} не соответствует требуемому шаблону`;
    default:
      return `Поле ${label} содержит ошибку`;
  }
};

const createValidationRules = (
  registerProps: RegisterOptions,
  label: string | ReactNode
): RegisterOptions => {
  return Object.keys(registerProps).reduce((acc, key) => {
    const keyTyped = key as keyof RegisterOptions;
    const value = registerProps[keyTyped];
    if (value !== undefined) {
      acc[keyTyped] = {
        value,
        message: getErrorMessage(keyTyped, label, value),
      };
    }
    return acc;
  }, {} as RegisterOptions);
};

export { INPUTS_CHECK_CONSTANTS, createValidationRules, getErrorMessage };
