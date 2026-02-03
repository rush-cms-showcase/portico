---
title: "Performance Optimization (Core Web Vitals)"
created: 2026-02-03T19:44:00-03:00
last_updated: 2026-02-03T19:44:00-03:00
priority: P3
estimated_hours: 4
actual_hours: 0
status: backlog
blockers: []
tags: [performance, optimization, web-vitals]
depends_on: [T022, T026]
blocks: []
dependency_type: soft
related_files: []
---

# Task: Performance Optimization (Core Web Vitals)

## Objective

Optimize site performance to hit luxury benchmarks: LCP <1.2s, CLS <0.05, FID <50ms, TTI <2.5s. Implement image optimizations, font preloading, critical CSS inlining, and resource hints.

**Success:**
- [ ] Lighthouse Performance score ≥95
- [ ] LCP <1.2s (currently ~2.5s estimated)
- [ ] CLS <0.05 (no layout shifts)
- [ ] FID <50ms (fast interactions)
- [ ] Total page weight <1.5MB (excluding video)

## Context

**Why:** Premium sites must load instantly. Slow performance signals low quality. Current site likely has LCP ~2.5s due to unoptimized hero image.

**Audit Findings:**
- "Hero image sem preload - LCP provavelmente ~2.5s"
- "Falta srcset para Retina displays"
- "Glassmorphism pode causar CLS"
- "Performance targets: LCP <1.2s, CLS <0.05"

**Benchmark:** Luxury sites typically score 90+ on Lighthouse

## Implementation

### Phase 1: Image Optimization (2h)
- [ ] Implement responsive images with srcset:
  ```astro
  <Image
    src={heroImage}
    widths={[768, 1024, 1280, 1920, 2560]}
    sizes="100vw"
    densities={[1, 2, 3]}
  />
  ```
- [ ] Preload LCP image:
  ```html
  <link rel="preload" as="image" 
    href="/images/hero-bg.webp"
    fetchpriority="high">
  ```
- [ ] Add blur-up placeholders:
  - Generate 20px width LQIP (Low Quality Image Placeholder)
  - Base64 encode, inline in HTML
  - Progressive reveal on load
- [ ] Lazy load below-fold images:
  ```astro
  <Image loading="lazy" />
  ```
- [ ] Optimize all images:
  - WebP format (80% quality)
  - Target: <100KB per image
  - Use Astro Image service

### Phase 2: Font Optimization (1h)
- [ ] Preload critical fonts:
  ```html
  <link rel="preload" as="font" 
    href="/fonts/inter-var.woff2" 
    type="font/woff2" crossorigin>
  ```
- [ ] Use font-display: swap
- [ ] Subset fonts (Latin only, remove unused glyphs)
- [ ] Self-host fonts (no Google Fonts CDN latency)
- [ ] Implement FOUT mitigation:
  ```css
  .font-loaded { font-family: 'Inter', sans-serif; }
  ```

### Phase 3: Critical CSS & Resources (1h)
- [ ] Inline critical CSS (<10KB):
  - Hero styles
  - Above-fold layout
  - Font declarations
- [ ] Defer non-critical CSS:
  ```html
  <link rel="stylesheet" href="app.css" media="print" 
    onload="this.media='all'">
  ```
- [ ] Add resource hints:
  ```html
  <link rel="dns-prefetch" href="//vimeo.com">
  <link rel="preconnect" href="//fonts.googleapis.com">
  ```
- [ ] Remove unused CSS (PurgeCSS)
- [ ] Minify and compress assets (Brotli)
- [ ] Set aspect-ratio on all images/videos (prevent CLS)

## Definition of Done

### Functionality
- [ ] Site loads and renders correctly
- [ ] Images display at appropriate resolutions
- [ ] Fonts load without FOIT/FOUT flash
- [ ] No visual regressions

### Testing
- [ ] Lighthouse Performance: ≥95 on mobile
- [ ] Lighthouse Performance: ≥98 on desktop
- [ ] PageSpeed Insights: All Core Web Vitals green
- [ ] WebPageTest: First Contentful Paint <0.8s
- [ ] Real device test: iPhone 12, 4G network

### Performance
- [ ] LCP: <1.2s (target: <1.0s)
- [ ] FID: <50ms (target: <30ms)
- [ ] CLS: <0.05 (target: 0)
- [ ] TTI: <2.5s (target: <2.0s)
- [ ] Total page weight: <1.5MB (excl video)
- [ ] First Contentful Paint: <0.8s

### Security
- [ ] N/A (performance only)

### Code Quality
- [ ] Preload links in correct order (priority)
- [ ] Resource hints appropriate (not excessive)
- [ ] Aspect ratios set on all media
- [ ] Comments explain optimization choices

### Documentation
- [ ] Time logged
- [ ] Performance budget documented
- [ ] Optimization checklist for future images

### Git
- [ ] Atomic commits:
  - `perf: implement responsive images with srcset`
  - `perf: preload critical fonts and LCP image`
  - `perf: inline critical CSS and add resource hints`

## Testing

### Lighthouse Audit
```bash
pnpm build
pnpm preview

# Chrome DevTools > Lighthouse
# Device: Mobile
# Categories: Performance only
# Target: Score ≥95

# Check Core Web Vitals:
# LCP: <1.2s ✓
# FID: <50ms ✓  
# CLS: <0.05 ✓
```

### PageSpeed Insights
```
Visit: https://pagespeed.web.dev/
Enter deployed URL
Verify: All Core Web Vitals PASS (green)
```

### Real Device Test
- [ ] iPhone 12 Pro, Safari, 4G network
- [ ] Hero loads in <1.5s
- [ ] No layout shifts during load
- [ ] Interactions immediate (no lag)

## Blockers & Risks

**Current:**
- [ ] Blocked by T026 (Video Hero) - video optimization needed

**Potential:**
1. Risk: Aggressive optimization breaks layout - Mitigation: Test after each change
2. Risk: Font subset missing glyphs - Mitigation: Test with real copy, not Lorem Ipsum
3. Risk: Preload too many resources - Mitigation: Limit to 3-4 critical resources

## References

- Web Vitals: https://web.dev/vitals/
- Image Optimization: https://web.dev/fast/#optimize-your-images
- Font Best Practices: https://web.dev/font-best-practices/
- Audit: Section 3 "Problemas Técnicos de Desenvolvimento" - Performance
