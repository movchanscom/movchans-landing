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
  data: Array<{
    type: string;
    content: Array<string>;
  }>;
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
      className='!p-0 shadow-lg md:h-[32rem] md:w-[94vw] md:!max-w-[51.1rem]'
      childWrapperClassName='h-full mb-0 md:!flex-row !gap-0'
    >
      <button
        className='absolute right-1 top-3 z-20 !block p-2 md:top-1'
        onClick={onClose}
      >
        <CloseIcon />
      </button>
      <div className='flex h-full w-full shrink-0 flex-col gap-4 bg-blue-100 p-4 text-basic-white md:w-fit md:max-w-[300px] md:p-6'>
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
        <div className='gold-scrollbar flex grow flex-col overflow-y-auto pr-1'>
          {data &&
            data.data.map((obj, idx) => {
              if (obj.type === 'ul') {
                return (
                  <ul
                    key={idx}
                    className='b3m-body-reg flex flex-col overflow-hidden gap-2 pr-2 text-blue-700 md:pr-3'
                  >
                    {obj.content.map((item, index) => (
                      <li
                        key={index}
                        className='grid grid-cols-[auto_1fr] gap-2'
                      >
                        <div className='mt-2.5 h-0.5 w-0.5 rounded-full bg-blue-700'></div>
                        <p>{item}</p>
                      </li>
                    ))}
                  </ul>
                );
              }
              if (obj.type === 'h2') {
                return <h2 className='mt-3 text-blue-700'>{obj.content[0]}</h2>;
              }
              return (
                <p className='b3m-body-reg mt-3 text-blue-700'>
                  {obj.content[0]}
                </p>
              );
            })}
        </div>
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
