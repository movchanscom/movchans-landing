'use client';

import { FC, ReactNode, useRef } from 'react';
import { createPortal } from 'react-dom';
import useOnClickOutside from '@/hooks/useOnClickOutside';
import CloseIcon from '/public/icons/close.svg';
import useLockBodyScroll from '@/hooks/useLockBodyScroll';
import { AnimatePresence, motion } from 'framer-motion';
import clsx from 'clsx';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  variant?: 'center' | 'right';
  showCloseButton?: boolean;
  className?: string;
  childWrapperClassName?: string;
  closeBtnClassName?: string;
};

const Modal: FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  variant = 'center',
  showCloseButton = true,
  className = '',
  childWrapperClassName = '',
  closeBtnClassName = '',
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useLockBodyScroll(isOpen);

  useOnClickOutside(modalRef, onClose);

  const modalContent = (
    <AnimatePresence>
      {isOpen ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className='fixed inset-0 z-50 bg-basic-black bg-opacity-50'
          />
          <motion.div
            initial={variant === 'center' ? { opacity: 0 } : { right: '-100%' }}
            exit={variant === 'center' ? { opacity: 0 } : { right: '-100%' }}
            animate={variant === 'center' ? { opacity: 1 } : { right: 0 }}
            transition={{ duration: 0.2 }}
            ref={modalRef}
            className={clsx(
              'no-scrollbar fixed z-[100] transform overflow-x-hidden overflow-y-scroll bg-basic-white p-4 md:p-10',
              {
                'inset-x-4 top-1/2 max-h-[90vh] -translate-y-1/2 rounded-lg md:left-1/2 md:w-full md:max-w-[41rem] md:-translate-x-1/2':
                  variant === 'center',
                'bottom-0  top-0 w-full max-w-[21.5rem] md:max-w-[33.125rem]':
                  variant === 'right',
              },
              className
            )}
            onClick={(e) => e.stopPropagation()}
          >
            {showCloseButton && (
              <button
                className={clsx(
                  'z-20 p-2',
                  {
                    'absolute right-1 top-1 !block': variant === 'center',
                    'absolute right-4 top-4 !block md:right-10 md:top-10':
                      variant === 'right',
                  },
                  closeBtnClassName
                )}
                onClick={onClose}
              >
                <CloseIcon />
              </button>
            )}
            <div
              className={clsx(
                'flex flex-col',
                {
                  'gap-6': variant === 'center',
                  'gap-6 md:gap-10': variant === 'right',
                },
                childWrapperClassName
              )}
            >
              {title && <h6 className='h5-headline'>{title}</h6>}
              {variant === 'right' && (
                <div className='py-[0.38rem] md:my-0'>
                  <img
                    src={'/icons/logo.svg'}
                    alt='Logo'
                    className=' h-7 w-fit object-contain md:h-10'
                  />
                </div>
              )}
              {children}
            </div>
          </motion.div>
        </>
      ) : null}
    </AnimatePresence>
  );

  return typeof document !== 'undefined'
    ? createPortal(
        modalContent,
        document.getElementById('modal-root') as HTMLElement
      )
    : null;
};

export default Modal;
