---
title: "Home Page - Hero Section"
created: 2026-01-22T19:24:00-03:00
last_updated: 2026-01-22T19:24:00-03:00
priority: P1-S
estimated_hours: 3
actual_hours: 0
status: backlog
blockers: []
tags: [home, hero, ui]
---

# Home Page - Hero Section

## Description
Implement hero section with headline, subheadline, CTA button, and background image.

## Acceptance Criteria
- [ ] Create `src/components/hero-section.astro`
- [ ] Implement headline: "Before renovating, we understand how you live"
- [ ] Add subheadline with geo-targeting placeholder
- [ ] CTA button "Talk to a Specialist Now" (smooth scroll to contact)
- [ ] Responsive layout (mobile/desktop)
- [ ] Background image optimized (WebP, lazy load)
- [ ] Proper TypeScript types for props

## Design Specs
- **Colors:** Blue #2563A8 for CTA, white text on dark overlay
- **Typography:** Montserrat Bold for headline, Inter for subheadline
- **CTA:** Blue background, orange hover (#FFA500)

## Implementation Notes
- Use Astro Image component for optimization
- Add smooth scroll behavior for CTA click
- Mobile-first responsive design

## Dependencies
- T001 (Base layout must exist)

## Definition of Done
- [ ] Desktop layout matches wireframe
- [ ] Mobile responsive
- [ ] CTA smooth scroll works
- [ ] Image optimized (< 200KB)
- [ ] No TypeScript errors
