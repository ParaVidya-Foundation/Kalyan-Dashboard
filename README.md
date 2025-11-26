# Kalyan Dashboard - Vedic Astrology Platform

A modern Next.js 15 application for Vedic Astrology with AI-powered features, chart generation, and educational resources.

## 🚀 Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **Animations**: Framer Motion
- **State Management**: Zustand
- **Charts**: Recharts

## 📋 Sidebar Navigation Routes

### Main Section
| Route | Path | Status | Description |
|-------|------|--------|-------------|
| Home | `/` | ✅ Working | Main landing page with astrology intro |
| Profile | `/profile` | ✅ Working | User profile and saved charts |
| Store | `/store` | ✅ Working | E-commerce store for spiritual items |
| Blogs | `/blogs` | ⚠️ Redirects | Redirects to research/blogs |
| Research | `/research` | ✅ Working | Research papers and blogs section |
| Education | `/education` | ✅ Working | Educational content and courses |

### Kundli & Charts
| Route | Path | Status | Description |
|-------|------|--------|-------------|
| D1 - Lagna Chart | `/charts/d1` | ⚠️ Placeholder | Main birth chart (placeholder page) |
| Planetary Positions | `/charts/planets` | ✅ Working | Static planetary positions table |
| House Report | `/charts/houses` | ✅ Working | 12 houses analysis with static data |
| Aspects & Conjunctions | `/charts/aspects` | ✅ Working | Planetary aspects with static data |
| Yogas & Doshas | `/charts/yogas` | ✅ Working | Yogas and doshas with static examples |

### Divisional Charts
All divisional charts have placeholder pages with "coming soon" messages:

| Route | Path | Status | Description |
|-------|------|--------|-------------|
| D2 - Hora | `/charts/d2` | ⚠️ Placeholder | Wealth and finances chart |
| D3 - Drekkana | `/charts/d3` | ⚠️ Placeholder | Siblings chart |
| D4 - Chaturthamsa | `/charts/d4` | ⚠️ Placeholder | Property and fortune chart |
| D7 - Saptamsa | `/charts/d7` | ⚠️ Placeholder | Children and creativity chart |
| D9 - Navamsa | `/charts/d9` | ⚠️ Placeholder | Marriage and spouse chart |
| D10 - Dasamsa | `/charts/d10` | ⚠️ Placeholder | Career and profession chart |
| D12 - Dwadashamsa | `/charts/d12` | ⚠️ Placeholder | Parents chart |
| D16 - Kalamsa | `/charts/d16` | ⚠️ Placeholder | Spiritual chart |
| D20 - Vimsamsa | `/charts/d20` | ⚠️ Placeholder | Spiritual progress chart |
| D24 - Chaturvimshamsa | `/charts/d24` | ⚠️ Placeholder | Education chart |
| D30 - Trimshamsa | `/charts/d30` | ⚠️ Placeholder | Evils and problems chart |
| D45 - Akshavedamsa | `/charts/d45` | ⚠️ Placeholder | Character chart |
| D60 - Shashtiamsa | `/charts/d60` | ⚠️ Placeholder | Most detailed divisional chart |

### Advanced Charts
| Route | Path | Status | Description |
|-------|------|--------|-------------|
| Life Prediction Chart | `/advanced/life-prediction` | ❌ Not Implemented | Route doesn't exist |
| Cosmic DNA Chart | `/advanced/cosmic-dna` | ❌ Not Implemented | Route doesn't exist |
| Rectification Tools | `/advanced/rectification` | ❌ Not Implemented | Route doesn't exist |
| Famous Comparison | `/advanced/celebrity-compare` | ❌ Not Implemented | Route doesn't exist |

### Dasha System
| Route | Path | Status | Description |
|-------|------|--------|-------------|
| All Dasha Overview | `/dasha` | ✅ Working | Overview page with dasha types |
| Vimshottari Dasha | `/dasha/vimshottari` | ✅ Working | Vimshottari dasha page exists |
| Chara Dasha | `/dasha/chara` | ✅ Working | Chara dasha page exists |
| Yogini Dasha | `/dasha/yogini` | ✅ Working | Yogini dasha page exists |
| Varshphal (Annual) | `/dasha/varshphal` | ✅ Working | Annual chart page exists |

### AI Features
| Route | Path | Status | Description |
|-------|------|--------|-------------|
| AI Kundli Analysis | `/ai/kundli` | ❌ Not Implemented | Route doesn't exist |
| AI Matchmaking | `/ai/matchmaking` | ❌ Not Implemented | Route doesn't exist (but `/match-making` exists) |
| AI Dasha Predictions | `/ai/dasha` | ❌ Not Implemented | Route doesn't exist |
| AI Remedies & Solutions | `/ai/remedies` | ❌ Not Implemented | Route doesn't exist |
| AI Chatbot | `/ai/chat` | ❌ Not Implemented | Route doesn't exist |
| PDF Summary Generator | `/ai/pdf` | ❌ Not Implemented | Route doesn't exist |
| Cloud Storage | `/ai/cloud` | ⚠️ Partial | `/KundliCloud` route exists |

**Note**: Match-making functionality exists at `/match-making` (different from `/ai/matchmaking`)

