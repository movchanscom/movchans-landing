import SectionWrapper from '@/components/shared/wrappers/SectionWrapper';
import { getScopedI18n } from '@/locales/server';
import { ProductNameType } from '@/types/constants.type';
import { FC } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

type ProsAndConsProps = {
  product: ProductNameType;
  type: 'pros' | 'cons';
};

const ProsAndCons: FC<ProsAndConsProps> = async ({ product, type }) => {
  const t = await getScopedI18n(`products.${product}.${type}`);

  return (
    <SectionWrapper title={t('title')}>
      <div className='grid grid-cols-4 gap-6'>
        <div className='col-span-4 flex flex-col gap-4 md:col-span-3 lg:col-span-2'>
          {Array.from({ length: Number(t('itemsCount')) }).map((_, index) => {
            return (
              <div
                key={index}
                className='flex items-center gap-3 rounded-lg bg-basic-white p-4 md:gap-4'
              >
                <span className='h-2 w-2 rounded-full bg-blue-600 shrink-0' />
                <p className='b3m-body-med md:b1m-body-med text-blue-700'>
                  {t(`items.${index}` as any)}
                </p>
              </div>
            );
          })}
        </div>
        <div
          className={clsx(
            'relative col-span-4 flex h-[18.125rem] w-full items-center justify-center md:col-span-1 md:h-auto lg:col-span-2',
            {
              'hidden md:flex': type === 'cons',
            }
          )}
        >
          {type === 'pros' ? (
            <Image
              src={`/images/products/pros.jpg`}
              alt={t('title')}
              fill
              priority
              className='rounded-lg object-cover'
            />
          ) : (
            <div className='relative h-[2.75rem] w-full md:h-8 xl:h-[2.75rem]'>
              <Image
                src={`/icons/products/logo-gray.svg`}
                alt={t('title')}
                fill
                priority
                className='h-auto'
              />
            </div>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ProsAndCons;
