## Kalyan Dashboard – AI‑Enabled Vedic Astrology Platform

Kalyan Dashboard is a **production‑grade Vedic astrology web platform** built on the Next.js App Router.  
It combines **traditional astrological computation**, **interactive divisional charts**, and **AI‑powered analysis** for Kundli, Dasha, match‑making, and research workflows, with an integrated e‑commerce store and education modules.

### Core Capabilities
- **Kundli generation & storage** – Collect structured birth data, generate pseudo‑deterministic charts, and surface planetary positions and predictions.
- **Divisional charts (D‑charts)** – Visualize D1–D60 divisional charts with a unified chart viewer and North/South style toggle.
- **Dasha & life prediction tools** – Visual and AI‑driven Dasha timelines, including color‑coded life maps and narrative explanations.
- **AI services** – AI chatbot, AI Dasha explanations, AI PDFs and remedies, and AI‑assisted content across research/education surfaces.
- **Education & research** – Learning modules, tests, books, and research‑paper workflows with saved paper management.
- **Storefront** – Curated store for gemstones, bracelets, accessories, perfumes, and posters, backed by a cart flow.

---

## Technology Stack

- **Framework**: Next.js 15+ (App Router, TypeScript)
- **Language**: TypeScript, strict typings for core domain models (`kundli`, charts, predictions)
- **Styling**: Tailwind CSS + shadcn/ui component primitives
- **UI/UX Enhancements**:
  - Framer Motion (and `motion`) for micro‑interactions and page transitions
  - Geist, Playfair Display, and Poppins as font system
- **State Management**: Zustand for client‑side application state
- **Charts & Visualization**: Custom chart components plus Recharts where appropriate
- **SEO & Analytics**:
  - `next-seo` for declarative SEO configuration
  - `next-sitemap` for sitemap/robots generation
  - Structured data via JSON‑LD (Organization, Logo, WebPage, SiteLinks Search Box)
- **Security & Performance**:
  - Custom **CSP** and security headers via `next.config.js`
  - HTTPS enforcement via middleware
  - Image optimization via Next Image + an `OptimizedImage` wrapper

---

## Application Architecture

- **App Router structure** (`app/`):
  - **Public pages**: landing, dashboard, charts, dasha, education, research, store, profile, contact, legal pages.
  - **AI experience**: `app/ai/*` for AI Dasha, AI remedies, AI chat, AI PDFs, etc.
  - **Calculations**: `app/calculations/*` and `app/charts/*` for ashtakavarga, shadbala, saptavarga, shadow planets, transits, etc.
  - **Dasha system**: `app/dasha/*` for Vimshottari, Chara, Yogini, Varshphal and overview.
  - **Storefront**: `app/store/*` for product verticals and e‑commerce flows.
- **Reusable components** (`components/`):
  - `components/charts/*` – chart containers, chart switcher with North/South toggle, divisional chart headers, loaders.
  - `components/dashboard/*` – dashboard shell and sections for charts, calculations, dasha, AI, and quick actions.
  - `components/Chatbot/*` – `AIChatBot` and chat box components embedded in AI dashboards and prediction flows.
  - `components/common/OptimizedImage` – hardened, responsive image wrapper with fallback handling.
  - `components/layout/*` – header, sidebar, footer, breadcrumbs.
  - `components/store/*` – product cards, layout helpers, and store‑specific UI.
- **Domain logic** (`lib/`):
  - `lib/api.ts` – typed client for Kundli APIs and shared domain types.
  - `lib/chartLogic.ts` – utilities for chart construction and mapping data to chart UI.
  - `lib/dashboard-data.ts` – structured config for dashboard sections and quick links.
  - `lib/recaptcha.ts` – hardened server‑side reCAPTCHA v3/v2 verification helper.
  - `lib/utils.ts` – shared formatting, class merging, and helper utilities.
- **Hooks** (`hooks/`):
  - `useKundli` – manage Kundli data lifecycle in the client.
  - `useChat` – manage AI chat state and message flow.
  - `useMobile` – responsive breakpoint logic.
  - `useToast` – UI notifications on key actions.
