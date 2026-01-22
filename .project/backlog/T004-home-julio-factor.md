---
title: "Home Page - Julio Factor Section"
created: 2026-01-22T19:24:00-03:00
last_updated: 2026-01-22T19:24:00-03:00
priority: P1-S
estimated_hours: 3
actual_hours: 0
status: backlog
blockers: []
tags: [home, authority, ui]
---

# Home Page - Julio Factor Section

## Description
Build authority section featuring Julio as the maestro/strategist with photo and credentials.

## Acceptance Criteria
- [ ] Create `src/components/julio-section.astro`
- [ ] Title: "The Maestro of Your Transformation"
- [ ] Julio photo (vertical/square portrait)
- [ ] Body text about strategist role
- [ ] Social proof: "20 years of experience..."
- [ ] Responsive layout (photo left on desktop, top on mobile)

## Design Specs
- **Photo:** Natural style, not corporate
- **Layout:** 2-column on desktop (40% photo, 60% text)
- **Colors:** Blue headings, gray body text

## Implementation Notes
- Use Astro Image component
- Optimize photo (WebP, max 150KB)
- Ensure natural/humanized feel (not stock photo)

## Dependencies
- T001 (Base layout)

## Definition of Done
- [ ] Photo properly sized and optimized
- [ ] Desktop 2-column layout works
- [ ] Mobile stacks photo on top
- [ ] Text is readable and well-spaced
- [ ] Matches brand tone (human expert)
