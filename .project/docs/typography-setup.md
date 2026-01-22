# Typography Setup - Pórtico Reformas

## Fonts Configured

### Primary Fonts
- **Lexend Deca SemiBold (600)** - Logo "PÓRTICO" + Main Headings (H1, H2)
- **Nunito Sans** - All other text
  - Regular (400) - Body text
  - SemiBold (600) - Subheadings (H3, H4)
  - Bold (700) - Logo subtitle "CONSTRUÇÃO REFORMAS" + Emphasis

## Implementation

### 1. Google Fonts (base-layout.astro)
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@600&family=Nunito+Sans:wght@400;600;700&display=swap"
  rel="stylesheet"
/>
```

### 2. Tailwind CSS Variables (app.css)
```css
@theme {
  --font-family-heading: 'Lexend Deca', system-ui, -apple-system, sans-serif;
  --font-family-body: 'Nunito Sans', system-ui, -apple-system, sans-serif;
}
```

### 3. Usage in Components
```html
<!-- Headings -->
<h1 class="font-heading text-4xl font-semibold">
  Antes de reformar, a gente entende como você vive
</h1>

<!-- Body -->
<p class="font-body text-lg">
  A sua reforma em Porto Alegre...
</p>

<!-- Bold emphasis -->
<strong class="font-body font-bold">
  Prazo garantido
</strong>
```

## Performance

- **Total weight:** ~60-80KB compressed
- **Strategy:** `display=swap` (FOUT over FOIT)
- **Fallback:** system-ui, -apple-system, sans-serif
- **Optimization:** Only 4 font files (1 Lexend + 3 Nunito)

## Why These Fonts?

### Lexend Deca
- Designed for **readability** (dyslexia-friendly)
- Perfect for **impact and authority**
- Matches logo perfectly

### Nunito Sans
- Humanist sans-serif
- **Warm and approachable** tone
- Excellent readability for body text
- Complements Lexend Deca well

---

Files modified:
- `.project/docs/brand-identity.md`
- `src/layouts/base-layout.astro`
- `src/styles/app.css`
- `src/pages/index.astro`

Commit: `d666c9d`
