import clsx from 'clsx';
import { FC } from 'react';

type AwardItemProps = {
  number: number;
  className?: string;
  imagePath?: string;
};

const AwardItem: FC<AwardItemProps> = ({ number, className, imagePath }) => {
  return (
    <div
      className={clsx(
        '-ml-4 h-[10.75rem] w-[10.75rem] shrink-0 rounded-full bg-[#e6ebf266] p-4 backdrop-blur-sm transition-transform duration-200 hover:z-[3] hover:scale-125 md:h-[13.75rem] md:w-[13.75rem] md:p-10',
        className
      )}
    >
      <img
        src={imagePath || `/images/awards/award-${number}.png`}
        alt={`Award ${number}`}
        className='mx-auto max-h-full object-contain'
      />
    </div>
  );
};

export default AwardItem;
