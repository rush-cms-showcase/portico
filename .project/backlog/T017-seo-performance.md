---
title: "SEO and Performance Optimization"
created: 2026-01-22T19:26:00-03:00
last_updated: 2026-01-22T19:26:00-03:00
priority: P2-M
estimated_hours: 4
actual_hours: 0
status: backlog
blockers: []
tags: [seo, performance, optimization]
---

# SEO and Performance Optimization

## Description
Optimize site for search engines and performance (Lighthouse 95+ target).

## Acceptance Criteria
- [ ] Sitemap.xml generation
- [ ] Robots.txt configuration
- [ ] Meta tags on all pages (title, description, OG)
- [ ] Structured data (JSON-LD) for services
- [ ] Image optimization audit
- [ ] Font preloading
- [ ] Critical CSS optimization
- [ ] Lazy loading implementation
- [ ] Lighthouse audit passing

## SEO Checklist
- [ ] Unique title tags (50-60 chars)
- [ ] Meta descriptions (150-160 chars)
- [ ] H1 on every page (only one)
- [ ] Proper heading hierarchy (H2, H3)
- [ ] Alt text on all images
- [ ] Internal linking structure
- [ ] Canonical URLs
- [ ] Open Graph tags (Facebook/WhatsApp preview)

## Performance Checklist
- [ ] Images WebP format
- [ ] Responsive images (srcset)
- [ ] Font preload (Inter, Montserrat)
- [ ] Remove unused CSS
- [ ] Minimize JavaScript
- [ ] Enable compression (Brotli/Gzip)
- [ ] Cache headers configured

## Structured Data Example
```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Pórtico Reformas",
  "description": "Reformas residenciais...",
  "address": {...},
  "geo": {...},
  "priceRange": "$$$$"
}
```

## Implementation Notes
- Use Astro SEO component
- Generate sitemap with @astrojs/sitemap
- Test with Google Search Console
- Validate structured data with Google tool

## Dependencies
- All pages must exist (T001-T016)

## Targets
- **Performance:** 95+
- **Accessibility:** 100
- **Best Practices:** 100
- **SEO:** 100

## Definition of Done
- [ ] Sitemap.xml accessible
- [ ] All pages have proper meta
- [ ] Structured data validated
- [ ] Lighthouse scores meet targets
- [ ] Core Web Vitals passing
- [ ] No console errors