### Learning & Research
| Route | Path | Status | Description |
|-------|------|--------|-------------|
| Courses & Tutorials | `/learn/courses` | ❌ Not Implemented | Route doesn't exist |
| Books & PDFs | `/learn/books` | ❌ Not Implemented | Route doesn't exist (but `/education/Books` exists) |
| Research Papers | `/learn/research` | ❌ Not Implemented | Route doesn't exist (but `/research/research-papers` exists) |
| Community Forum | `/community` | ❌ Not Implemented | Route doesn't exist |

### Store
| Route | Path | Status | Description |
|-------|------|--------|-------------|
| All Products | `/store/all` | ❌ Not Implemented | Route doesn't exist |
| Gemstones | `/store/gemstones` | ❌ Not Implemented | Route doesn't exist (but `/store/gems` exists) |
| Rudraksha | `/store/rudraksha` | ❌ Not Implemented | Route doesn't exist |
| Cart | `/store/cart` | ❌ Not Implemented | Route doesn't exist (but `/Cart` exists) |

**Note**: Store routes that actually exist:
- `/store` - Main store page
- `/store/gems` - Gemstones page
- `/store/accessories` - Accessories page
- `/store/perfume` - Perfume page
- `/store/poster` - Poster page
- `/store/bracelet` - Bracelet page
- `/Cart` - Shopping cart page

### Preferences
| Route | Path | Status | Description |
|-------|------|--------|-------------|
| Settings | `/settings` | ✅ Working | Settings page exists |
| Help Center | `/help` | ❌ Not Implemented | Route doesn't exist |
| Account & Security | `/account` | ❌ Not Implemented | Route doesn't exist |

---

## ✅ Currently Working Astrological Features

### Fully Implemented (Working)
1. **Main Charts**
   - Planetary Positions (`/charts/planets`) - Static table with planetary data
   - House Report (`/charts/houses`) - 12 houses analysis
   - Aspects & Conjunctions (`/charts/aspects`) - Planetary aspects display
   - Yogas & Doshas (`/charts/yogas`) - Yogas and doshas listing

2. **Dasha System**
   - All Dasha Overview (`/dasha`) - Overview of all dasha types
   - Individual Dasha Pages - Vimshottari, Chara, Yogini, Varshphal routes exist

3. **Match Making**
   - Match Making Form (`/match-making`) - Working match-making functionality
   - Match Making Report (`/match-making/MatchMakingReport`) - Detailed compatibility report

4. **Kundli Generation**
   - API endpoint exists at `/api/kundli/generate`
   - Kundli form component is implemented
   - Cloud storage functionality at `/KundliCloud`

### Partially Implemented (Placeholder Pages)
1. **Divisional Charts** - All D1-D60 charts have placeholder pages with "coming soon" messages
   - Pages are accessible but show static placeholder content
   - No actual chart rendering implemented yet

### Not Implemented
1. **Advanced Charts** - All routes (`/advanced/*`) don't exist
2. **AI Features** - Most AI routes (`/ai/*`) don't exist
   - Exception: Match-making exists at different path (`/match-making`)
   - Cloud storage exists at `/KundliCloud` (different from `/ai/cloud`)
3. **Learning Routes** - `/learn/*` routes don't exist
   - Alternative routes exist: `/education/Books`, `/research/research-papers`
4. **Some Store Routes** - `/store/all`, `/store/gemstones`, `/store/rudraksha`, `/store/cart` don't exist
   - Alternative routes exist with different naming

---

## 📁 Additional Routes (Not in Sidebar)

These routes exist but are not directly linked in the sidebar:

| Route | Path | Description |
|-------|------|-------------|
| Dashboard | `/dashboard` | Main dashboard overview |
| Contact | `/contact` | Contact page |
| Privacy | `/privacy` | Privacy policy |
| Terms | `/terms` | Terms and conditions |
| Research - AI Blogs | `/research/aiblogs` | AI-generated blogs |
| Research - Blogs | `/research/blogs` | Regular blogs |
| Research - Papers | `/research/research-papers` | Research papers |
| Education - Books | `/education/Books` | Educational books |
| Education - Chat | `/education/chat` | Educational chat |
| Education - Test | `/education/test` | Educational tests |
| Saved Papers | `/SavedPaper` | User saved papers |
| Paper View | `/paper-view` | Paper viewing page |

---

## 🎯 Implementation Status Summary

### ✅ Fully Working (5)
- Planetary Positions, House Report, Aspects, Yogas, Dasha Overview

### ⚠️ Placeholder Pages (13)
- All Divisional Charts (D1, D2, D3, D4, D7, D9, D10, D12, D16, D20, D24, D30, D45, D60)

### ❌ Not Implemented (20+)
- All Advanced Charts routes
- Most AI Features routes
- Most Learning routes
- Some Store routes
- Some Preferences routes

---

## 🔧 Development

### Installation
```bash
npm install
# or
pnpm install
```

### Run Development Server
```bash
npm run dev
# or
pnpm dev
```

### Build for Production
```bash
npm run build
# or
pnpm build
```

---

## 📝 Notes

1. **Route Naming Inconsistencies**: Some routes in the sidebar don't match actual file paths (e.g., `/store/gemstones` vs `/store/gems`)

2. **Placeholder Content**: Most divisional chart pages contain placeholder content indicating "coming soon" rather than functional chart visualizations

3. **API Endpoints**: Kundli generation API exists at `/api/kundli/generate` and appears to be functional

4. **Future Development**: Focus areas for implementation:
   - Chart visualization for divisional charts
   - AI features implementation
   - Advanced chart calculations
   - Route path standardization

---

## 📄 License

Private Project
