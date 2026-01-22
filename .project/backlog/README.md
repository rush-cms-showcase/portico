# Backlog - Pórtico Reformas v0.1.0-beta.1

## Overview
This backlog contains all tasks to deliver the first beta version of the Pórtico Reformas website for local development testing.

## Task Summary (18 tasks)

### Phase 1: Foundation (2-6h total)
- **T001** - Setup Project Foundation (2h) - P1-S
- **T011** - Setup i18n Locale System (2h) - P1-S

### Phase 2: Home Page (26h total)
- **T002** - Home Hero Section (3h) - P1-S
- **T003** - Home Reason Section (2h) - P1-S
- **T004** - Home Julio Factor (3h) - P1-S
- **T005** - Home Method 4P (4h) - P1-M
- **T006** - Home Guarantees (3h) - P1-S
- **T007** - Home Services with Rush CMS (5h) - P1-M
- **T008** - Home Client Filter (2h) - P1-S
- **T009** - Home FAQ Accordion (4h) - P1-M

### Phase 3: Global Components (4h total)
- **T010** - Global Header and Footer (4h) - P1-M

### Phase 4: Secondary Pages (22h total)
- **T012** - Services List Page (4h) - P2-M
- **T013** - Service Detail Page (6h) - P2-M
- **T014** - Contact Page with Form (5h) - P1-M
- **T015** - About Page (3h) - P2-S
- **T016** - Method Page (4h) - P2-S

### Phase 5: Polish & Launch (10h total)
- **T017** - SEO and Performance (4h) - P2-M
- **T018** - Testing and QA for Beta (6h) - P1-M

## Total Estimated Hours: 64h

## Priority Breakdown
- **P1 (Critical):** 10 tasks (40h) - Must complete for beta
- **P2 (High):** 8 tasks (24h) - Should complete for beta

## Dependencies
All tasks depend on **T001** (Foundation).

Rush CMS-dependent tasks:
- T007, T012, T013, T014

## Execution Order (Recommended)

### Week 1: Foundation + Home (20h)
1. T001 - Foundation
2. T011 - i18n
3. T002 - Hero
4. T010 - Header/Footer
5. T003 - Reason
6. T004 - Julio

### Week 2: Home Completion (18h)
7. T005 - Method 4P
8. T006 - Guarantees
9. T007 - Services (Rush CMS)
10. T008 - Filter
11. T009 - FAQ

### Week 3: Pages (18h)
12. T014 - Contact (priority)
13. T012 - Services List
14. T013 - Service Detail
15. T015 - About

### Week 4: Polish & Launch (8h)
16. T016 - Method Page
17. T017 - SEO/Performance
18. T018 - Testing/QA

## Definition of Done (Beta Release)
- All P1 tasks completed
- Home page fully functional
- Contact form working
- Services pages integrated with Rush CMS
- Lighthouse scores: Performance 95+, Accessibility 100, SEO 100
- Cross-browser tested (Chrome, Firefox, Safari)
- Mobile responsive (iOS + Android)
- No console errors
- Client approval obtained

## Notes
- Site language: pt_BR (Brazilian Portuguese)
- Documentation: English
- All strings centralized in `src/locales/pt_BR.ts`
- Rush CMS endpoints assumed to be ready
- Design follows brand identity doc strictly

---

Last updated: 2026-01-22
Total tasks: 18
Status: Ready for execution
