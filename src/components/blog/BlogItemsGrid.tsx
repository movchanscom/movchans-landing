import { FC } from 'react';
import BlogItemPreview from './BlogItemPreview';
import { BlogCardResponse } from '@/contentful/blog';

type BlogItemsGridProps = {
  posts: BlogCardResponse[];
  noItemsMessage: string;
};

const BlogItemsGrid: FC<BlogItemsGridProps> = ({ posts, noItemsMessage }) => {
  return (
    <>
      {posts.length > 0 ? (
        <div className='grid grid-cols-1 gap-6 transition-[height] duration-[1000] md:grid-cols-2'>
          {posts.map((blogPost) => (
            <BlogItemPreview key={blogPost.slug} blogPost={blogPost} />
          ))}
        </div>
      ) : (
        <span className='b3m-body-med md:h6-headline-med text-blue-600'>
          {noItemsMessage}
        </span>
      )}
    </>
  );
};

export default BlogItemsGrid;
