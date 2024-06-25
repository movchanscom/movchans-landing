import Script from 'next/script';

interface WebPageLdProps {
  url: string;
  name: string;
  description: string;
}
const WebPageLd = async (props: WebPageLdProps) => {

  let content: any = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${process.env.WEBSITE_DOMAIN_NAME || 'https://movchans.com'}${props.url}`,
    url: `${process.env.WEBSITE_DOMAIN_NAME || 'https://movchans.com'}${props.url}`,
    name: props.name,
    thumbnailUrl: `${process.env.WEBSITE_DOMAIN_NAME || 'https://movchans.com'}/images/logo-thumbnail.jpg`,
    inLanguage: "en",
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${process.env.WEBSITE_DOMAIN_NAME || 'https://movchans.com'}/#website`,
      url: `${process.env.WEBSITE_DOMAIN_NAME || 'https://movchans.com'}`,
      name: 'Optima Partner',
      description: props.description,
      inLanguage: "en",
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      '@id': `${process.env.WEBSITE_DOMAIN_NAME || 'https://movchans.com'}/#primaryimage`,
      inLanguage: 'en-US',
      url: `${process.env.WEBSITE_DOMAIN_NAME || 'https://movchans.com'}/images/logo-thumbnail.jpg`,
      contentUrl: `${process.env.WEBSITE_DOMAIN_NAME || 'https://movchans.com'}/images/logo-thumbnail.jpg`,
      width: 1136,
      height: 664,
    },
    image: {
      '@type': 'ImageObject',
      '@id': `${process.env.WEBSITE_DOMAIN_NAME || 'https://movchans.com'}/#primaryimage`,
      inLanguage: 'en-US',
      url: `${process.env.WEBSITE_DOMAIN_NAME || 'https://movchans.com'}/images/logo-thumbnail.jpg`,
      contentUrl: `${process.env.WEBSITE_DOMAIN_NAME || 'https://movchans.com'}/images/logo-thumbnail.jpg`,
      width: 1136,
      height: 664,
    },
    potentialAction: {
      '@type': 'ReadAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${process.env.WEBSITE_DOMAIN_NAME || 'https://movchans.com'}${props.url}`,
      },
    },
  };

  return (
    <Script
      id='web-page-ld-json'
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(content, null, '\t'),
      }}
    />
  );
};

export default WebPageLd;
