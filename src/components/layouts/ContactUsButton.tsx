'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import EnvelopeIcon from '/public/icons/envelope-gold.svg';
import { motion, useAnimation, useInView } from 'framer-motion';
import { FC, MouseEventHandler, RefObject, useEffect, useState } from 'react';
import Link from 'next/link';

type ContactUsButtonProps = {
  elementRef: RefObject<HTMLElement>;
};

const ContactUsButton: FC<ContactUsButtonProps> = ({ elementRef }) => {
  const [isVisible, setIsVisible] = useState(false);
  const isInView = useInView(elementRef);
  const controls = useAnimation();

  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleButtonClick = () => {
    const queryString = new URLSearchParams(params);

    queryString.set('modal', 'contact');
    router.replace(`${pathname}?${queryString.toString()}`, {
      scroll: false,
    });
  };

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [isInView]);

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, scale: 1 });
    } else {
      controls.start({ opacity: 0, scale: 0 });
    }
  }, [isVisible, controls]);

  return (
    <motion.button
      onClick={(_e) => handleButtonClick()}
      initial={{ opacity: 0, scale: 0 }}
      animate={controls}
      transition={{ duration: 0.2 }}
      className='rounded-lg border border-gold-500 bg-basic-white p-2'
    >
      <EnvelopeIcon />
    </motion.button>
  );
};

export default ContactUsButton;
