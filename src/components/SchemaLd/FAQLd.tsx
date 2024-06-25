import Script from 'next/script';

interface FAQLdProps {
  items: Array<{
    question: string;
    answer: string;
  }>;
}
const FAQLd = (props: FAQLdProps) => {
  const content = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      props.items.map((x) => ({
        '@type': 'Question',
        name: x.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: x.answer,
        },
      })),
    ],
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

export default FAQLd;
