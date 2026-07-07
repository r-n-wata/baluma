# Deployment Checklist

This app is deployed with cPanel using [.cpanel.yml](/Users/ruth.wata/Projects/baluma/.cpanel.yml:1).

## Before deploying

- Run `npm run build`
- Confirm `dist/contact/index.html` exists
- Confirm at least one house route such as `dist/casas/lucias-house/index.html` exists
- Confirm `dist/sitemap.xml` and `dist/robots.txt` exist
- Confirm `dist/property-og/` contains the generated property social images

## cPanel expectations

- The deploy copies `dist/*` into `public_html`
- Because SEO now depends on route-specific HTML files, cPanel must preserve nested folders like:
  - `public_html/contact/index.html`
  - `public_html/reviews/index.html`
  - `public_html/casas/lucias-house/index.html`
- Do not flatten the `dist` output during deploy

## Production checks

- Open `https://balumabacalar.com/contact` and view page source
- Open one property route like `https://balumabacalar.com/casas/lucias-house` and view page source
- Confirm the source contains:
  - route-specific `title`
  - route-specific `meta name="description"`
  - canonical URL
  - property-specific `og:image` on house pages
  - JSON-LD structured data
- Confirm these URLs load directly in a fresh browser tab, not only through in-app navigation

## Search indexing

- Submit `https://balumabacalar.com/sitemap.xml` to Google Search Console
- Submit the same sitemap to Bing Webmaster Tools
- Request indexing for the homepage, contact page, reviews page, and key property pages

## Social sharing checks

- Test a property URL in Facebook Sharing Debugger
- Test a property URL in WhatsApp by pasting it into a chat preview
- Confirm the expected property image appears from `/property-og/...`
