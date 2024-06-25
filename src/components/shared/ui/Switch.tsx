import { DetailedHTMLProps, FC, InputHTMLAttributes, KeyboardEvent } from 'react';
import { useFormContext } from 'react-hook-form';

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type SwitchProps = {
  name: string;
  label?: string;
  inputProps?: InputProps;
};

const Switch: FC<SwitchProps> = ({ name, label, inputProps }) => {
  const {
    register,
    formState: { errors },
    setValue,
    watch,
  } = useFormContext();
  const errorMessage = errors[name]?.message as string;
  const isChecked = watch(name);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setValue(name, !isChecked);
    }
  };

  return (
    <div>
      <label className='inline-flex cursor-pointer items-center gap-2'>
        <input
          type='checkbox'
          {...register(name)}
          {...inputProps}
          className='peer sr-only'
          aria-checked={isChecked}
          role='switch'
          onKeyDown={handleKeyDown}
        />
        <div
          className="peer-checked:after:border-white after:shadow-md peer relative 
                     h-[24px] w-[48px] 
                     rounded-full 
                     bg-gray-200 
                     after:absolute after:start-[4px] 
                     after:top-[4px] after:h-4 after:w-4 
                     after:rounded-full  after:bg-basic-white after:transition-all 
                     after:content-[''] peer-checked:bg-blue-600  
                     peer-checked:after:translate-x-[24px] rtl:peer-checked:after:-translate-x-[24px]
                     peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 peer-focus:ring-offset-2"
        ></div>
        {label && (
          <span className='b4m-body-reg'>
            {label}
            {inputProps?.required && '*'}
          </span>
        )}
      </label>
      {errorMessage && typeof errorMessage === 'string' && (
        <p className='text-red-500'>{errorMessage}</p>
      )}
    </div>
  );
};

export default Switch;
