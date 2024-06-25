import { DetailedHTMLProps, FC, InputHTMLAttributes, ReactNode } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import CheckedIcon from '/public/icons/checked.svg';
import clsx from 'clsx';
import {
  createValidationRules,
  getErrorMessage,
} from '@/constants/inputs.constants';

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type CheckboxProps = {
  name: string;
  label: string | ReactNode;
  inputProps?: InputProps;
  registerProps?: RegisterOptions;
};

const Checkbox: FC<CheckboxProps> = ({
  name,
  label,
  inputProps = {},
  registerProps = {},
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const errorMessage = errors[name]?.message as string;

  const validationRules = createValidationRules(registerProps, label);

  return (
    <div className='group'>
      <label className='inline-flex cursor-pointer items-start gap-2'>
        <input
          id={name}
          type='checkbox'
          {...register(name, validationRules)}
          className='peer sr-only'
          {...inputProps}
        />
        <div
          className={clsx(
            'flex h-4 w-4 shrink-0 items-center justify-center rounded-sm border border-gray-400 group-hover:bg-blue-100 group-hover:border-blue-400 focus:outline-[3px] focus:outline-blue-200 transition-all peer-checked:border-blue-500 peer-checked:bg-blue-500',
            {
              '!border-functional-red': errorMessage,
            }
          )}
        >
          <CheckedIcon />
        </div>
        {label && (
          <span className='b4m-body-reg !leading-[1.125rem] group-hover:text-blue-700'>
            {label}
            {inputProps?.required && '*'}
          </span>
        )}
      </label>
    </div>
  );
};

export default Checkbox;
