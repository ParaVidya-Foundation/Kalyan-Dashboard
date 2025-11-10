Build a Next.js 15 (App Router) + TypeScript frontend project named “Kalyan Dashboard”, designed for Vedic Astrology — with a clean, professional, and modern UI using Tailwind CSS + shadcn/ui + framer-motion.

The site should allow users to:

Generate and view Vedic astrology charts (D1, D9, D10, etc.)

Ask AI-powered astrology questions based on charts (AI Chat feature)

View blogs, research papers, and educational books (read-only)

Access a store for religious items (books, gemstones, posters, perfumes, etc.)

Manage their profile, saved charts, and settings

The design should be responsive, with a spiritual yet minimal aesthetic — light gradients, subtle animations, soft shadows, and legible typography.

Include SEO-ready structure, reusable components, and an intuitive dashboard layout.

app/
  layout.tsx                 # global layout (header, footer, metadata)
  globals.css                # global Tailwind styles
  page.tsx                   # homepage (with astrology intro, CTA to generate chart)
  api/
    kundli/
      [id]/route.ts          # GET kundli by ID
      generate/route.ts      # POST to generate kundli
  dashboard/
    layout.tsx               # dashboard shell (sidebar, navbar)
    page.tsx                 # overview (AI Chat, charts, Dasha)
  blogs/page.tsx             # blog listing page
  research/page.tsx          # research papers page
  education/page.tsx         # astrology books & learning
  store/page.tsx             # store (perfumes, gemstones, rudraksh)
  profile/page.tsx           # user profile & saved charts
  settings/page.tsx          # preferences, theme, notifications
components/
  layout/
    header.tsx, footer.tsx, sidebar.tsx, breadcrumb.tsx
  charts/
    kundli-chart.tsx, divisional-chart.tsx, chart-loader.tsx
  chat/
    ai-chat.tsx, chat-input.tsx, message-bubble.tsx
  forms/
    kundli-form.tsx, matchmaking-form.tsx
  dashboard/
    chart-section.tsx, dasha-section.tsx, ai-section.tsx
  store/
    product-card.tsx, product-grid.tsx, cart-modal.tsx
  seo/
    default-seo.tsx, structured-data.tsx
  ui/
    (shadcn components)
hooks/
  useKundli.ts, useChat.ts, useStore.ts
lib/
  api.ts, utils.ts, chartLogic.ts, store.ts
public/
  images/, icons/, logos/
middleware.ts                # CSP, CORS, HTTPS, headers
next.config.mjs              # optimization & image settings


✨ Core Pages

Home → Intro + “Generate My Chart” CTA

Dashboard → Kundli, Divisional Charts, Dasha, AI Chat

Store → Buy gemstones, posters, rudraksh

Profile → Saved kundlis, edit details, subscription plans

Blog → Astrology blogs

Research → Academic astrology papers

Education → Books & video learning

🌟 Features

SEO-ready: next-seo + sitemap + structured data

AI Chat: context-based astrology assistant

Dynamic kundli rendering (Recharts / SVG)

Dashboard animations via framer-motion

Secure middleware (CSP, HTTPS, HSTS)

Deliver a clean folder structure, placeholder UI for each route, and modern spiritual design.
Prioritize reusability, performance, and accessibility.

https://skyebioscience.com/our-company/
https://www.chaingpt.org/blog
https://vessi.com/
https://www.gethyped.nl/
perfume - https://www.leandra-isler.ch/en
https://www.pacdora.com/mockups