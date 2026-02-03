---
title: "Accessibility Compliance (WCAG AA)"
created: 2026-02-03T19:44:00-03:00
last_updated: 2026-02-03T19:44:00-03:00
priority: P2-S
estimated_hours: 3
actual_hours: 0
status: backlog
blockers: []
tags: [a11y, accessibility, wcag]
depends_on: [T020]
blocks: []
dependency_type: soft
related_files: [src/components/**]
---

# Task: Accessibility Compliance (WCAG AA)

## Objective

Achieve WCAG 2.1 Level AA compliance by implementing skip links, ARIA labels, keyboard navigation focus states, and screen reader support. Fix all accessibility violations identified in audit.

**Success:**
- [ ] All WCAG AA criteria met (axe DevTools 0 violations)
- [ ] Keyboard navigation works (Tab, Enter, Esc, Arrow keys)
- [ ] Screen reader announces all interactive elements
- [ ] Focus states visible and well-designed
- [ ] Skip links implemented

## Context

**Why:** Current site has critical accessibility gaps: no skip links, no ARIA labels, no custom focus states. Luxury doesn't mean exclusion - premium sites must be accessible.

**Audit Findings:**
- "Skip Links AUSENTES (WCAG 2.4.1 Level A)"
- "ARIA labels ausentes em sections, grids, icons"
- "Nenhum focus-visible customizado"
- "Touch targets <44px (iOS guideline violation)"

## Implementation

### Phase 1: Skip Links & Landmarks (1h)
- [ ] Create skip link component:
  ```astro
  <a href="#main-content" 
     class="skip-link sr-only focus:not-sr-only">
    Pular para conteúdo principal
  </a>
  ```
- [ ] Position fixed top-left, visible on focus
- [ ] Style with high contrast (Navy bg, Gold text)
- [ ] Add skip links for: main, navigation, footer
- [ ] Add ARIA landmarks to all sections:
  ```astro
  <section role="region" aria-labelledby="razoes-title">
    <h2 id="razoes-title">Por que escolher a Pórtico?</h2>
  ```
- [ ] Test with screen reader (NVDA/VoiceOver)

### Phase 2: Keyboard Navigation (1h)
- [ ] Implement custom focus states:
  ```css
  focus-visible:ring-4 ring-gold/50 ring-offset-2 outline-none
  ```
- [ ] Apply to all interactive elements:
  - Links (header nav, CTAs)
  - Buttons (primary, secondary)
  - Form inputs (contact form)
  - Card links (service cards)
- [ ] Ensure tab order logical (visual order = DOM order)
- [ ] Add focus trap for modals (if any)
- [ ] Test keyboard navigation:
  - Tab: Navigate forward
  - Shift+Tab: Navigate backward
  - Enter: Activate buttons/links
  - Esc: Close modals

### Phase 3: Screen Reader Support (1h)
- [ ] Add aria-hidden to decorative icons:
  ```astro
  <iconify-icon icon="mdi:shield" aria-hidden="true">
  ```
- [ ] Add alt text to all images (descriptive, not redundant)
- [ ] Add aria-label to icon-only buttons:
  ```astro
  <button aria-label="Abrir menu de navegação">
    <iconify-icon icon="mdi:menu">
  </button>
  ```
- [ ] Add role="list" to card grids:
  ```astro
  <div role="list" class="grid">
    <div role="listitem">
  ```
- [ ] Add visually hidden text for context:
  ```astro
  <span class="sr-only">Leia mais sobre</span> Reforma Residencial
  ```
- [ ] Test with NVDA (Windows) and VoiceOver (Mac)
- [ ] Fix touch target sizes:
  ```astro
  <!-- Before: py-5 = 40px height -->
  <!-- After: py-6 min-h-[48px] = 48px minimum -->
  ```

## Definition of Done

### Functionality
- [ ] All interactive elements keyboard accessible
- [ ] Tab order logical and predictable
- [ ] Focus states visible (4px ring, high contrast)
- [ ] Skip links work (jump to main content)
- [ ] Screen reader announces all content correctly
- [ ] Touch targets ≥48px (Android) or ≥44px (iOS)

### Testing
- [ ] axe DevTools: 0 violations (WCAG AA)
- [ ] Lighthouse Accessibility: Score ≥95
- [ ] Manual keyboard: Navigate entire site without mouse
- [ ] Screen reader (NVDA): All sections announced
- [ ] Screen reader (VoiceOver): Navigation clear
- [ ] Touch target audit: All buttons/links ≥48px

### Performance
- [ ] N/A (accessibility features don't impact performance)

### Security
- [ ] N/A (no security implications)

### Code Quality
- [ ] ARIA labels semantic (not redundant)
- [ ] Skip links follow convention
- [ ] Focus styles consistent across components
- [ ] Comments explain accessibility patterns

### Documentation
- [ ] Time logged
- [ ] Accessibility testing checklist created
- [ ] WCAG compliance statement in footer

### Git
- [ ] Atomic commits:
  - `a11y: add skip links and landmarks`
  - `a11y: implement keyboard navigation`
  - `a11y: add screen reader support`

## Testing

### Automated
```bash
# Install axe DevTools Chrome extension
# Visit each page, run audit
# Target: 0 violations WCAG AA

# Lighthouse
pnpm build
pnpm preview
# DevTools > Lighthouse > Accessibility
# Target: Score ≥95
```

### Manual Keyboard
- [ ] Tab through entire homepage (no mouse)
- [ ] Verify all links/buttons reachable
- [ ] Verify focus visible at all times
- [ ] Press Enter on CTA (activates link)
- [ ] Press Esc on modal (closes)

### Screen Reader (NVDA - Windows)
- [ ] Install NVDA: https://www.nvaccess.org/
- [ ] Navigate homepage with arrow keys
- [ ] Verify landmarks announced ("Region: Por que escolher")
- [ ] Verify links announced with context
- [ ] Verify icons ignored (aria-hidden works)

### Screen Reader (VoiceOver - Mac)
- [ ] Enable VoiceOver: Cmd+F5
- [ ] Navigate with VoiceOver cursor (Ctrl+Option+Arrow)
- [ ] Verify rotor navigation (Ctrl+Option+U)
- [ ] Verify form labels clear

## Blockers & Risks

**Current:**
- [ ] None

**Potential:**
1. Risk: Focus styles clash with design - Mitigation: Use brand Gold color, subtle ring
2. Risk: Screen reader too verbose - Mitigation: Use aria-label to customize announcements
3. Risk: Complex interactions not accessible - Mitigation: Provide keyboard alternatives

## References

- WCAG 2.1 AA: https://www.w3.org/WAI/WCAG21/quickref/?currentsidebar=%23col_customize&levels=aa
- axe DevTools: https://www.deque.com/axe/devtools/
- NVDA: https://www.nvaccess.org/
- Audit: Section 12 "Accessibility (A11Y) Audit"
