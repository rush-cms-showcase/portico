# Site Structure - Pórtico Reformas

> Complete wireframe, strategic content, and conversion journey

## 🗺️ Information Architecture

### Main Pages

```
Home (/) ──────────────────────── Static (high conversion)
│
├── Method (/metodo) ──────────── Static (explains 4P™)
├── Services (/servicos) ──────── Dynamic (Rush CMS)
│   └── /servicos/[slug] ──────── Individual entry
├── About (/sobre) ────────────── Static (Júlio + team)
├── Blog (/blog) ──────────────── Dynamic (Rush CMS)
│   └── /blog/[slug] ──────────── Individual post
└── Contact (/contato) ────────── Static (form + map)
```

---

## 🏠 Home Page (Maximum Conversion)

### Header (Fixed on scroll)

**Layout:**
```
[Pórtico Logo]    [Desktop Menu]                [CTA Button]
                  Home | Method | Services | About | Contact
```

**Behavior:**
- Mobile: Hamburger menu
- Scroll: Header compacts (reduces padding)
- CTA always visible

**Primary CTA:**
```
[Button] "Request Secured Quote"
Color: Blue #2563A8 (primary brand color)
Action: Opens contact modal or scroll to form
```

---

### 1. Hero Section

**Goal:** Capture attention and differentiate in 3 seconds

#### Layout

```
┌─────────────────────────────────────────────────┐
│                                                 │
│   BEFORE RENOVATING,                            │
│   WE UNDERSTAND HOW YOU LIVE                    │
│                                                 │
│   Your renovation in [CITY] with guaranteed     │
│   deadline and budget in contract.              │
│   We transform spaces to facilitate your        │
│   routine, without the chaos of traditional     │
│   construction.                                 │
│                                                 │
│   [Talk to a Specialist Now] ───────────────►   │
│                                                 │
│         [Photo: Functional space + Júlio]       │
└─────────────────────────────────────────────────┘
```

#### Content

**Headline:** (h1)
```
Before renovating, we understand how you live
```

**Subheadline:**
```
Your renovation in [Porto Alegre] with guaranteed 
deadline and budget in contract. We transform spaces 
to facilitate your routine, without the chaos of 
traditional construction.
```

**Geo-Targeting (Future Feature):**
- Detect city from IP
- If city is in RS or predefined list: replace "Porto Alegre"
- Fallback: "Porto Alegre and metropolitan area"

**Image:**
- Option 1: Júlio analyzing project (authority)
- Option 2: Renovated functional and elegant space
- Format: Optimized WebP, lazy load below fold

**CTA:**
```
[Button] "Talk to a Specialist Now"
Action: Smooth scroll to contact form
```

---

### 2. "The Reason" Section

**Goal:** Create contrast and empathy with client pains

#### Layout

```
┌─────────────────────────────────────┐
│  WHY DO MOST RENOVATIONS            │
│  GO WRONG?                          │
│                                     │
│  Most companies start with the      │
│  wall. We start with your life.     │
│  If the renovation doesn't improve  │
│  your routine, it's just a waste    │
│  of time and money.                 │
│                                     │
│  ┌─────────────────────────────┐    │
│  │ "We don't renovate spaces.  │    │
│  │  We reorganize the life     │    │
│  │  within them"               │    │
│  └─────────────────────────────┘    │
└─────────────────────────────────────┘
```

#### Content

**Title:** (h2)
```
Why do most renovations go wrong?
```

**Text:**
```
Most companies start with the wall. We start 
with your life. If the renovation doesn't 
improve your routine, it's just a waste of 
time and money.
```

**Highlight:** (blockquote or featured card)
```
"We don't renovate spaces. 
We reorganize the life within them"
```

**Design:**
- Background: Soft light gray
- Highlight: Card with blue border or light blue background

---

### 3. "The Júlio Factor" Section

**Goal:** Build personal authority and trust

#### Layout

```
┌──────────────────────────────────────────────┐
│  THE MAESTRO OF YOUR TRANSFORMATION          │
│                                              │
│  ┌──────────┐  Júlio isn't just an           │
│  │          │  executor — he's the           │
│  │  [Júlio  │  strategist who anticipates    │
│  │  Photo]  │  functional problems before    │
│  │          │  the first hammer strike.      │
│  └──────────┘                                │
│               His presence brings the        │
│               security that there's          │
│               intelligence and care in       │
│               every invisible detail.        │
│                                              │
│  "20 years of experience transforming        │
│   homes with radical transparency"           │
└──────────────────────────────────────────────┘
```

#### Content

**Title:** (h2)
```
The Maestro of Your Transformation
```