- **API Routes** (`app/api/*`):
  - `app/api/kundli/generate/route.ts` – POST endpoint for generating Kundli data from typed form input.

---

## Major Functional Areas

### 1. Kundli Generation & Data Model

- **Route(s)**:
  - Forms and UI: `components/forms/kundli-form.tsx`, pages under `app/dashboard` and related sections.
  - API: `app/api/kundli/generate/route.ts`.
- **Data contracts** (`lib/api.ts`):
  - **`KundliFormData`** – strongly typed user input: name, DOB, time, place, gender.
  - **`KundliData`** – generated record containing:
    - `charts`: birth chart, navamsa, dashamsa matrices.
    - `planetaryPositions`: planets, signs, degrees, and houses.
    - `predictions`: categorized textual interpretations with strength metrics.
    - `personalInfo`, `generatedAt`, and derived fields.
- **Generation pipeline** (`app/api/kundli/generate/route.ts`):
  - Validates required fields and responds with structured 4xx for invalid input.
  - Uses deterministic functions to build chart matrices, planetary positions, and predictions.
  - Returns a single `KundliData` payload safe for client consumption (no secrets or internal identifiers exposed).

### 2. Charting & Divisional Charts (D1–D60)

- **Routes**: `app/charts/d1`, `d2`, `d3`, `d4`, `d7`, `d9`, `d10`, `d12`, `d16`, `d20`, `d24`, `d30`, `d45`, `d60`, plus `planets`, `houses`, `aspects`, `yogas`.
- **Key components**:
  - `DivisionalChartHeader` – standardized header for all divisional charts with description and context.
  - `ChartSwitcher` – central chart container that:
    - Toggles **North vs South Indian** layout via `ChartStyleToggle`.
    - Displays fully optimized reference charts using `OptimizedImage` with `/North.png` and `/South.jpg`.
    - Wraps transitions with Framer Motion for smooth visual switching.
  - `ChartSection` – semantic content sections explaining interpretation, use‑cases, classical references, and sample analysis.
- **Behavior**:
  - Each D‑chart page sets its own `Metadata` (title, description, keywords) and uses `ChartSwitcher` with chart‑specific context (e.g., “D1 – Lagna”, “D9 – Navamsa”).
  - Pages include structured textual explanations for better SEO and user education.

### 3. Dasha System & AI Dasha

- **Classical Dasha pages** (`app/dasha/*`):
  - `dasha/page.tsx` – overview of all Dasha systems.
  - `dasha/vimshottari`, `dasha/chara`, `dasha/yogini`, `dasha/varshphal` – system‑specific explanations and UI.
- **AI Dasha page** (`app/ai/dasha/page.tsx`):
  - Left column: Dasha time‑period selector, call‑to‑action, and Dasha SVG/life‑map visuals with explanatory sections.
  - Right column: sticky `AIChatBot` instance pinned in a dedicated sidebar on large screens.
  - Content includes:
    - Visual Dasha timeline image (`/showcase.svg` and supplemental life‑prediction artwork).
    - “Perfect Predictions” gallery, “Smart Summary” section, and description of color semantics (red vs green) for intuitive reading.
- **AI Chatbot** (`components/Chatbot/AIChatBot.tsx`):
  - Reusable, embedded assistant for answering questions within Dasha and other AI pages.
  - Wired to `useChat` for message state (implementation depends on your backend / provider configuration).

### 4. AI Services & Tools

- **AI chat**: `app/ai/chat/page.tsx` – conversational interface for general astrological Q&A (using `AIChatBox`/`AIChatBot`).
- **AI PDF generator**: `app/ai/pdf/page.tsx` – convert analyses into structured downloadable PDFs (UX surface ready; integrates with your chosen PDF backend).
- **AI remedies**: `app/ai/remedies/page.tsx` – surfaces AI‑recommended remedies and ritual guidance based on chart context.
- **AI in dashboard**: `components/dashboard/AI-section.tsx` – highlights AI capabilities from the main dashboard surface.

> Many of these AI routes are UI‑complete and expect you to integrate a model provider or API key at deployment time.

### 5. Education & Research

