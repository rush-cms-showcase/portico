---
title: "Home Page - 4 Guarantees Section"
created: 2026-01-22T19:24:00-03:00
last_updated: 2026-01-22T19:24:00-03:00
priority: P1-S
estimated_hours: 3
actual_hours: 0
status: backlog
blockers: []
tags: [home, guarantees, ui]
---

# Home Page - 4 Guarantees Section

## Description
Create "4 Peace of Mind Guarantees" section to eliminate client objections.

## Acceptance Criteria
- [ ] Create `src/components/guarantees-section.astro`
- [ ] Title: "4 Peace of Mind Guarantees"
- [ ] 4 guarantees with checkmarks/bullets
  - [ ] Deadline Guarantee
  - [ ] Budget Guarantee
  - [ ] Cleanup Guarantee
  - [ ] Structural Guarantee
- [ ] Each with headline + detail text
- [ ] Responsive layout

## Design Specs
- **Checkmarks:** Blue (#2563A8) or simple bullets
- **Layout:** Vertical list with alternating bg or cards
- **Typography:** Bold headlines, regular detail text

## Implementation Notes
- Use semantic list markup (ul/li)
- Consider zebra striping or card layout
- Emphasize "guarantee" in each headline

## Dependencies
- T001 (Base layout)

## Definition of Done
- [ ] All 4 guarantees present
- [ ] Readable and scannable
- [ ] Responsive layout works
- [ ] Matches wireframe
- [ ] Proper semantic HTML
