import Image from 'next/image';
import IntroBackground from '@/../public/images/welcome.jpg';
import IntroTableBackground from '@/../public/images/welcome-tablet.jpg';
import InvestorsSvg from '@/../public/icons/investors.svg';
import YearsAmountSvg from '@/../public/icons/years-amount.svg';
import SectionWrapper from './shared/wrappers/SectionWrapper';

const Welcome = () => {
  return (
    <div className='relative flex min-h-screen flex-col justify-end pb-6 pt-24 lg:min-h-[690px]'>
      <Image
        src={IntroBackground}
        alt='welcome'
        className='absolute top-0 z-[-1] hidden h-full w-full max-w-[90rem] left-1/2 -translate-x-1/2 rounded-b object-cover lg:flex'
        priority
        quality={100}
      />
      <Image
        src={IntroTableBackground}
        alt='welcome'
        className='absolute left-0 top-0 z-[-1] flex h-full w-full rounded-b object-cover lg:hidden'
        priority
        quality={100}
      />
      <SectionWrapper className='flex h-full flex-col justify-end !gap-20 md:!gap-72 lg:!gap-28'>
        <h1 className='md:h3-headline-med h5-headline max-w-[713px]'>
          <span className='md:h3-headline-sb h5-headline-sb'>Movchan’s Group</span> - We manage a
          family of global investment funds and separate accounts for affluent
          customers with conservative risk profiles.
        </h1>
        <div className='flex w-full flex-col justify-end gap-4 md:flex-row md:gap-6'>
          <WelcomeCart
            icon={<InvestorsSvg />}
            title='500+'
            subTitle='investors'
          />
          <WelcomeCart
            icon={<YearsAmountSvg />}
            title='9 years'
            subTitle=' on the market'
          />
        </div>
      </SectionWrapper>
    </div>
  );
};

interface WelcomeCartProps {
  icon: any;
  title: string;
  subTitle: string;
}
const WelcomeCart = (props: WelcomeCartProps) => {
  return (
    <div className='flex w-full flex-col gap-2 rounded-lg bg-white/60 p-4 backdrop-blur-sm lg:max-w-[300px]'>
      <div className='flex h-12 w-12 items-center justify-center rounded-lg bg-white'>
        {props.icon}
      </div>
      <div className='flex items-center gap-1'>
        <p className='h4-headline-med text-blue-600'>{props.title}</p>
        <p className='h6-headline-med text-blue-600'>{props.subTitle}</p>
      </div>
    </div>
  );
};
export default Welcome;
