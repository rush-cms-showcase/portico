# Pórtico Reformas

**Pórtico Reformas** is a modern, high-performance website built for a premier structural and interior renovation company based in Porto Alegre, RS. 

This project aims to reflect the company's core values: **precision, intelligent planning, guaranteed deadlines, and absolute transparency**. The digital experience is designed to be as seamless and flawless as their physical renovations.

## Tech Stack & Performance

Built with state-of-the-art web technologies to ensure maximum performance, accessibility, and SEO:

- **Framework**: [Astro](https://astro.build/) - Islands Architecture (Partial Hydration) shipping **zero JS by default**, resulting in blazing-fast load times.
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) - Utility-first CSS framework for rapid, responsive, and aesthetic UI development.
- **Images**: Fully automated image optimization pipeline using ImageMagick to convert assets into modern `WebP` formats, ensuring maximum Google PageSpeed Insights scores.
- **UI Components**: Native CSS scroll-snapping, pure CSS masonry grids, and lightweight native JS integrations (e.g., PhotoSwipe) for highly interactive yet exceptionally light components.
- **i18n Ready**: Fully localized strings via a centralized dictionary system, ensuring scalability and easy multi-language support in the future.

## Powered by Rush CMS

This website operates in synergy with **Rush CMS**, a headless CMS tailored to deliver content securely and seamlessly at the edge.

### How it uses Rush CMS:
- **Dynamic Content:** Blog posts, service details, and testimonials are managed within the CMS and fetched during the SSG (Static Site Generation) build process, making the site both dynamic and incredibly fast.
- **Dynamic Routing & SEO:** The CMS powers the automatic generation of pages (`[slug].astro`), injecting accurate metadata and JSON-LD schemas.
- **Navigation Control:** The Header and Footer navigation menus are fully managed via the Rush CMS API. The site automatically parses and renders links configured in the dashboard (with static fallbacks for high availability).
- **Forms & Interactions:** Integrated directly with Rush API endpoints for contact submissions (`contact-form.astro`, `dynamic-form.astro`), handling user requests securely.

## Why is it Awesome?

1. **Extremely DRY & SOLID:** The codebase adheres to strict software engineering principles. UI patterns are highly componentized (like `SectionHeader`, `SectionContainer`, `PhotoswipeGallery`) to prevent repetition and promote easy maintenance.
2. **SEO-First Approach:** Semantic HTML5, dynamic Meta descriptions, Open Graph tags, canonical URLs, and structured JSON-LD schemas are embedded automatically.
3. **Flawless UI/UX:** From subtle micro-animations and micro-interactions (like glassmorphism effects and hover transitions) to a fully responsive layout, the design is premium, trustworthy, and conversion-focused.
4. **DX:** Enforces strict styling guidelines, typed frontmatter, and an automated deployment verification suite to guarantee quality.