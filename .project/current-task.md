---
title: "Premium Spacing & Whitespace System"
created: 2026-02-03T19:44:00-03:00
last_updated: 2026-02-03T19:44:00-03:00
priority: P2-S
estimated_hours: 2
actual_hours: 0
status: in-progress
blockers: []
tags: [design-system, layout, spacing]
depends_on: [T020]
blocks: []
dependency_type: soft
related_files: [src/components/sections/**]
---

# Task: Premium Spacing & Whitespace System

## Objective

Implement 8px baseline grid system and increase whitespace ratio from current 35% to luxury target of 50-60%. Apply golden ratio progression to section padding (60px → 100px → 80px → 120px) instead of uniform 80px.

**Success:**
- [ ] All spacing uses 8px multiples (gap-4, gap-8, gap-12, gap-16)
- [ ] Section padding varies rhythmically (not uniform)
- [ ] Card padding increased from p-8 (32px) to p-12 (48px)
- [ ] Whitespace ratio increased to 50%+
- [ ] Visual breathing improved

## Context

**Why:** Current layout is too dense (65% content, 35% whitespace). All sections have same 80px padding creating monotonous rhythm. Luxury brands use abundant whitespace (Bottega Veneta ~60% whitespace).

**Audit Findings:**
- "Content Density: 65% - MUITO DENSO (target: 40-50%)"
- "All sections py-20 (80px) - sem ritmo visual"
- "Falta whitespace abundante para respirar"

**Mathematical Basis:** 8px baseline grid (Material Design standard)

## Implementation

### Phase 1: Baseline Grid (1h)
- [x] Update Tailwind config with 8px-based spacing scale
- [x] Document spacing usage guidelines:
  - Component internal: gap-4 (16px), gap-6 (24px)
  - Component padding: p-8 (32px), p-12 (48px)
  - Section spacing: py-16 (64px), py-20 (80px), py-24 (96px), py-32 (128px)
- [x] Audit all components for non-8px spacing
- [x] Replace arbitrary values with scale:
  - `mb-10` (40px) → `mb-12` (48px)
  - `gap-6` (24px) → keep (aligned)
  - Custom values → nearest 8px multiple

### Phase 2: Section Rhythm (1h)  
- [x] Apply golden ratio progression to sections:
  ```astro
  <HeroSection class="py-20" />        <!-- 80px -->
  <ReasonSection class="py-24" />      <!-- 96px -->
  <JulioSection class="py-16" />       <!-- 64px -->
  <MethodSection class="py-32" />      <!-- 128px -->
  <GuaranteesSection class="py-20" />  <!-- 80px -->
  <ServicesSection class="py-28" />    <!-- 112px -->
  ```
- [x] Increase card padding:
  - Reason cards: `p-8` → `p-12`
  - Service cards: `p-8` → `p-12`
  - Guarantee cards: `p-6` → `p-10`
- [x] Add generous margins between card grids:
  - `gap-8` (32px) → `gap-12` (48px)
- [ ] Test visual breathing (compare before/after screenshots)

## Definition of Done

### Functionality
- [ ] All spacing values divisible by 8
- [ ] Section heights vary (not uniform)
- [ ] Cards have room to breathe
- [ ] Content doesn't feel cramped
- [ ] Mobile spacing scales down proportionally

### Testing
- [ ] Visual: Screenshot comparison (before/after)
- [ ] Manual: Scroll page, verify rhythm variation
- [ ] Measure: Calculate whitespace ratio (target >50%)
- [ ] Responsive: Verify mobile doesn't have excessive spacing

### Performance
- [ ] N/A (CSS only, no performance impact)

### Code Quality
- [ ] No arbitrary spacing values (`p-[37px]`)
- [ ] All spacing from Tailwind scale
- [ ] Comments explain rhythm choices

### Documentation
- [ ] Time logged
- [ ] Spacing system guide in README

### Git
- [ ] Atomic commit: `refactor(spacing): implement 8px baseline grid`

## Testing

### Manual
- [ ] Desktop: Sections feel varied (not monotonous)
- [ ] Desktop: Cards have generous padding
- [ ] Mobile: Spacing reduces appropriately (no overflow)
- [ ] Whitespace calculation:
  ```
  Total viewport height: 5000px
  Content height: ~2200px
  Whitespace: ~2800px
  Ratio: 56% ✓ (target: >50%)
  ```

## Blockers & Risks

**Current:**
- [ ] None

**Potential:**
1. Risk: Too much whitespace on mobile - Mitigation: Reduce padding on small screens (py-20 → py-12 on mobile)

## References

- Material Design 8dp Grid: https://material.io/design/layout/spacing-methods.html
- Audit: Section 7 "Spatial Design & White Space"
