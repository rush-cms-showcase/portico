# Specialities Landing Pages (Dynamic LPs)

The Specialities (Landing Pages) section of the Portico project uses an architecture based on the Block Renderer pattern. This pattern allows the content and the order of the page sections to be dynamic and defined exclusively through data (JSON files), without the need to create a new `.astro` file for each Landing Page.

This architecture was designed with a smooth migration to the Rush CMS in the future in mind.

---

## How It Works

The rendering process occurs in the following steps:

1. **Data Repository (Content Collections)**
   All data is stored in the `src/content/especialidades/` directory in `.json` format.
   Astro strictly validates this data at build-time through the configuration in the `src/content/config.ts` file using Zod.

2. **The Dynamic Route (SSG)**
   The `src/pages/especialidades/[slug].astro` file is the catch-all route. 
   It uses `getStaticPaths()` to read all JSONs from the directory and create a static URL (SSG) for each of them (e.g., `/especialidades/casas-geriatricas`).

3. **The Orchestrator (Block Renderer)**
   Instead of hardcoding components in the dynamic route, the route only calls `src/components/blocks/block-renderer.astro`.
   The Orchestrator reads the `content` array from the JSON, iterates over it, and checks the `_type` key of each block. If it is `hero`, it calls the `HeroBlock`; if it is `services`, it calls the `ServicesBlock`, and so on.

4. **Components (Wrappers)**
   Each block (e.g., `hero-block.astro`) is just a wrapper. Its responsibility is to take the flexible data from the JSON and insert it into the already established premium design of the application (reusing Tailwind classes and the core system components, following the DRY pattern).

---

## How to Create a New Landing Page

To create a new LP, you do not need to write a single line of HTML/Astro code.

Just create a `.json` file inside `src/content/especialidades/` with the name of the desired route (e.g., `clinicas-odontologicas.json`).

### Mandatory JSON Structure

Zod ensures that your JSON strictly follows this interface:

```json
{
  "page": {
    "title": "Page Meta Title",
    "description": "Meta Description for SEO",
    "tags": ["seo", "tags", "optional"],
    "slogan": "Catchphrase (optional)"
  },
  "content": [
    {
      "_type": "hero",
      "data": {
        "badge": "Optional Badge Above Title",
        "headline": "Giant Title",
        "subheadline": "Hero Subtitle",
        "cta_text": "Button Text",
        "cta_link": "#contact",
        "background_image": "/images/especialidades/hero-bg.webp"
      }
    },
    {
      "_type": "pain_points",
      "data": {
        "section_badge": "Optional Badge (e.g., Our Solution)",
        "section_title": "Pain Points Section Title",
        "items": [
          {
            "icon": "mdi:alert",
            "title": "Your Pain Point",
            "description": "Detailed description"
          }
        ]
      }
    }
  ]
}
```

> **Tip:** The order of the objects in the `content` array will dictate exactly the display order on the screen. If you want to place the CTA block (`final_cta_section`) at the top, simply move it in the Array.

---

## Available Block Types (`_type`)

- **`hero`**: Main top block with background image, H1, and button.
- **`pain_points`**: Grid of cards with *Iconify* icons focused on showing the pain points we solve.
- **`services`**: Dark premium grid demonstrating the contract services. Accepts a `badge` inside each service.
- **`methodology`**: Stacked step-by-step (P1, P2, P3...) with a side gold line.
- **`cta`**: Simple, high-contrast banner at the bottom of the screen for conversion.

> **Note on Hardcoded Texts:** No block has hardcoded text! Fields like `"badge"` (in the hero) and `"section_badge"` (in the services, pain points, and methodology blocks) can be passed freely via JSON. If omitted, the gold bar with the text is simply not rendered, keeping the design incredibly flexible.

If you need a new block in the future, create a new `my-block.astro` in `src/components/blocks/`, and add its `case` inside `src/components/blocks/block-renderer.astro`.
