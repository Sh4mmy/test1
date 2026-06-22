# dig1tal Marketing Website

Public-facing marketing website for [dig1tal.io](https://www.dig1tal.io), targeting UK businesses in the ERP and CRM market.

## Technology

- **[Astro](https://astro.build/)** — Static site generator for SEO-optimised pages
- **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first styling
- **[@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/)** — Automatic XML sitemap generation

## Getting Started

```bash
cd website
npm install
npm run dev      # Start dev server at http://localhost:4321
npm run build    # Build for production
npm run preview  # Preview production build
```

## Pages

| Page | Path | Purpose |
|------|------|---------|
| Homepage | `/` | Value proposition & hero |
| Features | `/features` | Product capabilities |
| ERP Solutions | `/erp-solutions` | Full ERP ecosystem positioning |
| Industries | `/industries` | UK vertical targeting |
| Pricing | `/pricing` | GBP pricing tiers |
| About | `/about` | Company & team info |
| Contact | `/contact` | Demo booking form |
| Blog | `/blog` | Content marketing hub |
| Case Studies | `/case-studies` | Customer success stories |
| Integrations | `/integrations` | Third-party connections |

## SEO Features

- ✅ Server-rendered static HTML (fully crawlable)
- ✅ XML Sitemap (auto-generated)
- ✅ robots.txt
- ✅ Schema.org structured data (Organization, Product, FAQ)
- ✅ Open Graph & Twitter Card meta tags
- ✅ `hreflang="en-GB"` targeting
- ✅ Semantic HTML with proper heading hierarchy
- ✅ Mobile-first responsive design
- ✅ Fast page loads (static HTML + minimal JS)

## Deployment

Build output goes to `dist/`. Deploy to any static hosting:

- **Recommended:** Netlify, Vercel, or Cloudflare Pages
- **Domain:** `www.dig1tal.io` (marketing site)
- **App:** `app.dig1tal.io` (CRM application)

## Content Strategy

This site targets UK businesses searching for ERP/CRM solutions with:
- UK-specific keywords and terminology
- GBP pricing
- UK compliance messaging (GDPR, Making Tax Digital)
- UK-based testimonials and case studies
- Local trust signals (ICO, Cyber Essentials)
