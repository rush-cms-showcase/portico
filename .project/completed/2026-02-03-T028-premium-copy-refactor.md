---
title: "Copy & Messaging Premium Refactor"
created: 2026-02-03T19:44:00-03:00
last_updated: 2026-02-03T19:44:00-03:00
priority: P3
estimated_hours: 3
actual_hours: 0.3
status: completed
blockers: []
tags: [content, copywriting, premium]
depends_on: []
blocks: []
dependency_type: none
related_files: [src/components/sections/**]
---

# Task: Copy & Messaging Premium Refactor

## Objective

Rewrite all site copy from informal tone ("a gente", commodity messaging) to premium formal voice. Replace feature-focused copy with transformation storytelling. Add power words: bespoke, curated, signature, heritage, legacy.

**Success:**
- [ ] All copy uses formal third person ("nós compreendemos")
- [ ] Hero headline emphasizes transformation over guarantees
- [ ] Section copy focuses on lifestyle outcomes, not features
- [ ] Power words integrated naturally (not forced)
- [ ] Social proof elements added (awards, credentials, press)

## Context

**Why:** Current copy signals commodity ("prazo garantido", "a gente") inappropriate for wealthy clientele who value exclusivity and transformation over contractual terms.

**Audit Findings:**
- "a gente entende" - tom excessivamente informal"
- "Prazo e orçamento garantidos - messaging de commoditização"
- "Falta power words: bespoke, curated, signature, heritage"
- "Ausência de social proof premium: prêmios, certificações"

**Tone Reference:** Carolina Herrera, Bottega Veneta - sophisticated, understated luxury

## Implementation

### Phase 1: Core Messaging (1h)
- [x] Rewrite hero headline:
  ```
  BEFORE: "Antes de reformar, a gente entende como você vive"
  AFTER: "Transformamos espaços. Criamos legados."
  OU: "Sua residência reimaginada com maestria arquitetônica"
  ```
- [x] Rewrite hero subheadline:
  ```
  BEFORE: "A sua reforma em POA com prazo e orçamento garantidos"
  AFTER: "Reformas residenciais de alto padrão em Porto Alegre"
  OU: "Design autoral e execução impecável para residências exclusivas"
  ```
- [ ] Update "Por que Pórtico?" to "Nossa Filosofia"
- [ ] Reframe features as benefits:
  ```
  BEFORE: "Orçamento Garantido"
  AFTER: "Investimento Transparente e Previsível"
  
  BEFORE: "Prazo Garantido"  
  AFTER: "Compromisso com Excelência no Prazo"
  ```

### Phase 2: Section Copy (1h)
- [ ] Rewrite Reason cards:
  - Sem Caos → "Planejamento Meticuloso"
  - Copy: "Cada projeto é orquestrado com precisão militar..."
- [ ] Rewrite Service descriptions (transformation language):
  ```
  BEFORE: "Reforma Residencial Completa"
  AFTER: "Transformação Integral de Residências"
  Copy: "Reimaginamos seu espaço do conceito à conclusão..."
  ```
- [ ] Rewrite Guarantees section:
  - Title: "Garantias Institucionais" → "Nossos Compromissos"
  - Soften commodity language, emphasize partnership
- [ ] Add lifestyle outcomes:
  - "Sua manhã começa em um banheiro que inspira..."
  - "Receba convidados em ambientes que impressionam..."

### Phase 3: Social Proof (1h)
- [ ] Add "Reconhecimento" section:
  - "Visto em Casa Vogue" (placeholder)
  - "Prêmio X de Arquitetura 2025" (placeholder)
  - "Certificação CAU Gold" (placeholder)
- [ ] Add credentials to team section:
  - "Arquitetos registrados CAU/BR"
  - "15+ anos de experiência em alto padrão"
- [ ] Rewrite testimonials (if exist) with specific outcomes:
  ```
  BEFORE: "Excelente trabalho, recomendo!"
  AFTER: "A Pórtico transformou nosso apartamento de 180m² em 
  uma residência digna de revista. O cuidado com cada detalhe 
  reflete verdadeira maestria."
  — Carolina S., Moinhos de Vento
  ```

## Definition of Done

### Functionality
- [ ] All copy updated across 4 pages
- [ ] No informal language ("a gente", "super", "muito")
- [ ] Power words used naturally (not excessive)
- [ ] Social proof section integrated
- [ ] CTAs rewritten ("Agendar Consultoria Exclusiva")

### Testing
- [ ] Manual: Read entire site for tone consistency
- [ ] Peer review: Have colleague assess formality level
- [ ] A/B test (optional): Track conversion before/after
- [ ] Grammar check: No typos or errors

### Performance
- [ ] N/A (text changes, no performance impact)

### Security
- [ ] N/A

### Code Quality
- [ ] Copy in i18n files (not hardcoded)
- [ ] Consistent capitalization (Title Case for headlines)
- [ ] No Lorem Ipsum placeholders

### Documentation
- [ ] Time logged
- [ ] Tone guide documented (formal vs informal)
- [ ] Power words glossary

### Git
- [ ] Atomic commits:
  - `content: refactor hero messaging to premium tone`
  - `content: rewrite section copy with lifestyle focus`
  - `content: add social proof and credentials`

## Testing

### Manual
- [ ] Read homepage entirely (does it sound luxury?)
- [ ] Check for informal words: "a gente", "muito", "super"
- [ ] Verify power words integrated: bespoke, curated, signature
- [ ] Verify CTAs elevated: "Solicitar Orçamento" → "Agendar Consultoria"

**Tone Checklist:**
- [ ] No contractions ("não é" not "nao é")
- [ ] Third person formal ("nós", not "a gente")
- [ ] Emphasis on transformation, not transactions
- [ ] Specifics over generalizations ("180m²" not "grande")

## Blockers & Risks

**Current:**
- [ ] None

**Potential:**
1. Risk: Copy too formal/cold - Mitigation: Maintain warmth with specific details
2. Risk: Power words sound forced - Mitigation: Use sparingly, contextually
3. Risk: Stakeholder prefers informal - Mitigation: Present A/B comparison

## References

- Luxury Copywriting: https://www.copyblogger.com/luxury-copywriting/
- Power Words List: https://smartblogger.com/power-words/
- Audit: Section 1 "Problemas Críticos de Posicionamento (Marketing)"
