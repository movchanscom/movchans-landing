'use client';

import { useScopedI18n } from '@/locales/client';
import Image from 'next/image';
import { FC, useEffect, useState } from 'react';
import {
  FacebookShareButton,
  TwitterShareButton,
  TelegramShareButton,
  LinkedinShareButton,
} from 'react-share';

interface BlogItemShareProps {
  title: string;
}

const BlogItemShare: FC<BlogItemShareProps> = ({ title }) => {
  const t = useScopedI18n('blog');
  const [url, setUrl] = useState<string>('');

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <div className='flex flex-col items-center gap-6'>
      <p className='b3m-body-med'>{t('share')}</p>
      <div className='sticky top-[100px] flex flex-row gap-4 lg:flex-col'>
        <FacebookShareButton url={url} title={title}>
          <Image
            width={32}
            height={32}
            src={'/icons/social/facebook-hovered.svg'}
            alt='Facebook'
            priority
          />
        </FacebookShareButton>
        <TwitterShareButton url={url} title={title}>
          <Image
            width={32}
            height={32}
            src={'/icons/social/twitter-hovered.svg'}
            alt='Twitter'
            priority
          />
        </TwitterShareButton>
        <TelegramShareButton url={url} title={title}>
          <Image
            width={32}
            height={32}
            src={'/icons/social/telegram-hovered.svg'}
            alt='Telegram'
            priority
          />
        </TelegramShareButton>
        <LinkedinShareButton url={url} title={title}>
          <Image
            width={32}
            height={32}
            src={'/icons/social/linkedin-hovered.svg'}
            alt='LinkedIn'
            priority
          />
        </LinkedinShareButton>
      </div>
    </div>
  );
};

export default BlogItemShare;
