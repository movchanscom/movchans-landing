'use client';

import { FC, useEffect, useState, MutableRefObject } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import ArrowButton from '../shared/ui/ArrowButton';

type ScrollToTopButtonProps = {
  elementRef: MutableRefObject<HTMLElement | null>;
};

const ScrollToTopButton: FC<ScrollToTopButtonProps> = ({ elementRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  const controls = useAnimation();
  const isInView = useInView(elementRef);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
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
    <motion.div
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0 }}
      animate={controls}
      transition={{ duration: 0.2 }}
    >
      <ArrowButton direction='up' />
    </motion.div>
  );
};

export default ScrollToTopButton;
