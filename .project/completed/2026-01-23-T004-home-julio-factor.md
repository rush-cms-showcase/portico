---
title: "Home Page - Julio Factor Section"
created: 2026-01-22T19:24:00-03:00
last_updated: 2026-01-23T13:57:00-03:00
priority: P1-S
estimated_hours: 3
actual_hours: 0.4
status: completed
blockers: []
tags: [home, authority, ui]
---

# Home Page - Julio Factor Section

## Description
Build authority section featuring Julio as the maestro/strategist with photo and credentials.

## Acceptance Criteria
- [x] Create `src/components/julio-section.astro`
- [x] Title: "The Maestro of Your Transformation"
- [x] Julio photo (vertical/square portrait)
- [x] Body text about strategist role
- [x] Social proof: "20 years of experience..."
- [x] Responsive layout (photo left on desktop, top on mobile)

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
- [x] Photo properly sized and optimized
- [x] Desktop 2-column layout works
- [x] Mobile stacks photo on top
- [x] Text is readable and well-spaced
- [x] Matches brand tone (human expert)
