---
title: "About Page (/sobre)"
created: 2026-01-22T19:26:00-03:00
last_updated: 2026-01-22T19:26:00-03:00
priority: P2-S
estimated_hours: 3
actual_hours: 0
status: backlog
blockers: []
tags: [about, page, content]
---

# About Page (/sobre)

## Description
Create about page to humanize brand with Julio's story, team, and company numbers.

## Acceptance Criteria
- [ ] Create `src/pages/sobre.astro`
- [ ] Hero: "A história por trás da Pórtico"
- [ ] Manifesto section (summary from brand-identity)
- [ ] Julio detailed bio with photo
- [ ] Team section (photos + bios)
- [ ] Stats/Numbers: years, projects, clients
- [ ] Optional: Certifications/Partnerships

## Design Specs
- **Hero:** Simple with background image
- **Manifesto:** Centered, quote-style
- **Team:** Grid of cards with photos
- **Stats:** Large numbers with labels

## Implementation Notes
- Reuse content from brand-identity doc
- Photos optimized (WebP, lazy load)
- Consider testimonials integration
- SEO: Focus on "reformas Porto Alegre", "Júlio Pórtico"

## Dependencies
- T001 (Base layout)
- T011 (i18n for content)

## Content Sections
1. Hero with mission statement
2. Manifesto excerpt
3. Julio's story (expanded from home)
4. Team grid (if team exists, else skip)
5. By the numbers (20 anos, X obras, X% satisfação)
6. Certifications (if any)

## Definition of Done
- [ ] All sections present
- [ ] Photos optimized
- [ ] Content humanized and authentic
- [ ] Responsive layout
- [ ] SEO meta tags
