import clsx from 'clsx';
import Image from 'next/image';

interface PartnerCard {
  className: string;
  name?: string;
  iconsUrls?: Array<{
    url: string;
    alt: string;
  }>;
}

const PartnerCard = (props: PartnerCard) => {
  return (
    <div className={clsx('p-4 md:p-6 h-full', props.className)}>
      <div className='rounded-lg'>
        {props.name && props.iconsUrls && (
          <>
            <p className='b2m-body-sb md:h6-headline-sb border-b border-solid border-blue-100 pb-3 text-center text-basic-black md:pb-4'>
              {props.name}
            </p>
            <div className='mt-6 flex flex-wrap justify-center gap-4'>
              {props.iconsUrls.map((icon, idx) => (
                <Image
                  key={idx}
                  src={icon.url}
                  alt={icon.alt}
                  width={100}
                  height={50}
                  quality={100}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PartnerCard;
