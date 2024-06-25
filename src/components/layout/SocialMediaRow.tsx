import { SOCIAL_MEDIA } from '@/constants';
import Image from 'next/image';

const SocialMediaRow = () => {
  return (
    <div className='flex items-center gap-4'>
      {SOCIAL_MEDIA.map((media) => (
        <a
          key={media.title}
          href={media.link}
          target='_blank'
          rel='noopener noreferrer'
          className='group relative h-8 w-8'
        >
          <Image
            width={32}
            height={32}
            src={`/icons/social/${media.image}-hovered.svg`}
            alt={media.title}
            priority
          />
          <Image
            width={32}
            height={32}
            src={`/icons/social/${media.image}.svg`}
            alt={media.title}
            priority
            className='absolute left-0 top-0 opacity-100 transition-all duration-300 group-hover:opacity-0'
          />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaRow;
