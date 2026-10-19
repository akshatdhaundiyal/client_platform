# Design System: B2B Client Platform

**Scope**: `app/(platform)/**` (`/portal`, `/inquiry`, `/admin/**`), `components/platform/**`.

---

## 1. Philosophy & Brand Essence

The Platform domain embodies **Enterprise Precision, Frictionless Velocity, and Commercial Trust**. It serves high-value enterprise clients, founders, and stakeholders tracking active engineering deliverables, project milestones, invoices, and commercial scopes.

* **Metaphor**: Modern high-velocity engineering platform (Linear.app, Stripe Dashboard, Vercel console).
* **Emotional Target**: Executive confidence, operational transparency, rapid clarity, and precision.

---

## 2. Color Tokens & Surface Hierarchy

```css
/* Core Void & Elevated Surfaces */
--platform-void: #09090b;             /* Pure deep zinc canvas */
--platform-surface: #121215;          /* Elevated card / sidebar background */
--platform-surface-hover: #18181b;    /* Active card / row hover */
--platform-border-subtle: rgba(255, 255, 255, 0.08); /* 1px hairline border */
--platform-border-active: rgba(255, 255, 255, 0.20); /* Focused state */

/* Text Hierarchy */
--platform-text-primary: #fafafa;     /* High-contrast crisp text */
--platform-text-secondary: #a1a1aa;   /* Field labels, subtitles */
--platform-text-muted: #71717a;       /* Timestamps, metadata, hints */

/* Semantic Status Accents */
--platform-status-paid: #10b981;      /* Emerald 500 (Paid / Completed) */
--platform-status-active: #06b6d4;    /* Cyan 500 (In Progress / Delivering) */
--platform-status-pending: #f59e0b;   /* Amber 500 (Review / Due Soon) */
--platform-status-overdue: #ef4444;   /* Red 500 (Critical / Action required) */
--platform-accent-primary: #6366f1;   /* Indigo 500 (Primary CTA / submit) */
```

### Tailwind Utilities Mapping
- **Backgrounds**: `bg-zinc-950`, `bg-[#09090b]`
- **Cards**: `bg-zinc-900/50`, `border border-white/10`, `rounded-xl`, `backdrop-blur-sm`
- **Tables & Rows**: `divide-y divide-white/5`, `hover:bg-white/[0.02]`
- **Buttons / Actions**:
  - Primary: `bg-white text-black hover:bg-neutral-200 font-medium px-4 py-2 rounded-lg transition-colors`
  - Secondary: `bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-lg px-4 py-2`

---

## 3. Visual Grammar & Constraints

1. **Zero Textures / Zero Chalk**:
   - Strictly NO SVG grain filter (`#chalk-grain`), NO hand-drawn borders, NO roughjs canvas elements.
2. **Hairline Geometry**:
   - Exact, crisp 1px borders (`border-white/10`).
   - Clean, geometric corner radii: `rounded-md` (6px) for badges/inputs, `rounded-lg` (8px) for buttons, `rounded-xl` (12px) for cards.
3. **Data Density & Scanability**:
   - Dense key-value grids: label on top/left in muted small caps (`text-xs uppercase tracking-wider text-zinc-500`), value below in crisp white.
   - Status badges: small pill format (`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium`).

---

## 4. Typography & Monospace Rules

| Element | Font Stack | Specs | Details |
| :--- | :--- | :--- | :--- |
| **Section Titles** | Inter / Geist Sans | 600 SemiBold / `text-lg` | Crisp, clean, zero ornamentation |
| **Metric Numbers** | JetBrains Mono / Geist Mono | 700 Bold / `text-2xl` | Numbers, amounts (`$12,500`), percentages (`75%`) |
| **Identifiers** | JetBrains Mono / Geist Mono | 500 Medium / `text-xs` | Invoice numbers (`#INV-2026-001`), UUIDs, git hashes |
| **UI Labels** | Inter / Geist Sans | 500 Medium / `text-xs` | Form labels, table headers, breadcrumbs |

---

## 5. Core Platform Components

### 5.1 Platform Chrome
- **Header ([components/platform/PlatformHeader.tsx](file:///d:/lab/projects/portfolio_platform/components/platform/PlatformHeader.tsx))**:
  - Minimal top navbar with brand mark (`Platform by Akshat`), breadcrumb route indicator, and live system status dot.
- **Footer ([components/platform/PlatformFooter.tsx](file:///d:/lab/projects/portfolio_platform/components/platform/PlatformFooter.tsx))**:
  - Clean SLA guarantee, encrypted session badge, and support email link.

### 5.2 Commercial Scoping Intake ([components/platform/InquiryEstimator.tsx](file:///d:/lab/projects/portfolio_platform/components/platform/InquiryEstimator.tsx))
- **Step-by-Step Architecture**:
  1. Service Tier selection (Advisory, Full-Stack Build, Systems Engineering, Retainer).
  2. Scope details & timelines.
  3. Real-time budget estimator range.
  4. Instant form submission to `/api/inquiries`.

### 5.3 Client Milestone Card ([components/platform/ClientMilestoneCard.tsx](file:///d:/lab/projects/portfolio_platform/components/platform/ClientMilestoneCard.tsx))
- Visual progress bar (`bg-emerald-500/20` track with `bg-emerald-500` fill).
- Target delivery date and deliverables checklist.

### 5.4 Client Invoice Card ([components/platform/ClientInvoiceCard.tsx](file:///d:/lab/projects/portfolio_platform/components/platform/ClientInvoiceCard.tsx))
- Financial breakdown with status pill (`PAID`, `PENDING`).
- Formatted currency (`Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' })`).
- One-click PDF download/view action.

---

## 6. Deliberate Anti-Patterns (Strictly Avoid)

- ❌ **No Whimsical or Hand-Drawn Elements**: Never introduce Rough.js sketches, doodles, or uneven borders.
- ❌ **No Cluttered Form Multi-Cols**: Keep intake forms single-column or cleanly aligned 2-column grids with high-contrast inputs.
- ❌ **No Low-Contrast Text**: Text must pass WCAG AA contrast against dark backgrounds (`text-zinc-100` or `text-zinc-400`).
- ❌ **Never Import Showcase Chrome**: Do not import the main `Navbar`, `Footer`, or `ChalkGritFilter` into any `app/(platform)/**` views.
