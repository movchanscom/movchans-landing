import { BlogItem } from '@/contentful/blog';
import { formatDateString } from '@/utils';
import Image from 'next/image';
import React, { FC } from 'react';

type BlogAuthorProps = {
  post: BlogItem;
};

const BlogAuthor: FC<BlogAuthorProps> = ({ post }) => {
  return (
    <>
      {post.authorImage && (
        // eslint-disable-next-line jsx-a11y/alt-text
        <Image
          {...post.authorImage}
          className='h-[3.75rem] w-[3.75rem] rounded-full object-cover'
        />
      )}
      <div className='flex flex-col md:items-center justify-center gap-2 text-left text-blue-700 md:text-center'>
        <p className='b2m-body-med'>{post.authorName}</p>
        <span className='b3m-body-reg'>
          {formatDateString(post.publishedAt)}
        </span>
      </div>
    </>
  );
};

export default BlogAuthor;
