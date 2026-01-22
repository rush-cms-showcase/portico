---
title: "Services List Page (/servicos)"
created: 2026-01-22T19:26:00-03:00
last_updated: 2026-01-22T19:26:00-03:00
priority: P2-M
estimated_hours: 4
actual_hours: 0
status: backlog
blockers: []
tags: [services, rush-cms, page]
---

# Services List Page (/servicos)

## Description
Create services list page showing all available services from Rush CMS with filtering/grid layout.

## Acceptance Criteria
- [ ] Create `src/pages/servicos/index.astro`
- [ ] Fetch all services from Rush CMS
- [ ] Grid layout of service cards
- [ ] Each card links to `/servicos/[slug]`
- [ ] Hero section: "Nossos Serviços"
- [ ] Optional: Filter by service type (residential/commercial)
- [ ] Responsive grid (3-2-1 columns)

## Design Specs
- **Grid:** 3 cols desktop, 2 tablet, 1 mobile
- **Cards:** Same style as home services section
- **Hero:** Simple title + subtitle

## Implementation Notes
- Reuse ServiceCard component from home
- Use Rush CMS: `getRushEntries('servicos')`
- Implement pagination if >12 services
- SEO: Meta description, title tag

## Dependencies
- T001 (Rush CMS client)
- T007 (ServiceCard component exists)

## Definition of Done
- [ ] Page accessible at /servicos
- [ ] All services displayed
- [ ] Cards match home style
- [ ] Links work to individual pages
- [ ] Responsive grid
- [ ] SEO meta tags present
