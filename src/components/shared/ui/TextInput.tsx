import { createValidationRules } from '@/constants/inputs.constants';
import clsx from 'clsx';
import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';
import { RegisterOptions, useFormContext } from 'react-hook-form';

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

interface TextInputProps {
  name: string;
  placeholder: string;
  inputProps?: InputProps;
  registerProps?: RegisterOptions;
}

const TextInput: FC<TextInputProps> = ({
  name,
  placeholder,
  inputProps,
  registerProps = {},
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const errorMessage = errors[name]?.message as string;
  console.log(errors)
  const isRequired = registerProps?.required ?? false;

  const validationRules = createValidationRules(registerProps, placeholder);

  return (
    <div className='w-full'>
      <input
        {...inputProps}
        {...register(name, validationRules)}
        autoComplete='off'
        placeholder={isRequired ? `${placeholder}*` : placeholder}
        className={clsx(
          'b3m-body-reg border-gray-30 w-full rounded border px-4 py-3 leading-[1.3125rem] text-gray-700 outline-none transition-colors duration-300 placeholder:text-gray-700 hover:border-gold-500 focus:outline-gold-100 focus:border-gold-500',
          {
            'border-functional-red': !!errorMessage,
          }
        )}
      />
      {errorMessage && typeof errorMessage === 'string' && (
        <p className='b4m-body-reg mt-1 text-functional-red'>{errorMessage}</p>
      )}
    </div>
  );
};

export default TextInput;
