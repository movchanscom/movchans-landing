import {
  useState,
  useRef,
  useEffect,
  DetailedHTMLProps,
  SelectHTMLAttributes,
  FC,
  KeyboardEvent,
} from 'react';
import { useFormContext } from 'react-hook-form';
import clsx from 'clsx';
import ArrowDownIcon from '/public/icons/arrow-down.svg';
import CheckedIcon from '/public/icons/checked-dark.svg';
import { AnimatePresence, motion } from 'framer-motion';

type InputProps = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

interface SelectProps {
  name: string;
  placeholder: string;
  options: string[];
  inputProps?: InputProps;
}

const Select: FC<SelectProps> = ({
  name,
  placeholder,
  options,
  inputProps,
}) => {
  const {
    register,
    formState: { errors },
    setValue,
  } = useFormContext();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined
  );
  const [focusedIndex, setFocusedIndex] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);
  const errorMessage = errors[name]?.message as string;

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleOptionClick = (value: string) => {
    setSelectedValue(value);
    setValue(name, value);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setFocusedIndex((prev) => (prev + 1) % options.length);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setFocusedIndex((prev) =>
        prev === 0 ? options.length - 1 : prev - 1
      );
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (isOpen) {
        handleOptionClick(options[focusedIndex]);
      } else {
        setIsOpen(true);
      }
    } else {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      setFocusedIndex(options.findIndex((option) => option === selectedValue) || 0);
    }
  }, [isOpen, options, selectedValue]);

  return (
    <div
      className='relative w-full'
      ref={ref}
      role='combobox'
      aria-expanded={isOpen}
      aria-haspopup='listbox'
      aria-controls={`${name}-listbox`}
    >
      <div
        onClick={toggleOpen}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        className={clsx(
          'b3m-body-reg border-gray-30 flex w-full cursor-pointer items-center justify-between rounded border px-3 py-3 text-gray-700 outline-none transition-colors duration-300 hover:border-gold-500 focus:outline-gold-100 focus:border-gold-500',
          {
            'border-functional-red': !!errorMessage,
          }
        )}
      >
        {selectedValue
          ? options.find((option) => option === selectedValue)
          : placeholder}
        <ArrowDownIcon
          className={clsx('transition-transform duration-200', {
            'rotate-180': isOpen,
          })}
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, height: 0 }}
            exit={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            transition={{ duration: 0.2 }}
            className='absolute z-10 mt-1 w-full overflow-hidden rounded border bg-basic-white shadow-lg max-h-[8rem] overflow-y-scroll'
            role='listbox'
            id={`${name}-listbox`}
          >
            {options.map((option, index) => (
              <li
                key={option}
                onClick={() => handleOptionClick(option)}
                className={clsx(
                  'b3m-body-reg flex cursor-pointer items-center justify-between px-3 py-2 text-gray-700 hover:bg-gray-100',
                  {
                    'bg-gray-200': index === focusedIndex,
                  }
                )}
                role='option'
                aria-selected={option === selectedValue}
                tabIndex={-1}
                onMouseEnter={() => setFocusedIndex(index)}
              >
                {option}
                {option === selectedValue && <CheckedIcon />}
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
      <input
        type='hidden'
        {...register(name, { required: inputProps?.required ?? false })}
      />
      {errorMessage && typeof errorMessage === 'string' && (
        <p className='b4m-body-reg mt-1 text-functional-red'>{errorMessage}</p>
      )}
    </div>
  );
};

export default Select;
