import { BlogCardResponse } from "@/contentful/blog";
import { ContentImage } from "@/contentful/contentImage";

export const typedEntries = <K extends string, T>(
  obj: Record<K, T>
): [K, T][] => {
  return Object.entries(obj) as [K, T][];
};

export const formatDateString = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);

  return formattedDate;
};

export const transformRelatedArticles = (postData: any): BlogCardResponse[] => {
  const relatedArticles: BlogCardResponse[] =
    postData.relatedArticles?.map((item: any) => {
      if (!item || !item.fields || !item.fields.navigationImage) {
        return {
          slug: '',
          title: '',
          shortDescription: '',
          category: '',
          navigationImage: null,
        };
      }

      const navigationImage = item.fields.navigationImage;

      let src = navigationImage.fields.file.url || '';
      const alt = navigationImage.fields.description || '';
      const width = navigationImage.fields.file.details?.image?.width || 0;
      const height = navigationImage.fields.file.details?.image?.height || 0;

      if (src && !src.startsWith('https:')) {
        src = 'https:' + src;
      }

      const contentImage: ContentImage = {
        src,
        alt,
        width,
        height,
      };

      const title = item.fields.title || '';
      const shortDescription = item.fields.shortDescription || '';
      const category = item.fields.category || '';
      const slug = item.fields.slug || '';

      return {
        slug,
        title,
        shortDescription,
        category,
        navigationImage: contentImage,
      };
    }) || [];

  return relatedArticles;
};