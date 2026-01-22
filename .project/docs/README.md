# Pórtico Reformas - Project Documentation

> High-impact institutional website for premium renovation company in Porto Alegre

## 📋 Overview

**Pórtico Reformas** is a complete WordPress-to-modern-stack migration, focused on high-ticket client conversion through authority, transparency, and strategic storytelling.

### Strategic Positioning

- **We are NOT:** "Just another renovation company"
- **We ARE:** Specialists in **Functional Transformation** - we improve your routine, not just your space
- **Key Differentiator:** Pórtico 4P™ Method (Planning, Predictability, Protection, Progress Reports)
- **Authority:** Júlio as "Maestro" strategist with 20 years of experience

## 🏗️ Technology Stack

### Frontend
- **Framework:** [Astro](https://astro.build) + TypeScript (Islands Architecture)
- **Styling:** Tailwind CSS (utility-first)
- **Build:** Vite
- **Language:** TypeScript (strict mode, no semicolons)

### CMS & Content
- **CMS:** Rush CMS (headless)
- **Static Content:** Home page (conversion/sales)
- **Dynamic Content:** Blog, Case Studies, Testimonials (via Rush)

### Deployment
- **Staging/Approval:** Vercel (preview deploys for client)
- **Production:** Coolify (self-hosted)
- **CI/CD:** GitHub Actions (lint, build, deploy)

## 🚀 Quick Start

### Prerequisites
```bash
node >= 18
pnpm >= 8
```

### Installation
```bash
# Clone repository
cd /home/rafhael/www/html/rush-cms/websites/portico

# Install dependencies
pnpm install

# Configure environment variables
cp .env.example .env.local
# Edit .env.local with Rush CMS credentials
```

### Local Development
```bash
# Dev server (hot reload)
pnpm dev

# Type checking
pnpm check

# Lint
pnpm lint

# Build
pnpm build

# Preview build
pnpm preview
```

### Environment Variables

```bash
# Rush CMS
PUBLIC_RUSH_API_URL=https://cms.example.com/api
PUBLIC_RUSH_NAV_MAIN_ID=1
PUBLIC_RUSH_NAV_FOOTER_ID=2
PUBLIC_RUSH_ROUTE_ROOT_ID=1
PUBLIC_RUSH_ROUTE_BLOG_ID=2
PUBLIC_RUSH_ROUTE_SERVICES_ID=3

# Analytics (optional)
PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 📁 Project Structure

```
portico/
├── .project/              # Task management system
│   ├── docs/             # Project documentation
│   ├── backlog/          # Pending tasks
│   ├── completed/        # Finished tasks
│   └── current-task.md   # Active task
│
├── src/
│   ├── pages/            # Routes (file-based routing)
│   │   ├── index.astro       # Home (static, high conversion)
│   │   ├── servicos/[slug].astro # Dynamic services (Rush CMS)
│   │   └── blog/[slug].astro  # Blog (Rush CMS)
│   │
│   ├── components/       # Astro/React/Vue components
│   │   ├── hero.astro
│   │   ├── metodo-4p.astro
│   │   └── cases-grid.astro
│   │
│   ├── layouts/          # Base layouts
│   │   └── base-layout.astro
│   │
│   ├── lib/              # Utilities and integrations
│   │   └── rush/         # Rush CMS client
│   │
│   └── types/            # TypeScript types
│       └── rush.d.ts
│
├── public/               # Static assets
├── rush.config.ts        # Rush CMS configuration
└── astro.config.mjs      # Astro configuration
```

## 🎨 Code Standards

### TypeScript
```typescript
//  Correct
import type { RushEntry } from '@/types/rush'

interface Props {
  title: string
  entries: RushEntry[]
}

const { title, entries } = Astro.props

//  Wrong
const { title, entries } = Astro.props; // no semicolons!
```

### Astro Components
```astro
---
import type { Props } from './types'

interface LocalProps {
  variant?: 'primary' | 'secondary'
}

const { variant = 'primary' } = Astro.props
---

<section class="hero">
  <h1>{title}</h1>
</section>
```

### Conventions
- **Files:** `kebab-case` (e.g., `hero-section.astro`)
- **Components:** PascalCase for exports (e.g., `export default HeroSection`)
- **No semicolons:** Strict project rule
- **No comments:** Self-explanatory code

## 🔗 Rush CMS Integration

### Configuration
See `rush.config.ts` for routes, navigation, and forms.

### Usage Example
```typescript
import { getRushEntry, getRushEntries } from '@/lib/rush'

// Fetch single entry
const service = await getRushEntry('servicos', slug)

// Fetch list with filter
const recentServices = await getRushEntries('servicos', {
  limit: 3,
  orderBy: 'published_at',
})
```

## 🚢 Deployment

### Vercel (Staging)
```bash
# Push to feature branch
git push origin feature/new-section

# Vercel creates automatic preview
# Share link with client for approval
```

### Coolify (Production)
```bash
# Merge to main after approval
git checkout main
git merge feature/new-section
git push origin main

# Coolify deploys automatically
```

## 📊 Performance & SEO

### Targets
- **Lighthouse Performance:** 95+
- **Accessibility:** 100
- **Best Practices:** 100
- **SEO:** 100

### Strategies
- Islands Architecture (zero unnecessary JS)
- Image lazy loading
- Critical font preloading
- Dynamic meta tags per page
- Automatic sitemap.xml

## 🎯 Conversion & Analytics

### Primary CTAs
1. "Request Secured Quote" (Header)
2. "Talk to a Specialist Now" (Hero)
3. "Don't start a project without diagnosis" (Footer)

### Tracking
- Google Analytics 4
- Custom events (CTA clicks, form submissions)
- Heatmaps (Hotjar - optional)

## 📚 Additional Documentation

- **[Brand Identity](./brand-identity.md)** - Positioning, tone of voice, manifesto
- **[Site Structure](./site-structure.md)** - Complete wireframe, section content
- **[Rush CMS Guide](./rush-cms-guide.md)** - How to create/edit dynamic content

## 🛠️ Troubleshooting

### Build Fails
```bash
# Clear cache
rm -rf .astro node_modules
pnpm install
pnpm build
```

### Rush CMS Timeout
Check:
1. `.env.local` has correct `PUBLIC_RUSH_API_URL`
2. CMS is accessible (test URL in browser)
3. Navigation/route IDs are correct

### TypeScript Errors
```bash
# Check types
pnpm check

# See detailed errors
pnpm astro check --verbose
```

## 📞 Contact & Support

- **Developer:** Rafhael
- **Client:** Pórtico Reformas (Júlio)
- **Repository:** [Private]

---

**Last updated:** 2026-01-22
