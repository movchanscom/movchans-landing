'use client';

import { useScopedI18n } from '@/locales/client';
import { TeamMemberType } from '@/types/constants.type';
import { FC } from 'react';
import MemberCardButton from './MemberCardButton';
import useMediaQuery from '@/hooks/useMediaQuery';
import clsx from 'clsx';
import Image from 'next/image';

type MemberCardProps = {
  member: TeamMemberType;
  index?: number;
  handleActiveMember: (member: TeamMemberType) => void;
};

const MemberCard: FC<MemberCardProps> = ({
  member,
  index = 0,
  handleActiveMember,
}) => {
  const moreThan1280px = useMediaQuery('(min-width: 1280px)');
  const t = useScopedI18n('about-us.team.people');
  return (
    <div className='relative h-[24.75rem] w-full'>
      <div className='relative h-full w-full'>
        <Image
          fill
          priority
          sizes={'100%'}
          src={`/images/about-us/team/team-members/${member}.jpg`}
          alt={t(`${member}.name`)}
          className='h-full w-full overflow-hidden rounded-lg  object-cover object-center'
        />
      </div>
      <div
        style={{
          background:
            'linear-gradient(180deg, rgba(27, 48, 80, 0) 0%, #1B3050 50%), rgba(27, 48, 80, 0.80)',
        }}
        className='absolute bottom-0 left-0 right-0 flex h-[6.875rem] flex-col gap-2 rounded-lg px-4 py-3 text-basic-white backdrop-blur-[2px]'
      >
        <div className='flex items-center justify-between gap-1'>
          <h6 className='b1m-body-med'>{t(`${member}.name`)}</h6>
          <MemberCardButton action={() => handleActiveMember(member)} />
        </div>
        <p className='b4m-body-med'>{t(`${member}.position`)}</p>
      </div>
      <div
        className={clsx(
          'absolute z-[-1] hidden h-[60%] w-full rounded-lg bg-gold-400',
          {
            '-bottom-5 -left-5 !block':
              moreThan1280px && (index === 0 || index === 8),
          },
          {
            '-bottom-5 -right-5 !block': moreThan1280px && index === 7,
          }
        )}
      />
    </div>
  );
};

export default MemberCard;
