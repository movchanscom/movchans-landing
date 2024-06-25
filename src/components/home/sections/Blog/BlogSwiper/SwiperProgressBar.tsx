import { FC } from 'react';

type SwiperProgressBarProps = {
  progress: number;
};

const SwiperProgressBar: FC<SwiperProgressBarProps> = ({ progress }) => {
  return (
    <div className='flex h-0.5 w-[13rem] rounded-sm bg-gray-200'>
      <div
        className=' shrink-0 rounded-sm bg-gold-400 transition-all duration-300'
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
};

export default SwiperProgressBar;
