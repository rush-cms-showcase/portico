---
title: "Setup Project Foundation"
created: 2026-01-22T19:24:00-03:00
last_updated: 2026-01-22T19:24:00-03:00
priority: P1-S
estimated_hours: 2
actual_hours: 0
status: backlog
blockers: []
tags: [setup, foundation, astro]
---

# Setup Project Foundation

## Description
Create base project structure with layouts, components directory, and essential configuration files.

## Acceptance Criteria
- [ ] Create base layout (`src/layouts/base-layout.astro`)
- [ ] Setup global styles (fonts, CSS reset)
- [ ] Create components directory structure
- [ ] Configure Rush CMS client (`src/lib/rush/`)
- [ ] Add TypeScript types for Rush (`src/types/rush.d.ts`)
- [ ] Create `rush.config.ts` with proper routes/navs
- [ ] Test dev server runs without errors

## Implementation Notes
- Use Inter for body, Montserrat for headings
- Follow no-semicolon rule strictly
- Ensure proper TypeScript strict mode

## Dependencies
- None (foundation task)

## Definition of Done
- [ ] All files created and properly typed
- [ ] `pnpm dev` runs without errors
- [ ] Tailwind colors working (test with portico-blue)
