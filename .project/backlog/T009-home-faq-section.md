---
title: "Home Page - FAQ Section"
created: 2026-01-22T19:24:00-03:00
last_updated: 2026-01-22T19:24:00-03:00
priority: P1-M
estimated_hours: 4
actual_hours: 0
status: backlog
blockers: []
tags: [home, faq, accordion, interactive]
---

# Home Page - FAQ Section

## Description
Create accordion-style FAQ section to eliminate objections before contact.

## Acceptance Criteria
- [ ] Create `src/components/faq-section.astro`
- [ ] Title: "Frequently Asked Questions"
- [ ] 5 FAQ items as accordion
  - [ ] How can I trust Portico?
  - [ ] What if material prices rise?
  - [ ] How will I know the progress?
  - [ ] Why does planning take longer?
  - [ ] Do you serve all of Porto Alegre?
- [ ] First item open by default
- [ ] Expand/collapse interaction
- [ ] Smooth animation

## Design Specs
- **Accordion:** Click to expand/collapse
- **Icons:** Arrow or plus/minus indicator
- **Animation:** Smooth height transition (300ms)
- **Typography:** Bold question, regular answer

## Implementation Notes
- Use client-side JavaScript for accordion (small island)
- Consider using `<details>` HTML element for semantics
- Ensure keyboard accessibility (Tab, Enter)
- Add ARIA attributes for screen readers

## Dependencies
- T001 (Base layout)

## Definition of Done
- [ ] All 5 FAQs present with correct content
- [ ] Accordion open/close works
- [ ] First item open by default
- [ ] Smooth animation
- [ ] Keyboard accessible
- [ ] Mobile responsive
