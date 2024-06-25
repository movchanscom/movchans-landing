import { FC, ReactNode } from 'react';
import MainButton from '@/components/shared/ui/MainButton';
import clsx from 'clsx';

type SectionWrapperProps = {
  children: ReactNode;
  title?: string;
  link?: string;
  buttonText?: string;
  className?: string;
  id?: string;
};

const SectionWrapper: FC<SectionWrapperProps> = ({
  children,
  title,
  link,
  buttonText = '',
  className = '',
  id,
}) => {
  return (
    <section
      id={id || title}
      className={clsx(
        'mx-auto flex h-full w-full max-w-[77.5rem] flex-col gap-5 px-4 md:gap-7 md:px-10 lg:gap-10 xl:px-0',
        className
      )}
    >
      {(title || link) && (
        <div className='flex w-full items-center justify-between'>
          {title && (
            <div className='w-fit rounded-[1.5rem] border border-gray-300 px-4 py-2 md:py-3'>
              <h2 className='b1m-body-reg md:h4-headline-reg md:!text-[1.5rem] text-blue-600'>
                {title}
              </h2>
            </div>
          )}
          {link && (
            <MainButton
              label={buttonText}
              size='m'
              className='!w-fit'
              route={link}
            />
          )}
        </div>
      )}
      {children}
    </section>
  );
};

export default SectionWrapper;
