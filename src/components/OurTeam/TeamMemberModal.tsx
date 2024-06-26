'use client';

import Modal from '@/components/shared/ui/Modal';
import useMediaQuery from '@/hooks/useMediaQuery';
import Image from 'next/image';
import { FC } from 'react';
import WhiteCloseIcon from '/public/icons/close-white.svg';
import CloseIcon from '/public/icons/close.svg';
import EnvelopeIcon from '/public/icons/envelope-white.svg';

export type MemberInfoType = {
  name: string;
  imageUrl: string;
  position: string;
  bullets: Array<string>;
};

type TeamMemberModalProps = {
  data: MemberInfoType | null;
  isOpen: boolean;
  onClose: () => void;
};

const TeamMemberModal: FC<TeamMemberModalProps> = ({
  data,
  isOpen,
  onClose,
}) => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Modal
      showCloseButton={false}
      isOpen={isOpen}
      onClose={onClose}
      className='!p-0 shadow-lg md:h-[27rem] md:w-[94vw] md:!max-w-[51.1rem]'
      childWrapperClassName='h-full mb-0 md:!flex-row !gap-0'
    >
      <button
        className='absolute right-1 top-3 md:top-1 z-20 !block p-2'
        onClick={onClose}
      >
        <CloseIcon />
      </button>
      <div className='flex h-full w-full shrink-0 flex-col gap-4 bg-blue-100 p-4 text-basic-white md:w-fit md:p-6'>
        {isMobile && data && <NameAndPosition activeMember={data} />}
        {data && (
          <Image
            src={data.imageUrl}
            alt='Name'
            className='mx-auto h-auto w-full max-w-[292px] rounded object-contain md:mx-0'
            priority
            width={600}
            height={600}
            quality={100}
          />
        )}
        {!isMobile && data && <NameAndPosition activeMember={data} />}
      </div>
      <div className='flex w-full flex-col gap-6 p-4 pr-1 md:p-6 md:pr-2 md:pt-[4.25rem] '>
        {data && (
          <ul className='gold-scrollbar b3m-body-reg flex grow flex-col gap-2 overflow-y-auto pr-2 text-blue-700 md:pr-3'>
            {data.bullets.map((bullet, index) => (
              <li key={index} className='grid grid-cols-[auto_1fr] gap-2'>
                <div className='w-0.5 h-0.5 rounded-full bg-blue-700 mt-2.5'></div>
                <p>{bullet}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Modal>
  );
};

const NameAndPosition = ({
  activeMember,
}: {
  activeMember: MemberInfoType;
}) => {
  return (
    <div className='mb-4 flex flex-col gap-2 md:mb-0'>
      <h4 className='h5-headline-caps text-basic-black'>{activeMember.name}</h4>
      <p className='b3m-body-med md:b2m-body-med text-basic-black'>
        {activeMember.position}
      </p>
    </div>
  );
};

export default TeamMemberModal;
