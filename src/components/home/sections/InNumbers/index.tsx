import { FC } from 'react';
import SectionWrapper from '@/components/shared/wrappers/SectionWrapper';
import InNumbersCard from './InNumbersCard';
import Image from 'next/image';
import IntroBackground from '/public/images/welcome.jpg';
import { NumbersToTen } from '@/types/constants.type';

type InNumbersProps = {
  title: string;
};

const InNumbers: FC<InNumbersProps> = (props) => {
  return (
    <SectionWrapper {...props} id='In Numbers'>
      <div className='no-scrollbar -mr-4 flex gap-6 overflow-y-hidden overflow-x-scroll md:-mr-10 lg:mr-0 lg:grid lg:grid-cols-3 lg:items-center'>
        {Array.from(Array(10).keys()).map((number) => (
          <InNumbersCard key={number} index={(number + 1) as NumbersToTen} />
        ))}
        <Image
          src={IntroBackground}
          alt='welcome'
          className='col-span-2 hidden h-[10.125rem] w-full rounded-lg object-cover lg:block'
          priority
        />
      </div>
      <Image
        src={IntroBackground}
        alt='welcome'
        className='col-span-2 h-[10.125rem] w-full rounded-lg object-cover lg:hidden'
        priority
      />
    </SectionWrapper>
  );
};

export default InNumbers;
