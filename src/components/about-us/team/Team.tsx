import SectionWrapper from '../../shared/wrappers/SectionWrapper';
import Description from '../shared/Description';
import TeamMembers from './TeamMembers';
import TeamPhotos from './TeamPhotos';
import ConnectUs from '@/components/shared/ConnectUs';
import { getScopedI18n } from '@/locales/server';

const Team = async () => {
  const t = await getScopedI18n('about-us.team');

  return (
    <div className='mb:mb-[7.5rem] mb-[6.25rem] flex flex-col gap-[6.25rem] md:gap-[7.5rem]  lg:gap-[8.75rem]'>
      <div className='flex flex-col gap-10'>
        <SectionWrapper className='mb-10' id={t('title')}>
          <div className='flex flex-col gap-10 md:gap-20'>
            <div className='relative flex h-auto w-full flex-col-reverse items-center md:flex-row'>
              <h1 className='h4-headline-med md:h1-headline z-2 -mx-4 -mt-4 w-full shrink-0 overflow-visible rounded-t-lg bg-[rgba(255,255,255,0.50)] py-10 pr-10 text-blue-600 backdrop-blur-sm md:mx-0 md:mt-0 md:w-[25rem] md:rounded-r-lg md:rounded-tl-none'>
                {t('title')}
              </h1>
              <div className='img-max-screen flex  h-[10rem] w-screen overflow-hidden object-cover object-center  md:-ml-16 md:-mr-10 md:h-[13.9375rem] md:w-[full] md:rounded-l-lg xl:-mr-[6.25rem]'>
                <img
                  alt='Team background 1'
                  src={'/images/about-us/team-bg-1.jpg'}
                  className='w-full object-cover'
                />
                <img
                  alt='Team background 2'
                  src={'/images/about-us/team-bg-2.jpg'}
                  className='hidden w-full object-cover xl:block'
                />
              </div>
            </div>
          </div>
        </SectionWrapper>
        <Description type='team' />
        <TeamMembers />
      </div>
      <TeamPhotos />
      <ConnectUs />
    </div>
  );
};

export default Team;
