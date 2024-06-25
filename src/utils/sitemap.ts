import { Locales } from "@/locales/types";


export interface SitemapRow {
    url: string;
    lastModified?: Date;
    changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
    priority?: number;
}

type Sitemap = Array<SitemapRow>;

const mapAlternate = ({ href, hreflang }: {
    href: string,
    hreflang: string
}) => `<xhtml:link rel="alternate" hreflang="${hreflang}" href="${href}"/>`

const mapRowToUrl = (row: SitemapRow) =>
    `<url>
          <loc>${`${process.env.WEBSITE_DOMAIN_NAME}${row.url}`}</loc>
          <lastmod>${row.lastModified?.toISOString() || ''}</lastmod>
          <changefreq>${row.changeFrequency || ''}</changefreq>
          <priority>${row.priority?.toFixed(1)}</priority>
          ${[
        {
            href: `${process.env.WEBSITE_DOMAIN_NAME}/ru${row.url}`,
            hreflang: Locales.RU
        }
    ].map(mapAlternate).join('\n        ')}
      </url>`

export const sitemapToXml = (sitemap: SitemapRow[]) => `<?xml version="1.0" encoding="UTF-8"?>
  <urlset 
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
      ${sitemap.map(mapRowToUrl).join('\n     ')}
  </urlset>
  `;


export default sitemapToXml;