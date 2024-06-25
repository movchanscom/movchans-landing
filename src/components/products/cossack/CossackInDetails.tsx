import SectionWrapper from '@/components/shared/wrappers/SectionWrapper';
import { getScopedI18n } from '@/locales/server';
import GraphUpIcon from '/public/icons/products/graph-up.svg';

const CossackInDetails = async () => {
  const t = await getScopedI18n(`products.cossack.cossackInDetails`);

  return (
    <SectionWrapper title={t('title')}>
      <div className='flex flex-col gap-6 md:gap-10'>
        <div className='flex items-end justify-between gap-4'>
          <p className='b3m-body-reg md:b1m-body-reg max-w-[57.75rem] border-b border-gray-200 pb-4 leading-[1.6875rem] text-blue-700'>
            {t('subtitle')}
          </p>
          <div className='shrink-0 rounded-lg bg-gray-100 p-2'>
            <GraphUpIcon />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CossackInDetails;
