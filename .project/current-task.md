---
title: "Premium Color System Refactor"
created: 2026-02-03T19:44:00-03:00
last_updated: 2026-02-03T19:44:00-03:00
priority: P1-S
estimated_hours: 2
actual_hours: 0
status: in-progress
blockers: []
tags: [design-system, ui, premium]
depends_on: []
blocks: [T021, T022, T023]
dependency_type: hard
related_files: [src/styles/app.css]
---

# Task: Premium Color System Refactor

## Objective

Replace current generic corporate color palette (blue #2563a8 + orange #ffa500) with luxury-tier palette that conveys sophistication, heritage, and high-end positioning for wealthy clientele.

**Success:**
- [ ] New color palette implemented with Navy, Charcoal, Gold, Bronze tones
- [ ] All WCAG AA contrast ratios verified (minimum 4.5:1)
- [ ] Color psychology aligned with luxury construction market
- [ ] All components updated to use new palette

## Context

**Why:** Current color system signals commodity/e-commerce (orange urgency) and generic corporate (blue). Luxury brands use Navy (heritage), Gold (prestige), Charcoal (sophistication).

**Audit Findings:**
- Current orange (#ffa500) = urgency/conversion (inappropriate for premium)
- Current blue (#2563a8) = corporate/tech (lacks exclusivity)
- WCAG violation: white/80 on blue = 3.8:1 contrast (fails AA)

**Reference Brands:** Rolex, Ralph Lauren, Armani Casa, Bottega Veneta

## Implementation

### Phase 1: Design Tokens (1h)
- [x] Define luxury palette in `app.css` with custom properties
- [x] Create Navy scale (#0A1F3D base with 9 shades)
- [x] Create Charcoal scale (#2B2B2B base with 9 shades)
- [x] Create Gold accent (#C9A961 with 9 shades)
- [x] Create Bronze accent (#8C6840 with 9 shades)
- [x] Create neutral Stone/Marble backgrounds (#E8E4DE, #F5F3EF)
- [ ] Document color usage guidelines (primary, accent, neutral)

### Phase 2: Component Migration (1h)
- [x] Update `hero-section.astro` gradient overlay to Navy
- [x] Replace orange CTAs with Gold accent
- [x] Update `header.astro` with new hover states
- [x] Migrate `reason-section.astro` card borders
- [x] Update `guarantees-section.astro` background to Navy-900
- [x] Update `services-section.astro` hover colors to Gold
- [ ] Fix all text contrast ratios (run WCAG checker)
- [ ] Test dark mode compatibility

## Definition of Done

### Functionality
- [ ] Works on all pages (index, servicos, sobre, metodo)
- [ ] No visual regressions in mobile/tablet/desktop
- [ ] Responsive behavior maintained
- [ ] Hover states smooth and premium-feeling

### Testing
- [ ] Manual: Visit all 4 pages in Chrome/Firefox/Safari
- [ ] WCAG Checker: All text passes AA (4.5:1 minimum)
- [ ] Screenshot comparison: Before/after for stakeholder review
- [ ] Coverage: N/A (visual change)

### Performance
- [ ] No additional CSS bloat (keep under 3KB added)
- [ ] No layout shifts (CLS = 0)
- [ ] Page load time unchanged

### Security
- [ ] N/A (CSS only)

### Code Quality
- [ ] CSS custom properties follow naming convention
- [ ] No hard-coded hex values in components (use tokens)
- [ ] Comments explain color usage psychology
- [ ] Clean git diff (no unrelated changes)

### Documentation
- [ ] Time logged
- [ ] ADR created for color palette decision
- [ ] Color usage guide in component README

### Git
- [ ] Atomic commit: `refactor(design): implement luxury color system`
- [ ] No conflicts

## Testing

### Manual
- [ ] Happy path: All pages load with new colors
- [ ] Hover states: All interactive elements show Gold accent
- [ ] Contrast: Read all text comfortably on all backgrounds
- [ ] Dark backgrounds: Navy sections have proper text visibility

**WCAG Contrast Verification:**
```bash
# Use online tool: https://webaim.org/resources/contrastchecker/
# Verify these combinations:
Navy-900 (#081320) + White = ?:1 (need >4.5:1)
Navy-500 (#2563a8) + White = ?:1
Gold (#C9A961) + Navy-900 = ?:1
Charcoal (#2B2B2B) + Stone (#E8E4DE) = ?:1
```

## Blockers & Risks

**Current:**
- [ ] None

**Potential:**
1. Risk: Stakeholder dislikes color change - Mitigation: Create comparison screenshots before deployment
2. Risk: Accessibility issues - Mitigation: Run WCAG checker before commit

## References

- Luxury Brand Colors: Rolex (Navy #00305F), Chanel (Beige #C9A961)
- WCAG Contrast Checker: https://webaim.org/resources/contrastchecker/
- Audit Report: Section 6 "Color System & Contrast Ratios"
