import clsx from 'clsx';
import ArrowRightLongIcon from '/public/icons/arrow-right-long.svg';

import Image from 'next/image';
import { FC } from 'react';

type ProductStatsProps = {
  title: string;
  titleIcons: string[];
  year: number;
  yearNotes?: string;
  strategy?: string;
  benchmark?: string;
  performance?: string;
  targetReturn: string;
  rewardsImageUrl?: string;
};

const ProductStats: FC<ProductStatsProps> = (props) => {
  return (
    <div className='flex h-full flex-col justify-between gap-2 rounded-lg bg-gray-100 p-4 transition-all duration-200 md:gap-4'>
      <div className='flex flex-col gap-2 md:gap-4'>
        <div className='flex items-center justify-between'>
          <p className='h4-headline-reg uppercase'>{props.title}</p>
          <div className='flex items-center gap-2'>
            {props.titleIcons.map((src, index) => (
              <div key={index} className='shrink-0 rounded-lg bg-white p-2'>
                <Image
                  src={`/icons/products/${src}.svg`}
                  width={24}
                  height={25}
                  alt={props.title}
                />
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-1 md:gap-2'>
          <div className='border-b border-solid border-gray-300 pb-1'>
            <p className='b3m-body-reg md:b2-body-reg text-basic-black'>
              Year of launch:{' '}
              <span className='b2m-body-sb md:b1m-body-sb text-blue-700'>
                {props.year}
              </span>
            </p>
          </div>
          {props.yearNotes && (
            <p className='b3m-body-reg text-basic-black'>{props.yearNotes}</p>
          )}
          {props.strategy && (
            <p className='b3m-body-med text-basic-black'>{props.strategy}</p>
          )}
          {props.benchmark && (
            <p className='b3m-body-reg text-blue-800'>
              Benchmark: <span className='font-medium'>{props.benchmark}</span>
            </p>
          )}
          {props.performance && (
            <p className='b3m-body-reg text-blue-800'>{props.performance}</p>
          )}
        </div>
      </div>

      <div className='flex flex-col gap-2 md:gap-4'>
        <div className='flex flex-row items-center justify-between gap-0.5 md:flex-col md:items-start md:justify-start'>
          <p className='b2m-body-med text-blue-800'>Target return:</p>
          <p className='b2m-body-med md:b1m-body-med w-fit rounded-lg bg-white px-4 py-2 text-gold-700'>
            {props.targetReturn}
          </p>
        </div>
        {props.rewardsImageUrl && (
          <Image
            src={props.rewardsImageUrl}
            width={600}
            height={400}
            quality={100}
            alt={`Rewards ${props.title}`}
            className='h-[132px] w-full rounded-lg object-cover'
          />
        )}
        <div className='mt-4 md:mt-6'>
          <button
            className={clsx(
              `b3m-body-med gap-4 px-2 md:px-5 py-2.5 md:b1m-body-med group flex min-w-[200px] flex-row items-center justify-between rounded-[40px] border border-solid border-blue-600 text-blue-800 transition-all 
               duration-200 hover:bg-blue-600 hover:text-white md:min-w-[265px]`
            )}
          >
            Download factsheet
              <ArrowRightLongIcon
                width='17'
                height='20'
                viewBox='0 0 24 24'
                className=' transition-all duration-200 group-hover:fill-white'
              />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductStats;
