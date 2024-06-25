'use client';

import { FC, useState } from 'react';
import Modal from '@/components/shared/ui/Modal';
import { useScopedI18n } from '@/locales/client';
import { TeamMemberType } from '@/types/constants.type';
import Image from 'next/image';
import EnvelopeIcon from '/public/icons/envelope-white.svg';
import useMediaQuery from '@/hooks/useMediaQuery';
import CloseIcon from '/public/icons/close.svg';
import WhiteCloseIcon from '/public/icons/close-white.svg';

type TeamMemberModalProps = {
  activeMember: TeamMemberType;
  isOpen: boolean;
  onClose: () => void;
};

const TeamMemberModal: FC<TeamMemberModalProps> = ({
  activeMember,
  isOpen,
  onClose,
}) => {
  const t = useScopedI18n(`about-us.team.people.${activeMember}`);
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Modal
      showCloseButton={false}
      isOpen={isOpen}
      onClose={onClose}
      className='!p-0 shadow-lg md:h-[29.5625rem] md:w-[94vw] md:!max-w-[51.1rem]'
      childWrapperClassName='h-full mb-0 md:!flex-row !gap-0'
    >
      <button
        className='absolute right-1 top-1 z-20 !block p-2'
        onClick={onClose}
      >
        {isMobile ? <WhiteCloseIcon /> : <CloseIcon />}
      </button>
      <div className='flex h-full w-full shrink-0 flex-col justify-between bg-blue-600 p-4 text-basic-white md:max-w-[22.3125rem] md:p-6 xl:p-10'>
        {isMobile && <NameAndPosition activeMember={activeMember} />}
        <div className='relative md:h-full md:w-full overflow-hidden rounded-lg h-[20rem] w-[18rem] mx-auto'>
          <Image
            fill
            src={`/images/about-us/team/team-members/${activeMember}.jpg`}
            alt={t('name')}
            className='object-cover'
            sizes='100%'
            priority
          />
        </div>
        <div className='b3m-body-med mt-4 flex w-full items-center gap-2'>
          <EnvelopeIcon />
          <span>{t('email')}</span>
        </div>
      </div>
      <div className='flex w-full flex-col gap-6 p-4 md:p-6 xl:py-10 xl:pr-10'>
        {!isMobile && <NameAndPosition activeMember={activeMember} />}
        <ul className='no-scrollbar b3m-body-reg flex grow flex-col gap-2 overflow-scroll text-blue-700'>
          {Array.from({ length: Number(t('bulletsCount')) }).map((_, index) => (
            <li key={index} className='flex gap-2'>
              &#x1B7C;
              <p>{t(`bullets.${index}` as any)}</p>
            </li>
          ))}
        </ul>
      </div>
    </Modal>
  );
};

const NameAndPosition = ({
  activeMember,
}: {
  activeMember: TeamMemberType;
}) => {
  const t = useScopedI18n(`about-us.team.people.${activeMember}`);
  return (
    <div className='mb-4 flex flex-col gap-2 md:mb-0'>
      <h4 className='b1m-body-sb md:h4-headline-sb-caps'>{t('name')}</h4>
      <p className='b3m-body-med md:b2m-body-med'>{t('position')}</p>
    </div>
  );
};

export default TeamMemberModal;
