---
title: "Home Page - Services Section with Rush CMS"
created: 2026-01-22T19:24:00-03:00
last_updated: 2026-01-22T19:24:00-03:00
priority: P1-M
estimated_hours: 5
actual_hours: 0
status: backlog
blockers: []
tags: [home, services, rush-cms, integration]
---

# Home Page - Services Section with Rush CMS

## Description
Implement "Our Services" section fetching featured services from Rush CMS with before/after images.

## Acceptance Criteria
- [ ] Create `src/components/services-section.astro`
- [ ] Fetch featured services from Rush CMS (`servicos` collection)
- [ ] Display 2-3 service cards with before/after images
- [ ] Each card: title, service type, brief description, CTA
- [ ] CTA links to `/servicos/[slug]`
- [ ] Responsive grid layout
- [ ] "See All Services" button at bottom

## Design Specs
- **Grid:** 2-3 columns on desktop, 1 column mobile
- **Cards:** White background, shadow, hover effect
- **Images:** Before/After slider or side-by-side
- **CTA:** "Learn More" button in blue

## Implementation Notes
- Use Rush CMS helper: `getRushEntries('servicos', { featured: true, limit: 3 })`
- Optimize images (WebP, lazy load)
- Handle loading/error states
- Ensure proper TypeScript types from Rush

## Dependencies
- T001 (Rush CMS client must be configured)

## Data Structure Expected
```typescript
type Service = {
  slug: string
  titulo: string
  servico_tipo: 'residential' | 'commercial'
  descricao: string
  imagens_antes: string[]
  imagens_depois: string[]
  featured: boolean
}
```

## Definition of Done
- [ ] Fetches real data from Rush CMS
- [ ] Shows 2-3 featured services
- [ ] Images optimized and responsive
- [ ] CTA links work
- [ ] Loading state handled
- [ ] Error boundary for failed fetch
- [ ] TypeScript types correct
