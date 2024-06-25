import SectionWrapper from '@/components/shared/wrappers/SectionWrapper';
import ChapterDetails from './shared/ChapterDetails';
import RightsSidebar from './shared/RightsSidebar';
import { getScopedI18n } from '@/locales/server';
import { TERMS_CHAPTERS_ITEMS } from '@/constants/terms.constants';

const TermsOfUse = async () => {
  const t = await getScopedI18n('terms-of-use');

  return (
    <SectionWrapper>
      <div className='flex flex-col gap-6 md:gap-10'>
        <h2 className='h6-headline-med md:h2-headline text-blue-700'>
          {t('title')}
        </h2>
        <div className='flex flex-col gap-6 lg:flex-row'>
          <div className='flex w-full flex-col gap-6'>
            {TERMS_CHAPTERS_ITEMS.map((chapter, index) => (
              <ChapterDetails
                key={chapter}
                type='terms-of-use'
                chapter={chapter}
                index={index}
              />
            ))}
          </div>
          <RightsSidebar type='terms-of-use' />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TermsOfUse;
