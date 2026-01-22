---
title: "Home Page - The Reason Section"
created: 2026-01-22T19:24:00-03:00
last_updated: 2026-01-22T19:24:00-03:00
priority: P1-S
estimated_hours: 2
actual_hours: 0
status: backlog
blockers: []
tags: [home, content, ui]
---

# Home Page - The Reason Section

## Description
Create "Why do most renovations go wrong?" section with contrast messaging.

## Acceptance Criteria
- [ ] Create `src/components/reason-section.astro`
- [ ] Title: "Why do most renovations go wrong?"
- [ ] Body text about starting with life, not walls
- [ ] Highlighted quote card: "We don't renovate spaces..."
- [ ] Responsive layout
- [ ] Proper spacing and typography

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
- [ ] Matches wireframe design
- [ ] Responsive on mobile
- [ ] Accessible (proper heading hierarchy)
- [ ] No layout shift