- **Education** (`app/education/*`):
  - `education/page.tsx` – top‑level education dashboard.
  - `education/Books/*` – curated book list with rich cards.
  - `education/test/*` – test dashboard and question flows for self‑assessment.
  - `education/chat` – learning‑focused chat interface.
- **Research** (`app/research/*`):
  - `research/page.tsx` – research hub overview.
  - `research/aiblogs/*` – AI‑generated blog posts.
  - `research/blogs/*` – authored blog entries.
  - `research/research-papers/*` – structured paper list, detail pages, and download workflows.
  - `SavedPaper/page.tsx` – saved papers dashboard.

### 6. Storefront & Commerce

- **Routes** (`app/store/*`, `app/Cart/page.tsx`):
  - Main store landing: `store/page.tsx`.
  - Category routes: `store/gems`, `store/accessories`, `store/perfume`, `store/poster`, `store/bracelet`.
  - Cart: `Cart/page.tsx` – shopping cart summary and line items.
- **Components** (`components/store/*`, `components/cards/*`):
  - Product cards with price, image, and CTA.
  - Line item cards for the cart.
  - Reusable stat/summary cards for store analytics and upsells.

### 7. Dashboard & User Experience

- **Dashboard** (`app/dashboard/page.tsx`):
  - Built with `dashboard-shell.tsx` and sections:
    - Main chart section.
    - Divisional chart section.
    - Dasha overview.
    - Calculations and advanced tools.
    - AI section and quick actions.
- **User profile & cloud storage**:
  - `app/profile/page.tsx` – profile and saved resources.
  - `app/KundliCloud/page.tsx` – cloud storage overview for Kundli records.

### 8. Contact & Legal

- **Contact** (`app/contact/page.tsx`):
  - Simple contact form posting to Formspree (`action="https://formspree.io/f/mayvllyp"`).
  - Name, email, and message fields with client‑side validation.
- **Legal**:
  - `app/privacy/page.tsx` – privacy policy.
  - `app/terms/page.tsx` – terms and conditions.

---

## SEO & Analytics Implementation

- **Global metadata** (`app/layout.tsx`):
  - Uses Next.js `Metadata` with `metadataBase`, canonical URL, default title/description, keywords, and Open Graph/Twitter configuration.
  - Robots configuration allows index/follow in production, with rich previews (`max-image-preview: large`, etc.).
- **`next-seo` configuration** (`next-seo.config.ts` & `components/seo/default-seo.tsx`):
  - **Site‑wide defaults**: title template, default OG image, Twitter card.
  - **Additional meta & link tags**: `application-name`, `theme-color`, favicon.
- **Structured data** (`components/seo/structured-data.tsx`):
  - **OrganizationJsonLd** – brand entity, logo, support contact.
  - **LogoJsonLd** – logo association with the site.
  - **WebPageJsonLd** – homepage entity, connected to the website entity.
  - **SiteLinksSearchBoxJsonLd** – enables sitelinks search box on Google.
- **Sitemaps and robots**:
  - `next-sitemap.config.js` – generates `sitemap.xml`, index sitemaps, and image entries.
  - `app/sitemap.ts` – App Router sitemap helper for core routes.
  - `app/robots.ts` – environment‑aware robots rules:
    - **Non‑production**: site fully disallowed to prevent accidental indexing.
    - **Production**: `allow: /`, with sensitive/internal paths (e.g. `/api`, `/_next`, `/dashboard`, `/settings`) disallowed.

> Integrations for GA4, GTM, and Meta Pixel are expected to be wired via `next/script` and environment variables; the CSP is already constrained to allow only approved analytics origins.

---

## Security & Compliance

### HTTP & Transport Security
- **HTTPS enforcement** (`middleware.ts`):
  - Automatically redirects HTTP → HTTPS in production environments based on `x-forwarded-proto`.
- **HSTS** (`next.config.js` headers):
  - `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload` for strong TLS adoption.

