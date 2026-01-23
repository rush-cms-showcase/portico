---
title: "Home Page - Client Filter Section"
created: 2026-01-22T19:24:00-03:00
last_updated: 2026-01-22T19:24:00-03:00
priority: P1-S
estimated_hours: 2
actual_hours: 0
status: backlog
blockers: []
tags: [home, qualification, ui]
---

# Home Page - Client Filter Section

## Description
Create "Are we the right choice for you?" section to qualify leads and create exclusivity.

## Acceptance Criteria
- [ ] Create `src/components/client-filter-section.astro`
- [ ] Title: "Are we the right choice for you?"
- [ ] 2 columns: "Yes, if you seek" and "No, if you seek"
- [ ] List items in each column
- [ ] Footer text: "And that's okay..."
- [ ] Responsive layout (2 cols desktop, stack mobile)

## Design Specs
- **Colors:** Blue (#2563A8) for "Yes" column, Gray (#4A5568) for "No"
- **Layout:** 50/50 split on desktop, stacked on mobile
- **Lists:** Bullet points or checkmarks

## Implementation Notes
- Use CSS Grid for equal columns
- Consider subtle background color for each column
- Maintain readability and scannability

## Dependencies
- T001 (Base layout)

## Definition of Done
- [ ] Both columns visible
- [ ] Content matches wireframe
- [ ] Responsive layout works
- [ ] Colors applied correctly
- [ ] Footer text present
