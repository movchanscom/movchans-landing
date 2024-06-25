import { SOCIAL_MEDIA } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import SocialMediaRow from './SocialMediaRow';

const RightsAndSocial = () => {
  return (
    <div className='flex justify-between border-t border-gray-200 pb-4 pt-6'>
      <div>
        <div className='flex flex-col items-center gap-6 md:flex-row'>
          <p className='b4m-body-reg md:border-r md:border-gold-500 pr-6 text-gray-700'>
            &copy; Movchans all rights reserved 2024
          </p>
          <div className='flex items-center gap-6 mb-3 md:mb-0'>
            <p className='b4m-body-reg border-r border-gold-500 md:py-3 pr-6 text-blue-600'>
              All rights reserved
            </p>
            <Link href='/privacy-policy' className='link text-blue-600'>
              Privacy Policy
            </Link>
          </div>
        </div>
        <p className='b4m-body-reg py-3 text-gray-600'>
          Powered by Red Rocket Software
        </p>
      </div>
      <div className='hidden lg:block'>
        <SocialMediaRow />
      </div>
    </div>
  );
};

export default RightsAndSocial;
