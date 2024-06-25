import Image from 'next/image';
import { FC } from 'react';
import ArrowButton from '../shared/ui/ArrowButton';

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
    <div className='h-full flex flex-col gap-4 rounded-lg bg-gray-100 p-4 transition-all duration-200'>
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
      <div className='flex flex-col gap-2'>
        <div className='border-b border-solid border-gray-300 pb-1'>
          <p className='b3-body-reg md:b2-body-reg text-basic-black'>
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
      <div className='flex flex-col gap-0.5'>
        <p className='b2m-body-med text-blue-800'>Target return:</p>
        <p className='b1m-body-med w-fit bg-white px-4 py-2 text-gold-700'>
          {props.targetReturn}
        </p>
      </div>
      {props.rewardsImageUrl && (
        <Image
          src={props.rewardsImageUrl}
          width={600}
          height={400}
          alt={`Rewards ${props.title}`}
          className='h-[132px] w-full object-contain'
        />
      )}
    </div>
  );
};

export default ProductStats;
