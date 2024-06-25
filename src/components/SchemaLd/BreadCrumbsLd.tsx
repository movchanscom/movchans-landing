import Script from 'next/script';

interface BreadCrubsLdProps {
  itemListElements: Array<{
    name: string;
    href: string;
  }>;
}

const BreadCrumbsLd = (props: BreadCrubsLdProps) => {
  const content = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      props.itemListElements.map((elem, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Thing',
          '@id': `${process.env.WEBSITE_DOMAIN_NAME}${elem.href}`,
          name: elem.name,
        },
      })),
    ],
  };

  return (
    <Script
      id='breadcrumbs-ld-json'
      type='application/ld+json'
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(content, null, '\t'),
      }}
    />
  );
};

export default BreadCrumbsLd;
