# SEO Implementation Guide - Niroga.ai

## Overview
This document outlines the comprehensive SEO implementation for the Niroga.ai website, including metadata, social sharing optimization, and best practices.

---

## 📋 Table of Contents
1. [Meta Tags Implementation](#meta-tags-implementation)
2. [Open Graph & Social Media](#open-graph--social-media)
3. [Structured Data (JSON-LD)](#structured-data-json-ld)
4. [Sitemap & Robots.txt](#sitemap--robotstxt)
5. [Page-Specific SEO](#page-specific-seo)
6. [Testing & Validation](#testing--validation)
7. [Maintenance](#maintenance)

---

## Meta Tags Implementation

### Primary Meta Tags (`index.html`)
Located in `/index.html`, these tags provide basic SEO information:

```html
<title>Niroga.ai - AI-Powered Health Solutions | Advanced Medical Diagnostics</title>
<meta name="description" content="..." />
<meta name="keywords" content="..." />
<meta name="author" content="Niroga.ai" />
<meta name="robots" content="index, follow" />
```

**Key Elements:**
- **Title**: 50-60 characters, includes brand and primary keywords
- **Description**: 150-160 characters, compelling and keyword-rich
- **Keywords**: Relevant search terms for your industry
- **Robots**: Tells search engines to index and follow links

---

## Open Graph & Social Media

### Facebook/LinkedIn Sharing
```html
<meta property="og:type" content="website" />
<meta property="og:url" content="https://niroga.ai/" />
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="https://niroga.ai/niroga-logo.png" />
```

### Twitter Sharing
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="..." />
<meta name="twitter:description" content="..." />
<meta name="twitter:image" content="..." />
```

**Recommended Image Specifications:**
- **Open Graph**: 1200x630px (Facebook, LinkedIn)
- **Twitter**: 1200x600px or 1200x630px
- Format: PNG or JPG
- Max file size: 5MB

### Creating Social Share Images
You should create a dedicated social share image that includes:
- Niroga.ai logo
- Tagline or key message
- Professional, high-quality graphics
- Brand colors

Current placeholder: `/niroga-logo.png` (should be updated to proper dimensions)

---

## Structured Data (JSON-LD)

### Implemented Schemas

#### 1. MedicalOrganization Schema
Helps Google understand your business type:
```json
{
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "Niroga.ai",
  "url": "https://niroga.ai",
  "logo": "https://niroga.ai/niroga-logo.png"
}
```

#### 2. WebSite Schema
Enables search functionality in Google results:
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Niroga.ai",
  "url": "https://niroga.ai",
  "potentialAction": {
    "@type": "SearchAction"
  }
}
```

#### 3. Product Schema
Showcases your solutions with ratings:
```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Niroga.ai Health Solutions",
  "brand": {
    "@type": "Brand",
    "name": "Niroga.ai"
  }
}
```

---

## Sitemap & Robots.txt

### Sitemap (`/public/sitemap.xml`)
Lists all pages for search engine crawling:

**Priority Levels:**
- Homepage: 1.0 (highest)
- Product/Devices pages: 0.9
- About/Tech/Solutions: 0.8
- Contact: 0.7
- Legal pages: 0.5

**Update Frequency:**
- Homepage: Weekly
- Product pages: Weekly
- Content pages: Monthly
- Legal pages: Yearly

### Robots.txt (`/public/robots.txt`)
Controls search engine crawler access:
```
User-agent: *
Allow: /
Sitemap: https://niroga.ai/sitemap.xml
```

---

## Page-Specific SEO

### Dynamic SEO Component (`/src/components/SEOHead.tsx`)
Each page can have unique metadata:

```tsx
<SEOHead 
  title="Custom Page Title"
  description="Page-specific description"
  keywords="page, specific, keywords"
  image="https://niroga.ai/page-image.png"
/>
```

### Current Page Configurations

1. **Home Page**
   - Focus: Brand awareness, AI health solutions
   - Keywords: AI health, medical diagnostics, healthcare technology

2. **About Page**
   - Focus: Company mission, team, values
   - Keywords: healthcare AI company, medical innovation

3. **Technology Page**
   - Focus: AI algorithms, audio analysis
   - Keywords: AI technology, medical AI algorithms

4. **Devices Page**
   - Focus: Product offerings
   - Keywords: medical devices, diagnostic tools

5. **Solutions Page**
   - Focus: Use cases, customer segments
   - Keywords: healthcare solutions, clinical solutions

6. **Contact Page**
   - Focus: Getting in touch
   - Keywords: contact, support, partnership

7. **Privacy Policy**
   - Focus: Data protection, HIPAA compliance
   - Type: Article

8. **Terms of Service**
   - Focus: Legal terms, user agreements
   - Type: Article

---

## Testing & Validation

### Required Tools

1. **Google Search Console**
   - Submit sitemap.xml
   - Monitor indexing status
   - Check for crawl errors
   - URL: https://search.google.com/search-console

2. **Facebook Sharing Debugger**
   - Test Open Graph tags
   - Clear cache for updates
   - URL: https://developers.facebook.com/tools/debug/

3. **Twitter Card Validator**
   - Test Twitter cards
   - URL: https://cards-dev.twitter.com/validator

4. **LinkedIn Post Inspector**
   - Test LinkedIn sharing
   - URL: https://www.linkedin.com/post-inspector/

5. **Schema Markup Validator**
   - Validate JSON-LD
   - URL: https://validator.schema.org/

6. **Google Rich Results Test**
   - Test structured data
   - URL: https://search.google.com/test/rich-results

### Testing Checklist
- [ ] All pages have unique titles
- [ ] All pages have unique descriptions
- [ ] Images load correctly in social previews
- [ ] Structured data validates without errors
- [ ] Sitemap is accessible at /sitemap.xml
- [ ] Robots.txt is accessible at /robots.txt
- [ ] Canonical URLs are correct
- [ ] Mobile-friendly test passes

---

## Maintenance

### Monthly Tasks
- [ ] Update lastmod dates in sitemap.xml
- [ ] Check Google Search Console for errors
- [ ] Review and update meta descriptions for top pages
- [ ] Monitor keyword rankings

### Quarterly Tasks
- [ ] Update page content for freshness
- [ ] Review and optimize title tags
- [ ] Update structured data if business info changes
- [ ] Refresh social share images

### Annual Tasks
- [ ] Comprehensive SEO audit
- [ ] Update privacy policy and terms dates
- [ ] Review all metadata for accuracy
- [ ] Update copyright year in footer

---

## Key Files Reference

### HTML/Meta Files
- `/index.html` - Main HTML with global meta tags
- `/public/robots.txt` - Search engine crawling rules
- `/public/sitemap.xml` - Site structure for search engines

### React Components
- `/src/components/SEOHead.tsx` - Dynamic meta tag component
- All page components in `/src/pages/` - Include SEOHead component

### Images
- `/public/niroga-logo.png` - Current favicon and og:image
- **TODO**: Create dedicated social share image (1200x630px)

---

## Important Notes

### Before Going Live

1. **Update Domain URLs**
   - Replace all instances of `https://niroga.ai` with your actual domain
   - Files to update:
     - `index.html`
     - `SEOHead.tsx`
     - `sitemap.xml`
     - `robots.txt`

2. **Update Social Media Handles**
   - Twitter: Currently `@NirogaAI` (update if different)
   - Add other social profiles to structured data

3. **Create Proper Social Share Image**
   - Dimensions: 1200x630px
   - Include logo, tagline, and branding
   - Replace current placeholder

4. **Add Google Analytics**
   - Add GA4 tracking code to `index.html`
   - Set up conversion tracking

5. **Submit to Search Engines**
   - Google Search Console
   - Bing Webmaster Tools
   - Submit sitemap to both

### Performance Optimization

- All meta tags are in `<head>` for optimal SEO
- Canonical URLs prevent duplicate content issues
- Structured data helps with rich snippets
- Dynamic meta tags update on page navigation

---

## Additional Resources

- [Google SEO Starter Guide](https://developers.google.com/search/docs/beginner/seo-starter-guide)
- [Schema.org Documentation](https://schema.org/)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Card Documentation](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)

---

## Contact for SEO Questions

For technical SEO implementation questions, refer to:
- This documentation
- `/src/components/SEOHead.tsx` code comments
- Google Search Console reports

**Last Updated**: November 18, 2025
