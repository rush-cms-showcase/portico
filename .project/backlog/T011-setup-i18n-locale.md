---
title: "Setup i18n Locale System"
created: 2026-01-22T19:26:00-03:00
last_updated: 2026-01-22T19:26:00-03:00
priority: P1-S
estimated_hours: 2
actual_hours: 0
status: backlog
blockers: []
tags: [i18n, localization, setup]
---

# Setup i18n Locale System

## Description
Create centralized TypeScript locale file for all pt_BR content to facilitate future maintenance and translations.

## Acceptance Criteria
- [ ] Create `src/locales/pt_BR.ts` with all site strings
- [ ] Structure by section (hero, method4p, guarantees, etc.)
- [ ] Export typed locale object
- [ ] Create helper function to access locale strings
- [ ] Document usage in README

## File Structure
```typescript
// src/locales/pt_BR.ts
export const ptBR = {
  common: {
    cta: {
      requestQuote: 'Solicitar Orçamento Blindado',
      talkToSpecialist: 'Falar com um Especialista Agora',
      // ...
    },
  },
  hero: {
    headline: 'Antes de reformar, a gente entende como você vive',
    subheadline: 'A sua reforma em...',
    // ...
  },
  method4p: {
    title: 'Inteligência Aplicada à Obra',
    subtitle: 'Método Pórtico 4P™',
    // ...
  },
  // ...
}

export type Locale = typeof ptBR
```

## Implementation Notes
- Use `satisfies` for type safety
- Keep strings organized by UI section
- Include all button labels, headings, body text
- Consider pluralization strategy if needed

## Dependencies
- None (foundation task)

## Definition of Done
- [ ] All site strings centralized in pt_BR.ts
- [ ] TypeScript types exported
- [ ] Helper function created
- [ ] Used in at least one component as proof-of-concept
- [ ] README documents pattern
