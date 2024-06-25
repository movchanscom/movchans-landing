import { FC } from 'react';
import BlogItemShare from './BlogItemShare';
import SectionWrapper from '../shared/wrappers/SectionWrapper';
import { BlogItem } from '@/contentful/blog';
import Image from 'next/image';
import BlogMarkdown from './BlogMarkdown';
import BlogAuthor from './BlogAuthor';

type BlogItemComponentProps = {
  post: BlogItem;
};

const BlogItemComponent: FC<BlogItemComponentProps> = ({ post }) => {
  return (
    <div>
      {post.navigationImage && (
        // eslint-disable-next-line jsx-a11y/alt-text
        <Image
          {...post.navigationImage}
          priority
          className='mb-6 h-[17.5rem] object-cover md:mb-10 md:h-[21.25rem] lg:h-[27.5rem]'
        />
      )}
      <SectionWrapper id={post.title}>
        <div className='relative grid grid-cols-12 gap-4 md:gap-10'>
          <div className='sticky top-[100px] col-span-2 hidden h-fit flex-col items-center gap-3 border-b border-gold-200 p-4 lg:flex'>
            {/* show on >lg screen */}
            <BlogAuthor post={post} />
          </div>
          <div className='col-span-12 lg:col-span-8'>
            <div className='mb-6 flex flex-col-reverse justify-between gap-4 md:mb-10 md:flex md:flex-row'>
              <h1 className='h4-headline-med lg:h1-headline md:h2-headline'>
                {post.title}
              </h1>
              <div className='flex w-max shrink-0 flex-row items-center gap-4 border-b border-gold-200 pb-4 md:w-[11.7rem] md:flex-col md:gap-3 lg:hidden'>
                {/* show on <lg screen */}
                <BlogAuthor post={post} />
              </div>
            </div>
            <BlogMarkdown article={post.article} />
          </div>
          <div className='sticky top-[100px] col-span-2 hidden h-fit p-4 lg:flex lg:justify-center'>
            <BlogItemShare title={post.title} />
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default BlogItemComponent;
