import {
  LanguagesType,
  NavItemsType,
  PartnersAndProvidersItemsType,
} from '@/types/constants.type';

export const MAIN_PHONE_NUMBER = '+357 22 030 814';
export const MAIN_EMAIL_ADDRESS = 'contact@movchans.com';

export const LANGUAGES: LanguagesType[] = ['en', 'ru'];

export const GOOGLE_SHEET_RANGES = {
  subscribe: 'Подписаться!A1:E1',
  connect: 'Записаться/Стать клиентом!A1:I1',
};

export const HEADER_NAV_LINKS: NavItemsType[] = [
  {
    title: 'aboutUs',
    withPopup: true,
    items: [
      { title: 'company', href: '/company' },
      { title: 'team', href: '/team' },
      { title: 'awards', href: '/awards' },
    ],
  },
  {
    title: 'products',
    withPopup: true,
    rawValues: true,
    items: [
      { title: 'ARGO', href: '/argo' },
      { title: 'GEIST', href: '/geist' },
      { title: 'LAIF', href: '/laif' },
      { title: 'ARQ', href: '/arq' },
      { title: 'COSSACK', href: '/cossack' },
      // { title: 'FISTR', href: '/fistr' },
      // { title: 'ARAGATS', href: '/aragats' },
    ],
  },
  {
    title: 'cooperation',
    href: '/cooperation',
  },
  {
    title: 'blog',
    href: '/blog',
  },
  {
    title: 'contacts',
    href: '/contacts',
  },
];
export const FOOTER_NAV_LINKS: NavItemsType[] = [
  {
    title: 'column1',
    withPopup: true,
    rawValues: true,
    items: [
      { title: 'ARGO', href: '/argo' },
      { title: 'GEIST', href: '/geist' },
      { title: 'LAIF', href: '/laif' },
      { title: 'ARQ', href: '/arq' },
      { title: 'COSSACK', href: '/cossack' },
      // { title: 'FISTR', href: '/fistr' },
      // { title: 'ARAGATS', href: '/aragats' },
    ],
  },
  {
    title: 'column2',
    withPopup: true,
    items: [
      { title: 'team', href: '/team' },
      { title: 'company', href: '/company' },
      { title: 'awards', href: '/awards' },
      { title: 'cooperation', href: '/cooperation' },
      { title: 'contacts', href: '/contacts' },
    ],
  },
  {
    title: 'column3',
    withPopup: true,
    items: [
      { title: 'blog', href: '/blog' },
      { title: 'faq', href: '/faq' },
    ],
  },
];

export const INVEST_PRODUCTS = [
  'ARGO',
  'GEIST',
  'LAIF',
  'ARQ',
  'COSSACK',
  // 'Fistr',
  // 'Aragats',
];

export const KNOW_US_FROM = [
  'Поисковая система',
  'Сайт',
  `YouTube Movchan's`,
  `Telegram Movchan's Daily`,
  'Другие соц. сети',
  'Публикации в СМИ',
  'Оффлайн мероприятие',
  'Вебинар',
  'Рекомендация',
  'Другое',
];

export const CURRENCIES = ['USD', 'EUR', 'RUB'];

export const PARTNERS_AND_PROVIDERS_ITEMS: PartnersAndProvidersItemsType[] = [
  'providers',
  'clearingSystems',
  'dataBases',
];

export const PROVIDER_IMAGES_COUNT = [3, 2, 5, 3];

export const BLOG_IMAGES = ['blog-wide', 'blog-wide', 'blog-wide'];

export const INVEST_PRODUCTS_ICONS = {
  section1: [
    'graph-up',
    'broker',
    // 'graph-up'
  ],
  section2: [
    ['graph-up'],
    ['graph-up', 'broker'],
    ['graph-up'],
    ['graph-up'],
    ['graph-up'],
    // ['globe', 'broker'],
    // ['globe', 'broker'],
  ],
};

export const FOOTER_COLUMNS = {
  column1: [
    'ARGO',
    'GEIST',
    'LAIF',
    'ARQ',
    'COSSACK',
    //  'FISTR',
    //  'ARAGATS'
  ],
  column2: ['team', 'company', 'awards', 'cooperation', 'contacts'],
  column3: ['blog', 'faq'],
};

export const SOCIAL_MEDIA = [
  {
    title: 'Telegram',
    image: 'telegram',
    link: 'https://t.me/themovchans',
  },
  {
    title: 'Facebook',
    image: 'facebook',
    link: 'https://www.facebook.com/themovchans',
  },
  {
    title: 'Youtube',
    image: 'youtube',
    link: 'https://www.youtube.com/Movchans',
  },
  {
    title: 'Instagram',
    image: 'instagram',
    link: 'https://www.instagram.com/themovchans',
  },
  {
    title: 'Twitter',
    image: 'twitter',
    link: 'https://twitter.com/themovchans',
  },
  {
    title: 'LinkedIn',
    image: 'linkedin',
    link: 'https://www.linkedin.com/company/movchan-s-group/',
  },
];
