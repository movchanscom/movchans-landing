import { useScopedI18n } from '@/locales/client';
import { NumbersToFour } from '@/types/constants.type';
import Image from 'next/image';
import { FC } from 'react';

type ProvidersCardProps = {
  number: NumbersToFour;
  imagesLength: number;
};

const ProvidersCard: FC<ProvidersCardProps> = ({ number, imagesLength }) => {
  const t = useScopedI18n('home.partnersAndProviders.providers.items');
  return (
    <div className='flex flex-col items-center gap-6 rounded-lg bg-basic-white p-6'>
      <h6 className='b2m-body-sb md:h6-headline-sb w-full border-b border-gray-200 pb-4 text-center'>
        {t(`item${number}.title`)}
      </h6>
      <div className='flex grow flex-wrap items-center justify-center gap-4'>
        {Array.from(Array(imagesLength).keys()).map((imageIndex) => (
          <Image
            key={imageIndex}
            width={100}
            height={50}
            src={`/images/providers/provider-${number}-${imageIndex + 1}.png`}
            alt={`Provider ${number}`}
            className='h-[40px] w-[80px]  md:h-[50px] md:w-[100px] '
            priority
          />
        ))}
      </div>
    </div>
  );
};

export default ProvidersCard;
