---
title: "Premium Typography System"
created: 2026-02-03T19:44:00-03:00
last_updated: 2026-02-03T19:44:00-03:00
priority: P1-S
estimated_hours: 2
actual_hours: 0
status: in-progress
blockers: []
tags: [design-system, typography, premium]
depends_on: [T020]
blocks: [T023]
dependency_type: soft
related_files: [src/styles/app.css, tailwind.config.ts]
---

# Task: Premium Typography System

## Objective

Replace generic font stack (Lexend Deca + Nunito Sans) with luxury-tier typography using serif displays and premium sans fonts. Implement mathematical type scale (Major Third 1.25) with proper line-height and letter-spacing.

**Success:**
- [ ] Premium font stack loaded (Cormorant Garamond + Inter + Futura PT)
- [ ] Mathematical type scale implemented (16px base, 1.25 ratio)
- [ ] Proper line-heights for Display (1.1), Headline (1.3), Body (1.6)
- [ ] Negative letter-spacing on large displays (-0.02em)
- [ ] All components migrated to new scale

## Context

**Why:** Current fonts (Lexend Deca/Nunito Sans) lack personality and premium feel. Type scale has disproportional jumps (48px→72px = 150%). Luxury brands use serif displays for elegance.

**Audit Findings:**
- Lexend Deca = generic, sans personality
- Type jump 48px→72px too aggressive (should be 1.25 ratio)
- Missing intermediate sizes (h2, h3 hierarchy weak)
- No letter-spacing adjustments for large text
- Line-height inconsistent (tight on body, relaxed on headlines - backwards)

**Reference Fonts:** 
- Serif: Cormorant Garamond (Chanel-like), Playfair Display
- Sans: Inter (modern neutral), Futura PT (geometric luxury)

## Implementation

### Phase 1: Font Stack Setup (1h)
- [x] Add Google Fonts to `base-layout.astro` head
- [x] Load Cormorant Garamond (400, 600, 700)
- [x] Load Inter (400, 600, 700)
- [x] Add font-display: swap for performance
- [x] Define CSS custom properties in `app.css`
- [x] Set `--font-display`, `--font-body`, `--font-accent`
- [ ] Update Tailwind config with font families

### Phase 2: Type Scale Implementation (1h)
- [ ] Define 8-step scale in Tailwind config:
  - xs: 12px (0.75rem)
  - sm: 14px (0.875rem)
  - base: 16px (1rem)
  - lg: 20px (1.25rem)
  - xl: 25px (1.5625rem)
  - 2xl: 31px (1.953rem)
  - 3xl: 39px (2.441rem)
  - 4xl: 49px (3.052rem)
  - 5xl: 61px (3.815rem)
- [ ] Apply line-height rules:
  - Display (.leading-display): 1.1
  - Headline (.leading-headline): 1.3
  - Body (.leading-body): 1.6
- [ ] Add letter-spacing utilities:
  - .tracking-tight-display: -0.02em
  - .tracking-tight: -0.01em
  - .tracking-normal: 0em
- [ ] Migrate hero to text-5xl with Cormorant
- [ ] Migrate section titles to text-3xl/4xl
- [ ] Migrate card titles to text-xl with Inter
- [ ] Migrate body text to text-base with line-height 1.6

## Definition of Done

### Functionality
- [ ] All text rendered with new fonts
- [ ] Hierarchy visually clear (h1 > h2 > h3 > body)
- [ ] No FOIT/FOUT (fonts load smoothly)
- [ ] Responsive scales properly mobile→desktop
- [ ] No layout shifts during font load

### Testing
- [ ] Manual: Verify all 4 pages render correctly
- [ ] Performance: Font load time <300ms (check Network tab)
- [ ] Accessibility: Text remains readable during load (fallback fonts)
- [ ] Visual: Screenshot comparison before/after

### Performance
- [ ] WOFF2 fonts only (no TTF/EOT bloat)
- [ ] Font subsetting if possible (Latin only)
- [ ] Preload critical fonts (hero h1)
- [ ] Total font size <200KB combined

### Code Quality
- [ ] Tailwind config uses custom properties
- [ ] No inline font-family declarations
- [ ] Consistent class usage (.font-display vs .font-body)
- [ ] Comments explain scale ratio

### Documentation
- [ ] Time logged
- [ ] Typography usage guide in README
- [ ] Type scale chart documented

### Git
- [ ] Atomic commit: `refactor(typography): implement premium type system`

## Testing

### Manual
- [ ] Hero headline: Cormorant Garamond, 61px, line-height 1.1
- [ ] Section titles: Cormorant Garamond, 39px, line-height 1.3
- [ ] Card titles: Inter, 20px, line-height 1.3
- [ ] Body text: Inter, 16px, line-height 1.6
- [ ] CTAs: Futura PT (if available), Inter fallback

**Font Load Verification:**
```bash
# Chrome DevTools > Network > Filter: Font
# Check: WOFF2 format, <300ms load time, no FOUT flash
```

## Blockers & Risks

**Current:**
- [ ] None

**Potential:**
1. Risk: Cormorant Garamond too ornate - Mitigation: Test with stakeholder, have Playfair Display as backup
2. Risk: Font load performance - Mitigation: Preload + font-display swap

## References

- Type Scale Calculator: https://typescale.com/ (Major Third 1.25)
- Google Fonts: Cormorant Garamond, Inter
- Audit: Section 5 "Typography Scale & Vertical Rhythm"
