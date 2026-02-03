---
title: "Atomic Design Component Refactor"
created: 2026-02-03T19:44:00-03:00
last_updated: 2026-02-03T20:50:00-03:00
priority: P2-M
estimated_hours: 5
actual_hours: 2
status: in-progress
blockers: []
tags: [refactor, components, architecture]
depends_on: [T020, T021]
blocks: []
dependency_type: soft
related_files: [src/components/**]
---

# Task: Atomic Design Component Refactor

## Objective

Restructure monolithic section components into Atomic Design pattern (atoms/molecules/organisms). Create reusable base Card component that all card variants extend. Reduce code duplication from 3 separate card implementations to 1 flexible component.

**Success:**
- [ ] Directory structure: atoms/, molecules/, organisms/
- [ ] Base Card.astro component with variant props
- [ ] Icon, Button, Badge, Heading atoms created
- [ ] All sections refactored to use atomic components
- [ ] Code duplication eliminated (DRY)

## Context

**Why:** Current components are monolithic (68-81 lines each) with duplicated card markup. Reason, Service, and Guarantee cards share 80% of code but are separate files. Atomic Design enables consistency and rapid iteration.

**Audit Findings:**
- "Componentes monolíticos (68+ linhas)"
- "3 card implementations - deveria reutilizar base"
- "Props design fraco (apenas title)"

**Benefits:**
- Change card shadow globally in 1 file
- Add new card variant in 10 lines vs 80
- Consistent hover/focus states

## Implementation

### Phase 1: Atoms (2h)
- [x] Create `src/components/atoms/` directory
- [x] Create `icon.astro` (iconify wrapper with size/color props)
- [x] Create `button.astro` with variants:
  ```typescript
  variant: 'primary' | 'secondary' | 'ghost' | 'outline'
  size: 'sm' | 'md' | 'lg'
  ```
- [ ] Create `badge.astro` (colored pills like "Multa por atraso")
- [x] Create `heading.astro` with level/size props
- [ ] Create `image.astro` (Astro Image wrapper with lazy loading)
- [x] Update sections to use new atoms (hero, reason, showcase)

### Phase 2: Molecules (2h)
- [x] Create `src/components/molecules/` directory
- [x] Create `card.astro` base component:
  ```typescript
  interface CardProps {
    variant: 'default' | 'glass' | 'elevated'
    padding: 'sm' | 'md' | 'lg'
    hover: 'lift' | 'glow' | 'none'
    icon?: string
    title?: string
  }
  ```
- [ ] Create `service-card.astro` (extends Card with specific props)
- [ ] Create `guarantee-card.astro` (extends Card)
- [ ] Create `reason-card.astro` (extends Card)
- [ ] Create `nav-link.astro` (header navigation item)

### Phase 3: Migration (1h)
- [x] Refactor `reason-section.astro` to use Card
- [ ] Refactor `services-section.astro` to use ServiceCard
- [ ] Refactor `guarantees-section.astro` to use GuaranteeCard
- [ ] Delete duplicated card markup (save ~120 lines total)
- [ ] Test all sections render identically
- [ ] Update `header.astro` to use NavLink + Button atoms
- [ ] Verify no visual regressions

## Definition of Done

### Functionality
- [ ] All sections render identically to before refactor
- [ ] Card hover states work consistently
- [ ] Icons display correctly with new Icon atom
- [ ] Buttons maintain all variants (primary, ghost, etc.)
- [ ] No prop drilling issues (proper TypeScript types)

### Testing
- [ ] Manual: Visit all 4 pages, verify no changes
- [ ] Visual regression: Screenshot comparison before/after
- [ ] TypeScript: `astro check` passes with no errors
- [ ] Unit: N/A (Astro components)

### Performance
- [ ] Bundle size decreased (less duplication)
- [ ] No runtime performance change
- [ ] Tree-shaking works (unused variants removed)

### Code Quality
- [ ] All components <50 lines
- [ ] Props have TypeScript interfaces
- [ ] Default props documented
- [ ] Component README with usage examples

### Documentation
- [ ] Time logged
- [ ] ADR for Atomic Design decision
- [ ] Component library README with examples

### Git
- [ ] Atomic commits:
  - `refactor(components): create atomic atoms layer`
  - `refactor(components): create molecule components`
  - `refactor(sections): migrate to atomic design`

## Testing

### Manual
- [ ] Home page: All sections render correctly
- [ ] Servicos page: Cards use new components
- [ ] Sobre page: Verify layouts unchanged
- [ ] Metodo page: Verify content intact

**TypeScript Verification:**
```bash
pnpm astro check
# Should pass with 0 errors
```

**Visual Regression:**
```bash
# Before refactor: Screenshot all pages
# After refactor: Screenshot all pages
# Compare pixel-by-pixel (use tool like Percy or manual)
```

## Blockers & Risks

**Current:**
- [ ] None

**Potential:**
1. Risk: Breaking changes to existing sections - Mitigation: Migrate one section at a time, test immediately
2. Risk: Prop complexity explosion - Mitigation: Keep props simple, use composition over configuration
3. Risk: TypeScript errors during migration - Mitigation: Run `astro check` after each component

## References

- Atomic Design: https://bradfrost.com/blog/post/atomic-web-design/
- Astro Components: https://docs.astro.build/en/core-concepts/astro-components/
- Audit: Section 11 "Component System Architecture"
