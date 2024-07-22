'use client';
import HandsTogetherSvg from '@/../public/icons/hands-together.svg';
import SectionWrapper from '../shared/wrappers/SectionWrapper';
import { TeamMembers } from '@/constants/team.constants';
import TeamMember from './TeamMember';
import MovchansSwiper from '../shared/MovchansSwiper';
import { SwiperSlide } from 'swiper/react';
import TeamMemberModal, { MemberInfoType } from './TeamMemberModal';
import { useState } from 'react';
import LogoIcon from '@/../public/images/logo-mocked.svg';
import Image from 'next/image';

const OurTeam = () => {
  const [activeMember, setActiveMember] = useState<MemberInfoType | null>(null);

  const handleActiveMember = (member: MemberInfoType) => {
    setActiveMember(member);
  };

  const onCloseMemberModal = () => {
    setActiveMember(null);
  };

  return (
    <SectionWrapper title='Team' className='section-spacing' id='team'>
      <div className='flex flex-col gap-6 md:gap-10'>
        <div className='flex items-end justify-between'>
          <h3 className='md:b1m-body-med b3m-body-reg max-w-[57.75rem] border-b border-gray-200 pb-4 text-blue-700'>
            Our teammates reside in the Cayman Islands, Cyprus, Montenegro,
            Romania, Spain, the USA, and Kazakhstan. We believe that the variety
            of perspectives and experiences helps us achieve outstanding
            results.
          </h3>
          <div className='rounded-lg bg-gray-100 p-2'>
            <HandsTogetherSvg />
          </div>
        </div>
        <div className='lg:hidden'>
          <MovchansSwiper
            grid
            swiperProps={{
              breakpoints: {
                0: {
                  grid: {
                    rows: 1,
                    fill: 'row',
                  },
                },
                768: {
                  grid: {
                    rows: 2,
                    fill: 'row',
                  },
                },
              },
              wrapperClass: '!flex-row',
            }}
          >
            {TeamMembers.map((member, idx) => (
              <SwiperSlide key={idx} className='!w-[292px]'>
                <TeamMember
                  {...member}
                  onClick={
                    member.bullets && member.bullets.length
                      ? () => handleActiveMember(member)
                      : undefined
                  }
                />
              </SwiperSlide>
            ))}
          </MovchansSwiper>
        </div>
        <div className='hidden grid-cols-4 gap-6 lg:grid'>
          {TeamMembers.map((member, idx) => (
            <TeamMember
              key={idx}
              {...member}
              onClick={
                member.bullets && member.bullets.length
                  ? () => handleActiveMember(member)
                  : undefined
              }
            />
          ))}
        </div>
      </div>
      <TeamMemberModal
        isOpen={!!activeMember}
        onClose={onCloseMemberModal}
        data={activeMember}
      />
    </SectionWrapper>
  );
};

export default OurTeam;
