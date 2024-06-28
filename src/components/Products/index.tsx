'use client';

import MovchansSwiper from '@/components/shared/MovchansSwiper';
import SectionWrapper from '@/components/shared/wrappers/SectionWrapper';
import useMediaQuery from '@/hooks/useMediaQuery';
import Image from 'next/image';
import { SwiperSlide } from 'swiper/react';
import ProductStats from './ProductStats';
import ProductsInfoItem from './ProductsInfoItem';
import { useState } from 'react';
import ContactFormModal from '../ContactFormModal';

const Products = () => {
  const lessThan1280px = useMediaQuery('(max-width: 1280px');
  const [showForm, setShowForm] = useState<boolean>(false);

  return (
    <>
      <SectionWrapper
        title='Our investment strategies'
        className='section-spacing'
        id='our-investment-strategies'
      >
        <div className='flex flex-col gap-4 md:gap-8'>
          <div className='flex items-center justify-between'>
            <div className='grid w-full grid-cols-1 gap-4 xl:grid-cols-2'>
              <div className='col-span-1 flex w-full flex-col items-center justify-between gap-2 rounded-lg border border-gray-200 p-4'>
                <ProductsInfoItem title='Investment fund' icon='graph-up' />
                <ProductsInfoItem
                  title='Client accounts with IBKR broker'
                  icon='broker'
                />
              </div>
              <div className='relative col-span-1 hidden h-auto w-full xl:block'>
                <Image
                  src={'/images/products-pb.jpg'}
                  sizes={'100%'}
                  alt='Products background'
                  fill
                  priority
                  className='rounded-lg object-cover'
                />
              </div>
            </div>
          </div>
          {lessThan1280px ? (
            <MovchansSwiper freeMode>
              <SwiperSlide className='!h-auto w-full md:!w-[30rem]'>
                <ProductStats
                  title='Argo'
                  titleIcons={['graph-up']}
                  year={2016}
                  strategy='Portfolio of bonds and conservative hedge funds'
                  benchmark='Bloomberg Global Aggregate Bond Index'
                  performance='Performance relative to benchmark since inception in % ann: +5.2%'
                  targetReturn='4 - 6%'
                  rewardsImageUrl='/images/argo-rewards.jpg'
                  onOpenForm={() => setShowForm(true)}
                />
              </SwiperSlide>
              <SwiperSlide className='!h-auto w-full md:!w-[30rem]'>
                <ProductStats
                  title='Laif'
                  titleIcons={['graph-up', 'broker']}
                  year={2021}
                  strategy='Conservative options strategy'
                  benchmark='Mid term deposit interest rate of a bank with an investment rating'
                  targetReturn='6 - 7%'
                  rewardsImageUrl='/images/laif-rewards.jpg'
                  onOpenForm={() => setShowForm(true)}
                />
              </SwiperSlide>
              <SwiperSlide className='!h-auto w-full md:!w-[30rem]'>
                <ProductStats
                  title='Geist'
                  titleIcons={['graph-up']}
                  year={2020}
                  yearNotes='Employs current strategy since January 2022'
                  strategy='Portfolio of equities and hedge funds investing in equities'
                  benchmark='S&P 500 index'
                  targetReturn='9 - 10%'
                  onOpenForm={() => setShowForm(true)}
                />
              </SwiperSlide>
              <SwiperSlide className='!h-auto w-full md:!w-[30rem]'>
                <ProductStats
                  title='ARQ'
                  titleIcons={['graph-up']}
                  year={2023}
                  strategy='Portfolio of reliable structured products'
                  benchmark='Markit iBoxx USD Liquid High Yield Index Total Return'
                  performance='Performance relative to benchmark since inception in % ann: +0.14%'
                  targetReturn='6.5 - 7.5%'
                  onOpenForm={() => setShowForm(true)}
                />
              </SwiperSlide>
            </MovchansSwiper>
          ) : (
            <div className='grid grid-cols-2 items-center gap-6'>
              <ProductStats
                title='Argo'
                titleIcons={['graph-up']}
                year={2016}
                strategy='Portfolio of bonds and conservative hedge funds'
                benchmark='Bloomberg Global Aggregate Bond Index'
                performance='Performance relative to benchmark since inception in % ann: +5.2%'
                targetReturn='4 - 6%'
                rewardsImageUrl='/images/argo-rewards.jpg'
                onOpenForm={() => setShowForm(true)}
              />
              <ProductStats
                title='Laif'
                titleIcons={['graph-up', 'broker']}
                year={2021}
                strategy='Conservative options strategy'
                benchmark='Mid term deposit interest rate of a bank with an investment rating'
                targetReturn='6 - 7%'
                rewardsImageUrl='/images/laif-rewards.jpg'
                onOpenForm={() => setShowForm(true)}
              />
              <ProductStats
                title='Geist'
                titleIcons={['graph-up']}
                year={2020}
                yearNotes='Employs current strategy since January 2022'
                strategy='Portfolio of equities and hedge funds investing in equities'
                benchmark='S&P 500 index'
                targetReturn='9 - 10%'
                onOpenForm={() => setShowForm(true)}
              />
              <ProductStats
                title='ARQ'
                titleIcons={['graph-up']}
                year={2023}
                strategy='Portfolio of reliable structured products'
                benchmark='Markit iBoxx USD Liquid High Yield Index Total Return'
                performance='Performance relative to benchmark since inception in % ann: +0.14%'
                targetReturn='6.5 - 7.5%'
                onOpenForm={() => setShowForm(true)}
              />
            </div>
          )}
        </div>
      </SectionWrapper>
      <ContactFormModal
        isOpen={showForm}
        handleClose={() => setShowForm(false)}
      />
    </>
  );
};

export default Products;
