import SectionWrapper from '@/components/shared/wrappers/SectionWrapper';
import { getScopedI18n } from '@/locales/server';
import { ProductNameType } from '@/types/constants.type';
import { FC } from 'react';

type SpecificationsProps = {
  product: ProductNameType;
};

const Specifications: FC<SpecificationsProps> = async ({ product }) => {
  const t = await getScopedI18n(`products.${product}.specifiations`);
  return (
    <SectionWrapper id='Specifications'>
      <div className='grid grid-cols-1 gap-6 lg:grid-cols-2'>
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className='flex flex-col gap-2 rounded-lg bg-gray-100 p-4 md:gap-4 md:p-6'
          >
            <h6 className='b2m-body-reg md:b1m-body-reg border-b border-gray-200 pb-2'>
              {t(`${index}.title` as any)}
            </h6>
            <p className='b3m-body-med md:b2m-body-med'>
              {t(`${index}.value` as any)}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Specifications;
