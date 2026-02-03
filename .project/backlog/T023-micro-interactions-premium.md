---
title: "Premium Micro-interactions"
created: 2026-02-03T19:44:00-03:00
last_updated: 2026-02-03T19:44:00-03:00
priority: P1-S
estimated_hours: 3
actual_hours: 0
status: backlog
blockers: []
tags: [ui, animations, premium, interactions]
depends_on: [T020, T021]
blocks: []
dependency_type: soft
related_files: [src/styles/app.css]
---

# Task: Premium Micro-interactions

## Objective

Implement 5-8 subtle, sophisticated micro-interactions using natural easing curves and proper animation timing. Replace current linear transitions with Disney's 12 Principles of Animation. Focus on button states, hover effects, scroll reveals, and magnetic cursors.

**Success:**
- [ ] All buttons have active:scale-95 press feedback
- [ ] Hover states use ease-out (0.4s cubic-bezier)
- [ ] Scroll-triggered fade-ins with stagger (150ms delays)
- [ ] Magnetic hover effect on CTA buttons
- [ ] Loading states with skeleton screens
- [ ] No linear transitions (all use natural easing)

## Context

**Why:** Current interactions use `transition-all duration-300` (linear easing) which feels robotic. Luxury brands use subtle, natural animations that delight without distracting.

**Audit Findings:**
- "Único easing: linear - robótico, não natural"
- "Micro-interactions 98% ausentes"
- "Falta feedback imediato (ripple, pulse)"
- "Services card hover muito dramático (-8px lift)"

**Reference:** Apple.com hover states, Stripe button interactions

## Implementation

### Phase 1: Easing System (1h)
- [ ] Define custom easing functions in `app.css`:
  ```css
  --ease-out: cubic-bezier(0, 0, 0.2, 1);
  --ease-in: cubic-bezier(0.4, 0, 1, 1);
  --ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  --ease-smooth: cubic-bezier(0.4, 0, 0.2, 1);
  ```
- [ ] Create transition utilities:
  - `.transition-smooth` (transform + opacity, 400ms, ease-out)
  - `.transition-quick` (200ms, ease-out)
  - `.transition-bounce` (600ms, ease-bounce)
- [ ] Replace all `transition-all` with specific properties
- [ ] Update hover durations: 300ms → 400ms

### Phase 2: Button Interactions (1h)
- [ ] Add press feedback to all CTAs:
  ```css
  active:scale-[0.96] active:brightness-90
  ```
- [ ] Implement magnetic hover (cursor attraction):
  - Create `magnetic-button.ts` script
  - Track mouse position, apply transform
  - Apply to primary CTAs only
- [ ] Add focus-visible styles:
  ```css
  focus-visible:ring-4 ring-gold/50 outline-none
  ```
- [ ] Create disabled state styles:
  ```css
  disabled:opacity-40 disabled:cursor-not-allowed
  ```
- [ ] Update `header.astro` CTA button
- [ ] Update `hero-section.astro` primary button
- [ ] Test keyboard navigation (Tab, Enter, Space)

### Phase 3: Scroll Animations (1h)
- [ ] Install Intersection Observer utility
- [ ] Create `reveal-on-scroll.ts` script
- [ ] Add data-reveal attribute to sections:
  ```html
  <section data-reveal="fade-up" data-delay="0">
  ```
- [ ] Implement fade-up, fade-in, slide-left variants
- [ ] Add stagger delays (0ms, 150ms, 300ms, 450ms)
- [ ] Apply to card grids (reasons, services, guarantees)
- [ ] Test scroll performance (no jank at 60fps)
- [ ] Add `prefers-reduced-motion` media query support

## Definition of Done

### Functionality
- [ ] All buttons respond to press (active state)
- [ ] Hover states feel natural (not robotic)
- [ ] Scroll reveals trigger at correct viewport position
- [ ] Magnetic buttons attract cursor smoothly
- [ ] Animations respect user's motion preferences
- [ ] No animation on first paint (server-rendered state)

### Testing
- [ ] Manual: Press all buttons (mouse + touch)
- [ ] Manual: Hover CTAs, verify magnetic effect
- [ ] Manual: Scroll page, verify stagger reveals
- [ ] Accessibility: Enable "Reduce motion", verify animations disabled
- [ ] Performance: 60fps during animations (Chrome DevTools)

### Performance
- [ ] No layout shifts (use transform, not margin/padding)
- [ ] GPU-accelerated properties only (transform, opacity)
- [ ] Intersection Observer debounced (no excessive firing)
- [ ] Total JS for interactions <5KB gzipped

### Security
- [ ] N/A (client-side only)

### Code Quality
- [ ] Easing functions reusable (CSS custom properties)
- [ ] Scripts modular (separate files)
- [ ] No inline event handlers
- [ ] Comments explain interaction purpose

### Documentation
- [ ] Time logged
- [ ] Interaction guidelines documented
- [ ] Easing curves reference chart

### Git
- [ ] Atomic commits:
  - `feat(interactions): add natural easing system`
  - `feat(interactions): implement button press feedback`
  - `feat(interactions): add scroll reveal animations`

## Testing

### Manual
- [ ] Press primary CTA (should scale to 96%, then bounce back)
- [ ] Hover CTA (cursor should attract button slightly)
- [ ] Scroll to services section (cards should fade-up with stagger)
- [ ] Tab through navigation (focus ring visible)
- [ ] Enable "Reduce motion" in OS settings, reload page (no animations)

**Performance Monitor:**
```javascript
// Chrome DevTools > Performance
// Record scroll interaction
// Verify: 60fps (16.6ms frames), no long tasks
```

## Blockers & Risks

**Current:**
- [ ] None

**Potential:**
1. Risk: Magnetic hover too distracting - Mitigation: Make subtle (max 6px movement)
2. Risk: Scroll animations janky on mobile - Mitigation: Use `will-change`, test on real devices
3. Risk: Accessibility issues - Mitigation: Implement `prefers-reduced-motion` from start

## References

- Easing Functions: https://easings.net/
- Intersection Observer: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
- Disney's 12 Principles: https://en.wikipedia.org/wiki/Twelve_basic_principles_of_animation
- Audit: Section 10 "Motion Design Principles"
