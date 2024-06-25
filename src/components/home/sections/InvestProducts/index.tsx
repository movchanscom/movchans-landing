import { FC } from 'react';
import SectionWrapper from '@/components/shared/wrappers/SectionWrapper';
import ProductButton from '@/components/home/sections/InvestProducts/ProductButton';
import { HEADER_NAV_LINKS } from '@/constants';

type InvestProductsType = {
  title: string;
};

const InvestProducts: FC<InvestProductsType> = (props) => {
  const products = HEADER_NAV_LINKS.find((item) => item.title === 'products');
  return (
    <SectionWrapper {...props}>
      <div className='no-scrollbar -mr-4 flex items-center justify-between gap-6 overflow-scroll py-4 md:-mr-10 lg:mr-0 lg:overflow-hidden'>
        {!!products?.items &&
          products?.items.map((product) => (
            <ProductButton key={product.href} item={product} />
          ))}
      </div>
    </SectionWrapper>
  );
};

export default InvestProducts;
