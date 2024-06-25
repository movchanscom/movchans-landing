import { useScopedI18n } from '@/locales/client';
import { NumbersToThree } from '@/types/constants.type';
import { FC } from 'react';
import { SwiperSlide } from 'swiper/react';
import ReadMoreButton from '@/components/home/sections/Blog/ReadMoreButton';

type BlogSlideProps = {
  number: NumbersToThree;
  image: string;
};

const BlogSlide: FC<BlogSlideProps> = ({ image, number }) => {
  const t = useScopedI18n('home.blog');

  return (
    <SwiperSlide className='relative'>
      <img
        src={`/images/${image}.jpg`}
        alt='blog-wide'
        className='mb-[24rem] h-[12rem] w-full object-cover object-top md:mb-0 md:h-[24.25rem] md:w-fit md:object-contain lg:h-[22.25rem]'
      />
      <div className='absolute bottom-0 right-0 top-[12rem] flex w-full flex-col justify-between rounded-t-lg rounded-br-lg bg-gray-100 p-6 md:top-8 md:w-[34.75rem] lg:w-[44.5rem]'>
        <div className='flex flex-col gap-6'>
          <h3 className='h5-headline-caps md:h4-headline-sb-caps'>
            {t(`items.item${number}.title`)}
          </h3>
          <p className='b2m-body-reg text-blue-700'>
            {t(`items.item${number}.content`)}
          </p>
        </div>
        <div className='flex justify-end'>
          <ReadMoreButton label={t('details')}/>
        </div>
      </div>
    </SwiperSlide>
  );
};

BlogSlide.displayName = 'SwiperSlide';

export default BlogSlide;
