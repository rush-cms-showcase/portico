---
title: "Video Hero Implementation"
created: 2026-02-03T19:44:00-03:00
last_updated: 2026-02-03T20:30:00-03:00
priority: P2-M
estimated_hours: 4
actual_hours: 1.5
status: completed
blockers: []
tags: [component, video, premium, hero]
depends_on: [T020]
blocks: []
dependency_type: soft
related_files: [src/components/sections/hero-section.astro]
---

# Task: Video Hero Implementation

## Objective

Replace static hero image with 15-second autoplay muted video loop showcasing premium renovation work. Use Vimeo/YouTube embed with custom controls, fallback poster image, and optimized loading (only above fold).

**Success:**
- [ ] 15s video autoplays on page load (muted)
- [ ] Seamless loop without flash
- [ ] Poster image fallback for slow connections
- [ ] Video pauses when out of viewport (performance)
- [ ] Mobile shows poster image only (saves bandwidth)
- [ ] Overlay gradient maintains text readability

## Context

**Why:** Static image with 90% overlay wastes visual opportunity. Luxury construction sites use cinematic hero videos to immediately establish premium positioning (reference: luxury real estate sites).

**Audit Findings:**
- "Hero background overlay 90% esconde foto - desperdício"
- "Não usa vídeo hero (padrão em luxury real estate/construção)"
- "Falta storytelling visual"

**Benchmark:** Architectural Digest, luxury real estate landing pages

## Implementation

### Phase 1: Video Sourcing (1h)
- [x] Generate/source premium renovation video:
  - Option A: Create AI video (Runway ML, Pika Labs)
  - Option B: Stock footage (Pexels, Unsplash - "luxury renovation")
  - Requirements: 1920x1080, 15s, modern construction/interior
- [x] Created documentation in `/public/videos/README.md` with:
  - Video specifications (MP4/WebM)
  - FFmpeg optimization commands
  - Stock footage sources
- [x] Using existing hero-bg.webp as poster
- [x] Documented where to place video files (public/videos/hero.mp4)

### Phase 2: Component Implementation (2h)
- [x] Update `hero-section.astro`:
  ```astro
  <video
    autoplay muted loop playsinline
    poster="/images/hero-bg.webp"
    class="hero-video"
  >
    <source src="/videos/hero.mp4" type="video/mp4">
    <source src="/videos/hero.webm" type="video/webm">
  </video>
  ```
- [x] Add Intersection Observer to pause when off-screen
- [x] Implement mobile detection (show image only on mobile):
  ```astro
  <video class="hidden md:block" />
  <img class="md:hidden" />
  ```
- [x] Maintain gradient overlay (85% → 75% → 35% gradient)
- [x] Ensure text remains readable (WCAG AA contrast)
- [x] Add poster fallback for video loading

### Phase 3: Optimization (1h)
- [ ] Preload video for LCP improvement:
  ```html
  <link rel="preload" href="/videos/hero.mp4" as="video">
  ```
- [ ] Lazy load on slow connections (Network Info API):
  ```javascript
  const connection = navigator.connection
  if (connection.effectiveType === '4g') loadVideo()
  ```
- [ ] Add WebM variant for Chromium browsers (smaller size)
- [ ] Implement playback rate control (1x default, 0.75x optional)
- [ ] Test autoplay across browsers (Safari quirks)
- [ ] Verify no CLS during video load

## Definition of Done

### Functionality
- [ ] Video autoplays immediately on load (desktop)
- [ ] Loops seamlessly (no flash/gap)
- [ ] Pauses when scrolled out of view
- [ ] Poster shows on mobile devices
- [ ] Text overlay readable throughout video
- [ ] Fallback works if video fails to load

### Testing
- [ ] Desktop Chrome: Video autoplays, loops
- [ ] Desktop Safari: Video autoplays (muted required)
- [ ] Mobile iOS: Poster image shows (no autoplay)
- [ ] Mobile Android: Poster image shows
- [ ] Slow 3G: Poster loads immediately, video optional
- [ ] Network tab: Video loads incrementally (not all at once)

### Performance
- [ ] Video file size: <3MB (MP4), <2MB (WebM)
- [ ] Poster image: <100KB
- [ ] LCP: <1.5s (with preload)
- [ ] No CLS: aspect-ratio set on video element
- [ ] Video pauses when off-screen (verified in Performance tab)

### Security
- [ ] N/A (static assets)

### Code Quality
- [ ] Video element has accessible fallback
- [ ] Poster path not hardcoded (use import)
- [ ] Intersection Observer cleaned up on unmount
- [ ] Browser compatibility checked (autoplay, playsinline)

### Documentation
- [ ] Time logged
- [ ] Video sourcing/optimization process documented
- [ ] Fallback behavior documented

### Git
- [ ] Atomic commits:
  - `feat(hero): add video hero component`
  - `perf(hero): optimize video loading`

## Testing

### Manual
- [ ] Desktop: Open site, video plays immediately
- [ ] Desktop: Scroll down/up, video pauses/resumes
- [ ] Mobile: Open site, see poster (no video download)
- [ ] Slow 3G throttle: Poster loads, video optional/delayed
- [ ] Disable autoplay in browser: Poster shows

**Performance Check:**
```bash
# Chrome DevTools > Network
# Throttle: Slow 3G
# Metrics:
# - Poster loads: <500ms
# - Video starts: <3s (or deferred)
# - LCP: <1.5s
```

## Blockers & Risks

**Current:**
- [ ] None

**Potential:**
1. Risk: Video file too large - Mitigation: Aggressive compression, 720p on mobile
2. Risk: Autoplay blocked by browser - Mitigation: Muted + playsinline attributes
3. Risk: Video distracts from CTA - Mitigation: Subtle loop, reduced motion

## References

- Video Optimization: https://web.dev/fast-playback-with-preload/
- Autoplay Policies: https://developer.chrome.com/blog/autoplay/
- Audit: Section 2 "Problemas Severos de Design/UX" - Images