### Security Headers & CSP
- **Headers set globally** via `next.config.js`:
  - **Clickjacking**: `X-Frame-Options: SAMEORIGIN`.
  - **MIME sniffing**: `X-Content-Type-Options: nosniff`.
  - **Legacy XSS filter**: `X-XSS-Protection: 1; mode=block` (for older UAs).
  - **Referrer Policy**: `strict-origin-when-cross-origin`.
  - **Permissions Policy**: camera/mic/geolocation disabled by default.
  - **Cross-Origin**: `Cross-Origin-Opener-Policy` and `Cross-Origin-Resource-Policy` set to `same-origin`.
- **Content Security Policy** (CSP):
  - `default-src 'self'` – all resources default to same origin.
  - `script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com`.
  - `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com`.
  - `img-src 'self' data: blob: https:`.
  - `font-src 'self' data: https://fonts.gstatic.com`.
  - `connect-src 'self' https:`.
  - `frame-ancestors 'none'`, `object-src 'none'`, `upgrade-insecure-requests`.

### Application‑Level Protections
- **Input validation & error handling**:
  - All Kundli API inputs are checked for required fields before processing, with sanitized error responses.
- **reCAPTCHA integration** (`lib/recaptcha.ts`):
  - Server‑side verification helper that validates tokens against Google’s API.
  - Enforced only when `RECAPTCHA_SECRET_KEY` is configured, allowing optional enforcement in non‑prod.
- **Image handling** (`components/common/OptimizedImage.tsx`):
  - Defensive checks for invalid `src` values.
  - Fallback image support and consistent sizing to avoid layout shifts (improves CLS and reduces broken images/XSS risk from untrusted URLs).

### Infrastructure Notes (AWS Amplify)
- Recommended practices (applied at infrastructure level, not in this repo):
  - Use a **custom domain** bound to the Amplify app over HTTPS only.
  - Enable **AWS WAF / Shield** on the underlying CloudFront distribution for DDoS and OWASP protections.
  - Configure **environment variables** (API keys, analytics IDs, reCAPTCHA secrets) exclusively via Amplify, not committed to the repository.
  - Add **npm audit / Snyk** to the CI/CD phase for dependency vulnerability scanning.

---

## Development Workflow

### Prerequisites
- Node.js (LTS with support for Next.js 15+)
- `pnpm` or `npm` (project includes a `pnpm-lock.yaml`)

### Installation
```bash
pnpm install
# or
npm install
```

### Running in Development
```bash
pnpm dev
# or
npm run dev
```

### Production Build
```bash
pnpm build
# or
npm run build
```

Static assets (sitemaps, robots) are generated automatically via the `postbuild` hook configured in `package.json` (`next-sitemap`).

### Linting
```bash
pnpm lint
# or
npm run lint
```

ESLint is configured via `eslint-config-next`. Build errors are not ignored for TypeScript to maintain type safety.

---

## Environment Variables

- **`NEXT_PUBLIC_SITE_URL`** – public base URL for canonical tags, sitemaps, and structured data.
- **`RECAPTCHA_SECRET_KEY`** – server‑side secret for reCAPTCHA verification (optional but recommended for production).
- **Analytics IDs** (examples; configure as needed):
  - `NEXT_PUBLIC_GA4_ID`
  - `NEXT_PUBLIC_GTM_ID`
  - `NEXT_PUBLIC_META_PIXEL_ID`

All secrets **must** be configured through AWS Amplify (or your hosting provider) and **must not** be committed to this repository.

---

## Roadmap & Future Enhancements

- **Deeper AI integration**:
  - Plug in a production LLM provider for AI Dasha, Kundli, and remedy generation.
  - Add explanation and reasoning traces with guardrails around sensitive content.
- **Advanced astro‑calculations**:
  - Replace pseudo‑random chart generation with precise ephemeris‑based calculations.
  - Implement full Dasha calculation engines for multiple systems.
- **Richer knowledge base**:
  - Expand FAQs, glossary, and structured Q&A sections for better AI search (SGE/Perplexity) optimization.
- **Stronger CSP**:
  - Move from `'unsafe-inline'` scripts/styles to full nonce‑based CSP and strict dynamic policies where compatible.

---

## License

Private project. All rights reserved.  
Unauthorized copying, modification, or distribution of this codebase is prohibited.
