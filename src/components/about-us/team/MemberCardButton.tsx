'use client';

import { FC } from 'react';
import ArrowLeftWhiteIcon from '/public/icons/arrow-left-white.svg';

type MemberCardButtonProps = {
  action: () => void;
};

const MemberCardButton: FC<MemberCardButtonProps> = ({ action }) => {
  return (
    <button
      onClick={action}
      className='rotate-180 rounded-[0.25rem] bg-blue-600
      p-2 hover:bg-blue-500  focus:bg-blue-400 active:bg-blue-400 transition-colors duration-200'
    >
      <ArrowLeftWhiteIcon />
    </button>
  );
};

export default MemberCardButton;
