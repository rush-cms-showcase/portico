---
title: "Global Header and Footer"
created: 2026-01-22T19:24:00-03:00
last_updated: 2026-01-22T19:24:00-03:00
priority: P1-M
estimated_hours: 4
actual_hours: 0
status: backlog
blockers: []
tags: [header, footer, navigation, global]
---

# Global Header and Footer

## Description
Create persistent header with navigation and footer with final CTA and company info.

## Header Acceptance Criteria
- [ ] Create `src/components/header.astro`
- [ ] Logo on left (link to home)
- [ ] Desktop menu: Home | Method | Services | About | Contact
- [ ] Primary CTA button: "Request Secured Quote"
- [ ] Mobile: Hamburger menu
- [ ] Fixed on scroll with compacted padding
- [ ] CTA always visible

## Footer Acceptance Criteria
- [ ] Create `src/components/footer.astro`
- [ ] Final CTA: "Don't start a project without functional diagnosis"
- [ ] CTA button: "Request Free Diagnosis"
- [ ] Company info: Name, CNPJ, Address
- [ ] Social media links (Instagram, Facebook, WhatsApp)
- [ ] Copyright notice
- [ ] Legal links (Privacy Policy, Terms)

## Design Specs
- **Header:** White background, blue CTA, shadow on scroll
- **Footer:** Dark blue background (#173B64), white text
- **Mobile menu:** Slide-in drawer from right

## Implementation Notes
- Header sticky with `position: fixed`
- Use Astro Islands for mobile menu toggle
- Ensure accessibility (focus trap in mobile menu)
- WhatsApp link format: `https://wa.me/5551XXXXXXXXX`

## Dependencies
- T001 (Base layout)

## Definition of Done
- [ ] Header visible on all pages
- [ ] Nav links work
- [ ] Mobile menu functional
- [ ] Footer with all info
- [ ] Social links correct
- [ ] Responsive on all breakpoints