**Text:**
```
Júlio isn't just an executor — he's the strategist 
who anticipates functional problems before the 
first hammer strike.

His presence brings the security that there's 
intelligence and care in every invisible detail 
of execution.
```

**Social Proof:**
```
"20 years of experience transforming homes 
with radical transparency"
```

**Photo:**
- Júlio in action (analyzing blueprint, talking to client)
- Style: Natural, not corporate
- Format: Vertical or square portrait

---

### 4. "Pórtico 4P™ Method" Section

**Goal:** Explain competitive advantage tangibly

#### Layout

```
┌────────────────────────────────────────────────┐
│  INTELLIGENCE APPLIED TO CONSTRUCTION          │
│  Pórtico 4P™ Method                            │
│                                                │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐      │
│  │    1     │  │    2     │  │    3     │      │
│  │Surgical  │  │  Total   │  │Contract. │      │
│  │Planning  │  │Predictab.│  │Protection│      │
│  └──────────┘  └──────────┘  └──────────┘      │
│                                                │
│              ┌──────────┐                      │
│              │    4     │                      │
│              │Progress  │                      │
│              │ Reports  │                      │
│              └──────────┘                      │
└────────────────────────────────────────────────┘
```

#### Content

**Title:** (h2)
```
Intelligence Applied to Construction
```

**Subtitle:**
```
Pórtico 4P™ Method
```

**Cards (4 items):**

**1. Surgical Planning**
- Icon: 📋 or clipboard
- Text: "Functional diagnosis of your routine before quoting"
- Detail: "We understand how you live, not just what you want"

**2. Total Predictability**
- Icon: 📅 or calendar
- Text: "Realistic schedule with fixed delivery dates"
- Detail: "No naive optimism. Only deadlines we can meet"

**3. Contractual Protection**
- Icon: 🛡️ or shield
- Text: "Locked budget and penalty for delays — risk is ours"
- Detail: "Material price rose? Our problem, not yours"

**4. Progress Reports**
- Icon: 📱 or WhatsApp
- Text: "Detailed weekly reports on your WhatsApp"
- Detail: "Photos and checklist every Friday"

