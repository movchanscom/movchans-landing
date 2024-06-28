'use client';
import SectionWrapper from '@/components/shared/wrappers/SectionWrapper';
import Image from 'next/image';
import FounderImg from '@/../public/images/video-preview.jpg';
import { useState } from 'react';
import TeamMemberModal from './OurTeam/TeamMemberModal';
import { FOUNDER_INFO } from '@/constants/team.constants';

const Founder = () => {
  const [openDetailsModal, setOpenDetailsModal] = useState<boolean>(false);

  return (
    <SectionWrapper id='Founder Opinion' className='section-spacing'>
      <div
        className='relative flex cursor-pointer flex-col pt-4 md:pb-10 md:pt-10'
        onClick={() => setOpenDetailsModal(true)}
      >
        <div className='flex w-full flex-col gap-4 rounded-r-lg bg-basic-white py-4 !pl-0 lg:max-w-[60%] lg:gap-6 lg:p-6 xl:p-10'>
          <h3 className='h4-headline-med text-blue-700'>
            Andrey Movchan, Founder
          </h3>
          <p className='b3m-body-reg md:b1m-body-reg flex flex-col gap-2 text-justify text-blue-700'>
          &quot;Movchan Advisers was established in 2015 by a group of seasoned
            investment professionals with diverse experience in the successful
            management of assets in both developed and emerging markets, in
            times of crises and favourable market conditions, with a single goal
            - to provide affluent investors with best solutions for conservative
            placements of their capital. Since that time the company has grown
            to employ just about 30 professional managers, establish, seed, and
            grow 4 investment funds, attract over 450 investors into the funds,
            and successfully navigate two periods of rates rising, the global
            pandemics, and its consequences, various local crises and general
            instability of the recent years. The company’s CAGR exceeds 25%; its
            products beat relevant benchmarks and receive high recognition from
            rating organisations. We are happy to serve our investors and are
            confident that we will continue providing them with best-of-class
            investment solutions and bespoke services.&quot;
          </p>
        </div>
        <div className='relative bottom-0 right-0 w-full lg:absolute lg:top-0 lg:z-[-1] lg:h-full lg:w-[50%] '>
          <Image
            {...FounderImg}
            alt='Founder photo'
            priority
            quality={100}
            className='z-1 h-full rounded-lg object-cover object-right lg:rounded-l-lg lg:rounded-r-none lg:object-[80%center]'
          />
        </div>
      </div>
      <TeamMemberModal
        isOpen={openDetailsModal}
        onClose={() => setOpenDetailsModal(false)}
        data={FOUNDER_INFO}
      />
    </SectionWrapper>
  );
};

export default Founder;
