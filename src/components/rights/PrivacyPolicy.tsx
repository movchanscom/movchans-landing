import { PRIVACY_CHAPTERS_ITEMS } from '@/constants/privacy.constants';
import SectionWrapper from '@/components/shared/wrappers/SectionWrapper';
import ChapterDetails from './shared/ChapterDetails';
import RightsSidebar from './shared/RightsSidebar';
import { getScopedI18n } from '@/locales/server';

const PrivacyPolicy = async () => {
  const t = await getScopedI18n('privacy-policy');

  return (
    <SectionWrapper>
      <div className='flex flex-col gap-6 md:gap-10'>
        <div className='flex flex-col-reverse items-start justify-between gap-2 md:flex-row md:gap-10'>
          <h2 className='h6-headline-med md:h2-headline text-blue-700'>
            {t('title')}
          </h2>
          <p className='b3m-body-reg shrink-0 text-gray-700'>
            {t('updateInfo.title')}
            {': '}
            {t('updateInfo.value')}
          </p>
        </div>
        <div className='flex flex-col gap-6 lg:flex-row'>
          <div className='flex w-full flex-col gap-6'>
            {PRIVACY_CHAPTERS_ITEMS.map((chapter, index) => (
              <ChapterDetails
                key={chapter}
                type='privacy-policy'
                chapter={chapter}
                index={index}
              />
            ))}
          </div>
          <RightsSidebar type='privacy-policy' />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default PrivacyPolicy;
