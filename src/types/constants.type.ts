export interface NavItemsType {
  title:
    | 'aboutUs'
    | 'products'
    | 'cooperation'
    | 'blog'
    | 'contacts'
    | 'column1'
    | 'column2'
    | 'column3';
  href?: string;
  withPopup?: boolean;
  rawValues?: boolean;
  items?: { title: string; href: string }[];
}

export type LanguagesType = 'ru' | 'en';

export type PartnersAndProvidersItemsType =
  | 'providers'
  | 'clearingSystems'
  | 'dataBases';

export type NumbersToTen = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type NumbersToSeven = 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type NumbersToSix = 1 | 2 | 3 | 4 | 5 | 6;
export type NumbersToFive = 1 | 2 | 3 | 4 | 5;
export type NumbersToFour = 1 | 2 | 3 | 4;
export type NumbersToThree = 1 | 2 | 3;
export type NumbersToTwo = 1 | 2;

export type FAQChaptersKeysType =
  | 'fund'
  | 'liquidity'
  | 'hedge'
  | 'investMeasure'
  | 'sharpeRatio'
  | 'volatility';
export type PrivacyChaptersKeysType =
  | 'reference-information'
  | 'about-us'
  | 'usage-scope'
  | 'data-collection'
  | 'your-data-usage'
  | 'security'
  | 'cookies'
  | 'links'
  | 'subject-rights'
  | 'data-sharing';
export type TermsChaptersKeysType =
  | 'agreement'
  | 'lack-of-proposal'
  | 'legal-restrictions'
  | 'lack-of-warranty'
  | 'lack-of-responsibility'
  | 'third-party-content'
  | 'results-of-work'
  | 'third-party-links'
  | 'personal-data-processing';

export type MarkerType = {
  id: number;
  country: {
    ru: string;
    en: string;
  };
  position: {
    lat: number;
    lng: number;
  };
  name: string;
  phone?: string;
  email?: string;
  address: string;
};

export type CooperationItemTitleType =
  | 'privatePersons'
  | 'familyOffices'
  | 'investments'
  | 'hnwi'
  | 'blogersCooperation';

export type CooperationsItemType = {
  title: CooperationItemTitleType;
  image: string;
  childrenLength?: number;
};

export type TeamMemberType =
  | 'andrei-movchan'
  | 'elena-chirkova'
  | 'artem-karlov'
  | 'rafael-nagapetyants'
  | 'yulia-prokofieva'
  | 'michael-portnoy'
  | 'boris-moshkovich'
  | 'eugeniu-kyreu'
  | 'daniyar-serikov'
  | 'zhadra-abdullina'
  | 'svetlana-salant'
  | 'sofia-kukhno';

export type ProductNameType = 'argo' | 'geist' | 'laif' | 'arq' | 'cossack';

export type ProductsMainPoints =
  | 'strategy'
  | 'tools'
  | 'suitableFor'
  | 'benchmark'
  | 'investmentHorizon'
  | 'riskProfile';
