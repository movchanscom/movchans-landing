import React, { FC } from 'react';
import Markdown from 'react-markdown';
import {
  AnchorLink,
  AnchorLinksBlock,
  BlogImage,
  Heading2,
  Paragraph,
  YoutubeVideo,
  twoImages,
  BlockQuote,
  OrderedList,
  UnorderedList,
  CardsList,
  BlogLink,
  Card,
} from './MarkdownComponents';
import rehypeAttrs from 'rehype-attr';
import rehypeRaw from 'rehype-raw';
import remarkPlugin from 'remark-heading-id';
import remarkUnwrapImages from 'remark-unwrap-images';
import remarkGfm from 'remark-gfm';

type BlogMarkdownProps = {
  article: string;
};

const BlogMarkdown: FC<BlogMarkdownProps> = ({ article }) => {
  return (
    <Markdown
      rehypePlugins={[rehypeRaw, rehypeAttrs]}
      remarkPlugins={[remarkPlugin, remarkUnwrapImages, remarkGfm]}
      components={{
        h2(props) {
          return <Heading2 {...props} />;
        },
        p(props) {
          return <Paragraph {...props} />;
        },
        a(props) {
          return <BlogLink {...props} />;
        },
        img(props) {
          return <BlogImage {...props} />;
        },
        // @ts-ignore
        card: Card,
        // @ts-ignore
        cardslist: CardsList,
        // @ts-ignore
        ul: UnorderedList,
        // @ts-ignore
        ol: OrderedList,
        // @ts-ignore
        video: YoutubeVideo,
        // @ts-ignore
        quote: BlockQuote,
        // @ts-ignore
        twoimages: twoImages,
        // @ts-ignore
        anchorlinksblock: AnchorLinksBlock,
        // @ts-ignore
        anchorlink: AnchorLink,
      }}
    >
      {article}
    </Markdown>
  );
};

export default BlogMarkdown;
