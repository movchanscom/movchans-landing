import Script from 'next/script';
import OpenGraphImg from '@/../public/images/logo-thumbnail.jpg';

interface ArticleLdProps {
  title: string;
  blogSlug: string;
  publisherName: string;
  publisherLogo?: string;
  sourceOrganizationName?: string;
  image?: string;
  datePublished: string;
  authorName: string;
  description: string;
}

const ArticleLd = (props: ArticleLdProps) => {
  const content = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    datePublished: props.datePublished,
    headline: props.title,
    image: props.image || OpenGraphImg.src,
    dateModified: props.datePublished,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${process.env.WEBSITE_DOMAIN_NAME || 'https://movchans.com'}/blog/${props.blogSlug}`,
      name: props.title,
    },
    author: {
      '@type': 'Person',
      name: props.authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Optima Partner',
      logo: {
        '@type': 'ImageObject',
        url: props.publisherLogo || OpenGraphImg.src,
      },
    },
    sourceOrganization: {
      '@type': 'Organization',
      name: 'Optima Partner',
    },
  };

  return (
    <Script
      id='faq-ld-json'
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(content, null, '\t'),
      }}
    />
  );
};

export default ArticleLd;
