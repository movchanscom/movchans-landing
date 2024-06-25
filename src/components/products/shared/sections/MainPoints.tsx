import SectionWrapper from '@/components/shared/wrappers/SectionWrapper';
import { PRODUCT_MAIN_POINTS_AND_ICONS } from '@/constants/products.constants';
import { getScopedI18n } from '@/locales/server';
import { ProductNameType, ProductsMainPoints } from '@/types/constants.type';
import { typedEntries } from '@/utils';
import Image from 'next/image';
import { FC } from 'react';

type MainPointsProps = {
  product: ProductNameType;
};

const MainPoints: FC<MainPointsProps> = async ({ product }) => {
  const t = await getScopedI18n(`products.${product}.mainTheses`);

  return (
    <div className='bg-[url("/images/products/main-points-bg.jpg")] bg-cover bg-center bg-no-repeat'>
      <SectionWrapper id='Main Points' className='py-4 md:py-10'>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3'>
          {typedEntries(PRODUCT_MAIN_POINTS_AND_ICONS).map(([point, icon]) => (
            <div
              key={point}
              className='flex flex-col gap-4 rounded-lg bg-basic-white bg-opacity-90 p-4 backdrop-blur-[6px] xl:p-6'
            >
              <span className='w-fit rounded-lg bg-gray-100 p-2'>
                <Image
                  width={24}
                  height={24}
                  src={`/icons/products/${icon}.svg`}
                  alt={`${point} icon`}
                />
              </span>
              <div className='flex flex-col gap-2'>
                <p className='b1m-body-med md:h6-headline-med'>
                  {t(`${point}.title`)}
                </p>
                <p className='b4m-body-reg md:b3m-body-reg'>
                  {t(`${point}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default MainPoints;
