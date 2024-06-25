import { getScopedI18n } from '@/locales/server';
import { NumbersToTen } from '@/types/constants.type';
import { FC } from 'react';

type InNumbersCardProps = {
  index: NumbersToTen;
};

const InNumbersCard: FC<InNumbersCardProps> = async ({ index }) => {
  const t = await getScopedI18n('home.inNumbers.cards');
  return (
    <div className='flex h-[10.125rem] w-[20rem] shrink-0 flex-col gap-3 rounded-lg bg-blue-400 p-4 lg:w-auto hover:bg-blue-600 transition-all duration-200'>
      <p className='h3-headline-med lg:h2-headline text-basic-white'>
        {t(`card${index}.title`)}
      </p>
      <p className='md:b3m-body-reg lg:b2m-body-reg text-basic-white'>
        {t(`card${index}.content`)}
      </p>
    </div>
  );
};

export default InNumbersCard;
