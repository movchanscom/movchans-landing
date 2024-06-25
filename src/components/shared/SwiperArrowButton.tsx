import { FC } from 'react';
import ArrowLeft from '/public/icons/swiper/arrow-left-gold.svg';
import ArrowRight from '/public/icons/swiper/arrow-right-gold.svg';

type SwiperArrowButtonProps = {
  action: () => void;
  direction: 'left' | 'right';
};

const SwiperArrowButton: FC<SwiperArrowButtonProps> = ({
  action,
  direction,
}) => {
  return (
    <button onClick={action} className='border border-gold-600 p-2 rounded-lg hover:bg-gold-100 transition-all duration-200'>
      {direction === 'left' ? <ArrowLeft /> : <ArrowRight />}
    </button>
  );
};

export default SwiperArrowButton;
