'use client';

import { useScopedI18n } from '@/locales/client';
import { NumbersToThree } from '@/types/constants.type';

const AddressInfo = () => {
  const t = useScopedI18n('footer.columns.column4');

  return (
    <div className='flex flex-col '>
      {Array.from(Array(3).keys()).map((index) => (
        <p key={index} className='b3m-body-reg !leading-[1.3125rem]'>
          {t(`items.address.slag${(index + 1) as NumbersToThree}`)}
        </p>
      ))}
    </div>
  );
};

export default AddressInfo;
