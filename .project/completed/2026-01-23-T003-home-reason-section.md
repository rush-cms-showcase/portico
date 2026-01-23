---
title: "Home Page - The Reason Section"
created: 2026-01-22T19:24:00-03:00
last_updated: 2026-01-23T13:54:00-03:00
priority: P1-S
estimated_hours: 2
actual_hours: 0.3
status: completed
blockers: []
tags: [home, content, ui]
---

# Home Page - The Reason Section

## Description
Create "Why do most renovations go wrong?" section with contrast messaging.

## Acceptance Criteria
- [x] Create `src/components/reason-section.astro`
- [x] Title: "Why do most renovations go wrong?"
- [x] Body text about starting with life, not walls
- [x] Highlighted quote card: "We don't renovate spaces..."
- [x] Responsive layout
- [x] Proper spacing and typography

## Design Specs
- **Background:** Light gray (#F7F8F9)
- **Quote card:** Light orange background or orange left border
- **Typography:** H2 for title, body text in gray-700

## Implementation Notes
- Use blockquote semantic HTML for highlight
- Center-aligned on desktop, left-aligned on mobile

## Dependencies
- T001 (Base layout)

## Definition of Done
- [x] Matches wireframe design
- [x] Responsive on mobile
- [x] Accessible (proper heading hierarchy)
- [x] No layout shift
