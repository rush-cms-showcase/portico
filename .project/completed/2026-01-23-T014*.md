---
title: "Contact Page (/contato)"
created: 2026-01-22T19:26:00-03:00
last_updated: 2026-01-22T19:26:00-03:00
priority: P1-M
estimated_hours: 5
actual_hours: 0
status: backlog
blockers: []
tags: [contact, form, page]
---

# Contact Page (/contato)

## Description
Create contact page with form, map, and contact information to capture qualified leads.

## Acceptance Criteria
- [ ] Create `src/pages/contato.astro`
- [ ] Contact form with validation
  - [ ] Nome completo (required)
  - [ ] Email (required, validated)
  - [ ] Telefone/WhatsApp (required, mask)
  - [ ] Tipo de obra (dropdown: Apartamento, Casa, Comercial)
  - [ ] Prazo desejado (dropdown: Urgente, 1-3 meses, 3-6 meses, Flexível)
  - [ ] Mensagem (optional, textarea)
  - [ ] Checkbox: aceito contato
- [ ] Form submission to Rush CMS
- [ ] Success/error feedback
- [ ] Company contact info sidebar
- [ ] Optional: Google Maps embed
- [ ] WhatsApp direct link

## Design Specs
- **Layout:** 2 cols (60% form, 40% info) on desktop
- **Form:** Clean, white cards with blue accents
- **Validation:** Real-time inline errors
- **Success:** Modal or inline message

## Implementation Notes
- Use React/Vue island for form interactivity
- Client-side validation (Zod schema)
- Submit to Rush CMS form endpoint
- Phone mask: (XX) XXXXX-XXXX
- Error handling with user-friendly messages
- Honeypot field for spam protection

## Dependencies
- T001 (Rush CMS client for form submission)
- T011 (i18n for form labels/errors)

## Validation Rules
```typescript
const contactSchema = z.object({
  nome: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres'),
  email: z.string().email('Email inválido'),
  telefone: z.string().regex(/^\(\d{2}\) \d{5}-\d{4}$/, 'Formato inválido'),
  tipo_obra: z.enum(['apartamento', 'casa', 'comercial']),
  prazo: z.enum(['urgente', '1-3meses', '3-6meses', 'flexivel']),
  mensagem: z.string().optional(),
  aceito_contato: z.literal(true, { message: 'Você deve aceitar' }),
})
```

## Definition of Done
- [ ] Form renders correctly
- [ ] All validations working
- [ ] Submission sends to Rush CMS
- [ ] Success message shows
- [ ] Error handling robust
- [ ] Phone mask applied
- [ ] Responsive layout
- [ ] Accessibility (labels, ARIA, focus)
- [ ] Loading state during submission