**Design:**
- Cards in responsive grid (4 columns desktop, 1 column mobile)
- Hover effect: Subtle elevation
- Color: Blue (#2563A8) on icons/numbers, orange (#FFA500) on hover

---

### 5. "4 Peace of Mind Guarantees" Section

**Goal:** Eliminate objections and client fears

#### Layout

```
┌──────────────────────────────────────────┐
│  4 PEACE OF MIND GUARANTEES              │
│                                          │
│   Deadline Guarantee                     │
│    We deliver on the agreed date or      │
│    pay a penalty                         │
│                                          │
│   Budget Guarantee                       │
│    Contract price is final price.        │
│    No surprises                          │
│                                          │
│   Cleanup Guarantee                      │
│    Organized project and respect for     │
│    neighbors                             │
│                                          │
│   Structural Guarantee                   │
│    2-year post-project support           │
└──────────────────────────────────────────┘
```

#### Content

**Title:** (h2)
```
4 Peace of Mind Guarantees
```

**List (design as checklist or cards):**

1. **Deadline Guarantee**
   - Headline: "We deliver on the agreed date or pay a penalty"
   - Detail: "Contractual clause with penalty for delays"

2. **Budget Guarantee**
   - Headline: "Contract price is final price. No surprises"
   - Detail: "Detailed planning prevents unforeseen costs"

3. **Cleanup Guarantee**
   - Headline: "Organized project and respect for neighbors"
   - Detail: "Mandatory daily cleanup, respected schedules"

4. **Structural Guarantee**
   - Headline: "2-year post-project support"
   - Detail: "We don't disappear after delivery"

**Design:**
- Blue checkmarks () #2563A8
- Alternating background (zebra striping) or cards with subtle shadow

---

### 6. "Our Services" Section

**Goal:** Present service offerings with social proof

#### Layout

```
┌─────────────────────────────────────────┐
│  OUR SERVICES                           │
│                                         │
│  ┌────────────┐  ┌────────────┐         │
│  │  Before →  │  │  Before →  │         │
│  │  After     │  │  After     │         │
│  │            │  │            │         │
│  │ [Title]    │  │ [Title]    │         │
│  │ [Details]  │  │ [Details]  │         │
│  │            │  │            │         │
│  │ [Learn More]│ │ [Learn More]│        │
│  └────────────┘  └────────────┘         │
│                                         │
│  [See All Services] ─────────────────►  │
└─────────────────────────────────────────┘
```

#### Content

**Title:** (h2)
```
Our Services
```

**Card Format:**
- Image: Before/After (slider or side by side)
- Title: E.g., "Complete Apartment Renovation"
- Service type: Residential / Commercial
- Brief description: 1-2 sentences about service
- CTA: "Learn More" (link to `/servicos/[slug]`)

**Curation:**
- Show 2-3 featured services on home
- Variety: Apartment, house, commercial
- Video showcase (if available)

**Source:**
- Content from Rush CMS (collection `servicos`)
- Filter: `featured: true` to display on home

---

### 7. "Client Filter" Section

**Goal:** Qualify leads and create exclusivity feeling

#### Layout

```
┌────────────────────────────────────────────┐
│  ARE WE THE RIGHT CHOICE FOR YOU?          │
│                                            │
│  ┌─────────────────┐  ┌──────────────────┐ │
│  │   YES, if you   │  │   NO, if you     │ │
│  │  seek:          │  │  seek:           │ │
│  │                 │  │                  │ │
│  │ • Security and  │  │ • Just the       │ │
│  │   planning      │  │   lowest price   │ │
│  │ • Property      │  │ • Speed without  │ │
│  │   appreciation  │  │   planning       │ │
│  │ • Peace of      │  │ • Hate           │ │
│  │   mind          │  │   processes      │ │
│  └─────────────────┘  └──────────────────┘ │
└────────────────────────────────────────────┘
```

#### Content

**Title:** (h2)
```
Are we the right choice for you?
```

**Column 1 - YES (Green):**
```
 Yes, if you seek:
• Security and detailed planning
• Long-term property appreciation
• Peace of mind and organized processes
• Transparency and accountability
```

**Column 2 - NO (Red/Gray):**
```
 No, if you seek:
• Just the lowest price (without technical criteria)
• Speed without planning
• Hate organized processes
```

**Section Footer:**
```
And that's okay. We prefer the right client 
over the wrong client.
```

**Design:**
- Layout: 2 columns (desktop), stack (mobile)
- Colors: Blue (#2563A8) for "Yes", Gray (#4A5568) for "No"
- Icons: Checkmarks and X's

---

### 8. "Strategic FAQ" Section

**Goal:** Eliminate final objections before contact

#### Layout

```
┌──────────────────────────────────────┐
│  FREQUENTLY ASKED QUESTIONS          │
│                                      │
│   How can I trust Pórtico?           │
│  ─────────────────────────────       │
│    [Expanded answer]                 │
│                                      │
│   What if material prices rise?      │
│                                      │
│   How will I know the progress?      │
│                                      │
│   Why does planning take longer?     │
└──────────────────────────────────────┘
```

#### Content (Accordion)

**1. How can I trust Pórtico?**
```
Radical transparency: you receive detailed schedule, 
contracts with penalty clauses for delays, and weekly 
reports with photos. We don't disappear — we have 
2-year post-project warranty.
```

**2. What if material prices rise during the project?**
```
Locked budget: contract price is final price. Material 
increases are our responsibility, not yours. We plan 
with safety margins.
```

**3. How will I know what's happening without going to the site daily?**
```
Weekly WhatsApp reports: every Friday you receive 
progress photos, completed stages checklist, and 
next week's forecast.
```

**4. Why does Pórtico's planning take longer than my neighbor's quote?**
```
Because we do functional diagnosis first. While 
others give quotes in 10 minutes, we invest time 
understanding your routine to avoid rework and 
extra costs later.
```

**5. Do you serve all of Porto Alegre?**
```
Yes, we serve POA and metropolitan area. Contact 
us to confirm if your location is in our coverage area.
```

**Design:**
- Accordion (expand/collapse)
- First item open by default
- Icon:  (open) /  (closed)

---

### 9. Footer

**Goal:** Final conversion + legal info

#### Layout

```
┌──────────────────────────────────────────────┐
│  DON'T START A PROJECT WITHOUT A             │
│  FUNCTIONAL DIAGNOSIS WITH PÓRTICO           │
│                                              │
│  [Request Free Diagnosis] ───────────────►   │
│                                              │
│  ──────────────────────────────────────────  │
│                                              │
│  Pórtico Reformas                            │
│  CNPJ: XX.XXX.XXX/XXXX-XX                    │
│  Porto Alegre, RS                            │
│                                              │
│  [Instagram] [Facebook] [WhatsApp]           │
│                                              │
│  © 2026 Pórtico Reformas. All rights         │
│  reserved.                                   │
└──────────────────────────────────────────────┘
```

#### Content

**Final CTA:**
```
Don't start a project without a functional 
diagnosis with Pórtico
```

**Button:**
```
[Request Free Diagnosis]
Action: Contact modal or scroll to form
```

**Company Info:**
- Pórtico Logo
- CNPJ: [To be defined]
- Address: Porto Alegre, RS
- Phone: (51) XXXX-XXXX
- Email: contato@porticoreformas.com.br

**Social Media:**
- Instagram
- Facebook
- WhatsApp (direct chat link)

**Legal Links:**
- Privacy Policy
- Terms of Use

---

## 📄 Secondary Pages

### /metodo - Pórtico 4P™ Method

**Goal:** Detail process in depth

**Structure:**
1. Hero: "How we guarantee deadline and budget"
2. 4P™ explained in detail (expanded home section)
3. Project timeline infographic
4. Comparison: "Traditional Project vs Pórtico"
5. CTA: Schedule diagnosis

---

### /servicos/[slug] - Individual Service

**Goal:** Detailed service presentation with transformation examples

**Source:** Rush CMS (collection `servicos`)

**Structure:**
1. Hero: Service title + featured before/after
2. Service Overview: What's included
3. The Process: How 4P™ Method is applied
4. Gallery: Multiple before/after photos
5. Testimonials: Client videos or text
6. Technical details: Typical timeline, scope, pricing guide
7. CTA: "Request a quote for this service"

**CMS Fields:**
- `titulo`, `slug`, `descricao`
- `servico_tipo` (residential/commercial)
- `processo_texto`, `escopo_texto`
- `prazo_estimado_dias`, `area_min_m2`
- `imagens_antes[]`, `imagens_depois[]`
- `depoimentos[]`
- `featured` (boolean for home)

---

### /sobre - About Pórtico

**Goal:** Humanize brand and team

**Structure:**
1. Hero: "The story behind Pórtico"
2. Manifesto (brand-identity summary)
3. Júlio (expanded section with personal story)
4. Team (photos + brief bio of each professional)
5. Numbers: Years of experience, completed projects, satisfied clients
6. Certifications/Partnerships (if any)

---

### /blog/[slug] - Blog/Content

**Goal:** SEO and client education

**Source:** Rush CMS (collection `blog`)

**Topics:**
- "5 mistakes that make your renovation expensive"
- "How to choose flooring for high-traffic areas"
- "Kitchen renovation: functionality before aesthetics"

**Structure:**
- Hero: Title + featured image
- Body: Markdown/Rich Text from CMS
- Author: Júlio (authority)
- Related: 3 similar posts
- CTA: "Need help? Contact us"

---

### /contato - Contact

**Goal:** Qualified lead capture

**Structure:**

**Form:**
- Full name
- Email
- Phone/WhatsApp
- Project type: (dropdown: Apartment, House, Commercial)
- Desired timeline: (dropdown: Urgent, 1-3 months, 3-6 months, Flexible)
- Message (optional)
- Checkbox: "I agree to be contacted by Pórtico"

**Behavior:**
- Client-side validation (React/Vue component)
- Send via Rush CMS API (form submission)
- Confirmation: "Thank you! We'll respond within 24h"
- Automatic email to Júlio + client

**Map:**
- Google Maps embed (if physical office exists)
- Or just text with address

**Info:**
- Phone with direct WhatsApp link
- Clickable email (mailto:)
- Business hours

---

## 🎨 Reusable Components

### CTAButton
**Props:**
- `variant`: 'primary' | 'secondary' | 'outline'
- `size`: 'sm' | 'md' | 'lg'
- `href`: string (internal/external link)
- `onClick`: function (modal/scroll)

### TestimonialCard
**Props:**
- `clientName`, `clientPhoto`, `role` (e.g., "Property Owner")
- `testimonialText`
- `rating`: 1-5 stars

### BeforeAfterSlider
**Props:**
- `beforeImage`, `afterImage`
- `alt`, `caption`

### ServiceCard
**Props:**
- `title`, `slug`, `thumbnail`
- `serviceType`, `excerpt`

---

## 🚀 Conversion Journey

### Sales Funnel

```
Visitor ──► Interested ──► Lead ──► Client

1. TOP (Visitor)
   - Impactful hero
   - Contrast (most fail / we succeed)
   
2. MIDDLE (Interested)
   - 4P™ Method (how we're different)
   - Guarantees (eliminates fear)
   - Services (social proof)
   
3. BOTTOM (Lead)
   - Client filter (qualification)
   - FAQ (objections)
   - Contact form
```

### Micro-Conversions
- Scroll to guarantees section
- Click "Learn More" on service
- FAQ opening
- Time on page >2min

### Macro-Conversion
- Contact form submission
- Direct WhatsApp click
- Diagnosis appointment scheduling

---

**Last updated:** 2026-01-22  
**Based on:** Pórtico Site Content.md (original document)
