---
title: "Project Showcase Component"
created: 2026-02-03T19:44:00-03:00
last_updated: 2026-02-03T19:44:00-03:00
priority: P1-M
estimated_hours: 6
actual_hours: 0
status: backlog
blockers: []
tags: [component, ui, premium, portfolio]
depends_on: [T020, T021]
blocks: []
dependency_type: soft
related_files: []
---

# Task: Project Showcase Component

## Objective

Create premium project showcase section to display 3-4 high-end renovation case studies above the fold. Include before/after imagery with lightbox, project details, and client testimonials. This is CRITICAL for luxury positioning - clients need to see proof of high-end work immediately.

**Success:**
- [ ] Showcase section displays 3-4 featured projects
- [ ] Before/after image comparison (slider or side-by-side)
- [ ] Lightbox gallery (PhotoSwipe or similar)
- [ ] Project metadata (location, size, duration, investment range)
- [ ] Integrated above fold (after hero, before reasons)
- [ ] Mobile-optimized grid layout

## Context

**Why:** Currently lacks ANY portfolio/proof of work above the fold. Luxury clients make decisions based on visual evidence of premium craftsmanship. This is the #1 missing element identified in audit.

**Audit Findings:**
- "AUSÊNCIA #1: Case studies detalhados"
- "Falta galeria de projetos com antes/depois cinematográfico"
- "Premium clients need to see transformation immediately"

**Reference Sites:** Bottega Veneta showcases, Architectural Digest portfolio layouts

## Implementation

### Phase 1: Component Structure (2h)
- [ ] Create `src/components/sections/project-showcase-section.astro`
- [ ] Create `src/components/ui/project-card.astro`
- [ ] Create `src/components/ui/image-comparison.astro`
- [ ] Define TypeScript interface for Project type:
  ```typescript
  interface Project {
    title: string
    location: string
    before: ImageMetadata
    after: ImageMetadata
    gallery: ImageMetadata[]
    metadata: {
      area: string
      duration: string
      investment: string
    }
    testimonial?: {
      text: string
      author: string
    }
  }
  ```
- [ ] Setup grid layout (1 col mobile, 2 col tablet, 3 col desktop)
- [ ] Implement card hover states (subtle lift + shadow)

### Phase 2: Image Functionality (2h)
- [ ] Install PhotoSwipe: `pnpm add photoswipe`
- [ ] Create before/after slider component (drag handle)
- [ ] Implement lightbox gallery on card click
- [ ] Add lazy loading with blur-up placeholders
- [ ] Optimize images with Astro Image component
- [ ] Add `srcset` for Retina displays (1x, 2x, 3x)
- [ ] Implement intersection observer for scroll animations

### Phase 3: Content & Polish (2h)
- [ ] Generate 4 premium project images (AI):
  - Project 1: Modern apartment renovation (before/after)
  - Project 2: Kitchen transformation (before/after)
  - Project 3: Bathroom luxury upgrade (before/after)
  - Project 4: Living room redesign (before/after)
- [ ] Write compelling project descriptions
- [ ] Add metadata (100m², 45 days, R$ 180-250k range)
- [ ] Create client testimonial text (authentic tone)
- [ ] Add scroll-triggered fade-in animations
- [ ] Implement "Ver Portfolio Completo" CTA button
- [ ] Test lightbox on mobile (swipe gestures)

## Definition of Done

### Functionality
- [ ] All 4 projects display correctly
- [ ] Before/after slider smooth on desktop/mobile
- [ ] Lightbox opens on click with gallery navigation
- [ ] Images load progressively (blur-up)
- [ ] Responsive grid adapts to screen sizes
- [ ] Touch gestures work on mobile lightbox

### Testing
- [ ] Manual: Click each project card
- [ ] Manual: Test lightbox navigation (arrows, swipe, ESC)
- [ ] Manual: Test image slider drag on all devices
- [ ] Performance: LCP <1.2s (check largest image)
- [ ] Accessibility: Alt texts descriptive, keyboard navigation works

### Performance
- [ ] Images optimized (WebP format, <200KB each)
- [ ] Lazy loading below fold
- [ ] Preload above-fold images
- [ ] No CLS during image load (aspect-ratio preserved)
- [ ] Total section load <2s on 3G

### Security
- [ ] N/A (client-side only)

### Code Quality
- [ ] Components follow Atomic Design (atoms/molecules)
- [ ] TypeScript interfaces defined
- [ ] No hardcoded image paths (use imports)
- [ ] Reusable ProjectCard component

### Documentation
- [ ] Time logged
- [ ] Component usage documented in README
- [ ] Image optimization guidelines

### Git
- [ ] Atomic commits:
  - `feat(showcase): create project showcase section`
  - `feat(showcase): add photoswipe lightbox`
  - `feat(showcase): generate project images`

## Testing

### Manual
- [ ] Desktop: Hover cards show lift effect
- [ ] Desktop: Click opens lightbox, arrow keys navigate
- [ ] Mobile: Swipe lightbox images
- [ ] Mobile: Pinch to zoom in lightbox
- [ ] All: Before/after slider drag smooth
- [ ] All: ESC closes lightbox

**Performance Check:**
```bash
# Run Lighthouse audit
pnpm build
pnpm preview
# Chrome DevTools > Lighthouse > Run audit
# Target: Performance >90, LCP <1.2s
```

## Blockers & Risks

**Current:**
- [ ] None

**Potential:**
1. Risk: PhotoSwipe bundle size too large - Mitigation: Use dynamic import, load on click
2. Risk: Image generation quality inconsistent - Mitigation: Manual curation, use high-quality prompts
3. Risk: Before/after slider UX confusing - Mitigation: Add visual indicators (arrows, labels)

## References

- PhotoSwipe: https://photoswipe.com/
- Before/After Slider: https://github.com/sneas/img-comparison-slider
- Astro Image: https://docs.astro.build/en/guides/images/
- Audit: Section 4 "Ausências Gritantes" - #1 Case Studies
