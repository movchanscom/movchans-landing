import SectionWrapper from '@/components/shared/wrappers/SectionWrapper';
import { getScopedI18n } from '@/locales/server';
import { ProductNameType } from '@/types/constants.type';
import { FC } from 'react';
import Image from 'next/image';

type ChiefAdviserProps = {
  name:
    | 'eugeniu-kyreu'
    | 'elena-chirkova'
    | 'michael-portnoy'
    | 'artem-karlov'
    | 'gleb-shestakov';
  product: ProductNameType;
};

const ChiefAdviser: FC<ChiefAdviserProps> = async ({ name, product }) => {
  const teamT = await getScopedI18n(`about-us.team.people.${name}`);
  const productT = await getScopedI18n(`products.${product}.chiefAdviser`);

  const bulletsCount = Number(teamT('bulletsCount'));
  const midpoint = Math.ceil(bulletsCount / 2);

  const bullets = Array.from({ length: bulletsCount }).map((_, index) =>
    teamT(`bullets.${index}` as any)
  );

  const firstHalf = bullets.slice(0, midpoint);
  const secondHalf = bullets.slice(midpoint);

  return (
    <SectionWrapper id='Chief Advisor' className='relative'>
      <div className='flex flex-col items-center gap-6 md:flex-row md:items-start'>
        <div className='relative flex w-full flex-col items-center justify-center py-10 md:w-fit xl:pl-[4.75rem]'>
          <div className='relative h-[20.8125rem] w-[18.5rem] md:h-[17.0625rem]  md:w-[15.125rem] xl:h-[22.625rem] xl:w-[20.0625rem]'>
            <Image
              fill
              priority
              src={`/images/about-us/team/team-members/${name}-product.jpg`}
              alt={teamT('name')}
              className='rounded-lg object-cover'
            />
          </div>
          <h3 className='b1m-body-med mt-4 block w-[18.5rem] text-blue-600 md:hidden'>
            {productT('title')}
            {' - '}
            <span className='b1m-body-sb'>{teamT('name')}</span>
          </h3>
          <div className='absolute bottom-0 left-0 top-0 z-[-1] -ml-4 w-[calc(50%+1rem)] rounded-r-lg bg-blue-200 md:-ml-[6.25rem] md:w-[15rem] xl:w-[20rem]'></div>
        </div>
        <div className='flex flex-col gap-6 text-blue-600'>
          <h3 className='md:h4-headline-med xl:h3-headline-med hidden max-w-[31.5rem] md:block'>
            {productT('title')}
            {' - '}
            <span className='md:h4-headline-sb xl:h3-headline-sb'>
              {teamT('name')}
            </span>
          </h3>
          <div className='b3m-body-reg flex w-full flex-col gap-4 text-blue-700 xl:flex-row'>
            <ul className='flex w-full flex-col gap-4 xl:w-1/2'>
              {firstHalf.map((bullet, index) => (
                <li key={index} className='flex !h-fit w-full gap-2'>
                  &#x1B7C;
                  <p>{bullet}</p>
                </li>
              ))}
            </ul>
            <ul className='flex w-full flex-col gap-4 xl:w-1/2'>
              {secondHalf.map((bullet, index) => (
                <li key={index} className='flex !h-fit w-full gap-2'>
                  &#x1B7C;
                  <p>{bullet}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ChiefAdviser;
