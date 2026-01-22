---
title: "Service Detail Page (/servicos/[slug])"
created: 2026-01-22T19:26:00-03:00
last_updated: 2026-01-22T19:26:00-03:00
priority: P2-M
estimated_hours: 6
actual_hours: 0
status: backlog
blockers: []
tags: [services, rush-cms, dynamic-routes]
---

# Service Detail Page (/servicos/[slug])

## Description
Create dynamic service detail pages with full service info, before/after gallery, and testimonials.

## Acceptance Criteria
- [ ] Create `src/pages/servicos/[slug].astro`
- [ ] Fetch service data from Rush CMS
- [ ] Hero: Service title + featured before/after
- [ ] Service Overview section
- [ ] The Process section (how 4P™ applies)
- [ ] Before/After gallery (multiple images)
- [ ] Testimonials section
- [ ] Technical details (timeline, scope, pricing guide)
- [ ] CTA: "Solicitar orçamento para este serviço"

## Design Specs
- **Hero:** Full-width with overlay text
- **Gallery:** Masonry or grid layout
- **Testimonials:** Cards with client quotes
- **CTA:** Sticky bottom bar or section

## Implementation Notes
- Use `getStaticPaths()` for SSG
- Fetch: `getRushEntry('servicos', slug)`
- Optimize all images (WebP, responsive)
- Include breadcrumbs: Home > Serviços > [Service Name]
- SEO: Dynamic meta from service data

## Dependencies
- T001 (Rush CMS client)
- T012 (Services list page for breadcrumbs)

## Data Structure
```typescript
type Service = {
  titulo: string
  slug: string
  descricao: string
  servico_tipo: 'residential' | 'commercial'
  processo_texto: string
  escopo_texto: string
  prazo_estimado_dias: number
  area_min_m2: number
  imagens_antes: string[]
  imagens_depois: string[]
  depoimentos: Array<{
    cliente_nome: string
    texto: string
    rating?: number
  }>
  featured: boolean
}
```

## Definition of Done
- [ ] Dynamic routes working for all services
- [ ] All sections present and styled
- [ ] Gallery functional with optimized images
- [ ] Testimonials displayed
- [ ] CTA prominent
- [ ] Breadcrumbs work
- [ ] SEO meta tags dynamic
- [ ] 404 handling for invalid slugs
