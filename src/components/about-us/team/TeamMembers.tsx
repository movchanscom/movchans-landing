'use client';

import SectionWrapper from '@/components/shared/wrappers/SectionWrapper';
import { ABOUT_TEAM_ORDER } from '@/constants/about-us.constants';
import { useState } from 'react';
import MemberCard from './MemberCard';
import { TeamMemberType } from '@/types/constants.type';
import TeamMemberModal from './TeamMemberModal';
import useMediaQuery from '@/hooks/useMediaQuery';
import MovchansSwiper from '@/components/shared/MovchansSwiper';
import { SwiperSlide } from 'swiper/react';

const TeamMembers = () => {
  const [activeMember, setActiveMember] = useState<TeamMemberType | null>(null);
  const moreThan1024px = useMediaQuery('(min-width: 1024px');
  const moreThan768px = useMediaQuery('(min-width: 768px');

  const handleActiveMember = (member: TeamMemberType) => {
    setActiveMember(member);
  };

  const handleCloseTeamModal = () => {
    setActiveMember(null);
  };
  return (
    <SectionWrapper id="Team members">
      {moreThan1024px ? (
        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {ABOUT_TEAM_ORDER.map((memberName, index) => (
            <MemberCard
              key={memberName}
              member={memberName}
              index={index}
              handleActiveMember={handleActiveMember}
            />
          ))}
        </div>
      ) : (
        <MovchansSwiper freeMode>
          {Array.from(Array(moreThan768px ? 3 : 12).keys()).map(
            (slideIndex) => (
              <SwiperSlide
                key={slideIndex}
                className='!w-[20rem] md:!w-[41.5rem]'
              >
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2 md:grid-rows-2'>
                  {moreThan768px ? (
                    <>
                      {Array.from(Array(4).keys()).map((cardIndex) => (
                        <MemberCard
                          member={ABOUT_TEAM_ORDER[slideIndex * 4 + cardIndex]}
                          key={`${slideIndex}-${cardIndex}`}
                          handleActiveMember={handleActiveMember}
                        />
                      ))}
                    </>
                  ) : (
                    <MemberCard
                      member={ABOUT_TEAM_ORDER[slideIndex]}
                      key={slideIndex}
                      handleActiveMember={handleActiveMember}
                    />
                  )}
                </div>
              </SwiperSlide>
            )
          )}
        </MovchansSwiper>
      )}
      <TeamMemberModal
        isOpen={!!activeMember}
        onClose={handleCloseTeamModal}
        activeMember={activeMember as TeamMemberType}
      />
    </SectionWrapper>
  );
};

export default TeamMembers;
