# Changes — Syrus First Push

This document lists all changes made to the IT Support Perth codebase during the Cursor session (Syrus first push).

---

## 1. Hero Section (`components/EnhancedHeroSection.tsx`)

### Layout & visibility
- **Background image:** Added `object-center` so the hero image stays visible in the first fold.
- **Content centering:** Content wrapper uses `min-h-[calc(100vh-5rem)]` and `flex flex-col justify-center` so the main grid is vertically centered in the first fold.
- **Spacing:** Standardised spacing with `space-y-6` for the left column and consistent gaps (`gap-6 sm:gap-8 md:gap-10 lg:gap-12` for the grid).

### Typography
- **H1:** Responsive sizes kept; at one point set to 40px at lg, then reverted to 48px via `lg:text-5xl`. Font weight set to `font-medium` (500).
- **Heading min-height:** Replaced fixed `h-[160px]` with responsive min-heights: `min-h-[3.5rem] sm:min-h-[4rem] md:min-h-[4.5rem] lg:min-h-[5.5rem]`.

### Content blocks
- **Left column:** Same min-height as right column: `min-h-[280px] sm:min-h-[340px] md:min-h-[400px] lg:min-h-0` (and matching right column).
- **Value proposition:** Icon and text sizes stepped by breakpoint; `min-w-0` on text to avoid overflow.
- **Trust message:** Responsive text sizes (`text-xs sm:text-sm md:text-base lg:text-lg`).

### CTA buttons
- **Alignment:** `justify-start` so buttons align left.
- **Size:** Larger buttons: `h-12`, `px-6 sm:px-8`, `py-3`, `text-base`, icon `w-5 h-5`.
- **Layout:** `gap-3 sm:gap-4`, `w-full sm:w-auto`, `flex-wrap` and `min-w-0` so the second button wraps instead of overflowing into the right column.
- **Comment:** Restored "pinned to bottom" behaviour with `mt-auto pt-4 sm:pt-5`.

### Responsive
- Container: `py-5 sm:py-6 md:py-8 lg:py-10`.
- Right column: `space-y-4 sm:space-y-5 md:space-y-6`, `mt-6 sm:mt-8 md:mt-10 lg:mt-0`.
- Trust row: `gap-3 sm:gap-4 md:gap-6`, `pt-4 sm:pt-5 md:pt-6`, responsive icon/text sizes.
- Urgency card: Padding and text sizes stepped by breakpoint.

---

## 2. Header (`components/Header.tsx`)

### Tablet hamburger
- **Nav visibility:** Main nav only on large screens: `hidden lg:flex` (was `hidden md:flex`).
- **Hamburger:** Shown below large breakpoint: `lg:hidden` (was `md:hidden`), so tablet uses the hamburger menu.

### Overflow & layout
- **Overflow:** `overflow-hidden` on header and inner row; `min-w-0` on container and left block.
- **Left block:** `flex-1 min-w-0 overflow-hidden` so logo + phone don't push the hamburger off.
- **Logo link:** `min-w-0 overflow-hidden`; text logo: `max-w-[50vw] md:max-w-none` so it can shrink on small/tablet.
- **Phone:** `truncate max-w-[120px] sm:max-w-[140px] md:max-w-none`.
- **Hamburger button:** `shrink-0`, `px-2 sm:px-3`.

### Sizing & spacing
- **Logo:** Steps: `w-[40px]` (mobile) → `sm:w-[48px]` → `md:w-[54px]` → `lg:w-[58px]` (and matching heights); text logo scaled the same way.
- **Row:** `py-2 sm:py-3`, `md:h-16 lg:h-24`, `gap-2 sm:gap-3`.
- **Nav (lg+):** `space-x-4 xl:space-x-6`, `text-sm xl:text-base`.

---

## 3. Blog Section → Blog carousel

### New: `components/BlogCarousel.tsx`
- **Client component** with paged carousel (no horizontal scroll).
- **Title:** "Latest from Our Blog" and subtitle about IT tips and insights.
- **Cards:** Testimonial-style (quote mark, optional image, date, title, description, "Read article" link).
- **Paging:** 1 card (mobile), 2 (tablet), 3 (desktop) per page via `useCardsPerPage()`.
- **Navigation:** Left/right arrows and dots (one per page); `AnimatePresence` for page transitions.
- **Data:** Accepts `BlogCarouselPost[]` (`slug`, `title`, `description`, `date`, `image?`).

### Updated: `components/blogs-section.tsx`
- **BentoGrid removed:** No longer uses BentoGrid or inline `PostHeader`.
- **Data flow:** Fetches posts with `getNormalizedPosts()`, maps to `BlogCarouselPost` (using `getTitle`, `getDescription`, `getDate`), renders `<BlogCarousel posts={carouselPosts} />`.
- **Display:** First 8 posts passed to the carousel.

---

## 4. Testimonials → Testimonials carousel (`components/SocialProofSection.tsx`)

### New: `TestimonialsCarousel` and `TestimonialCard`
- **TestimonialCard:** Single testimonial card (quote, stars, content, author block).
- **TestimonialsCarousel:** Paged carousel using `useCardsPerPage()`.
- **Layout:** 1 (mobile), 2 (tablet), 3 (desktop) testimonials per page in a grid.
- **Navigation:** Arrows and dots (one per page); `AnimatePresence` for transitions.

### Usage
- **Variant `testimonials`:** Section title/description + `<TestimonialsCarousel testimonials={testimonials} />`.
- **Combined variant:** "What Our Clients Say" block uses the same `<TestimonialsCarousel testimonials={testimonials} />` instead of a static grid.

### Imports
- Added: `useState`, `useCallback`, `useEffect`, `AnimatePresence`, `ChevronLeft`, `ChevronRight`, `Button`, `useCardsPerPage`.

---

## 5. Partners section → Partners carousel

### New: `components/PartnersCarousel.tsx`
- **Client component** for the Trust & Certifications partner logos.
- **Paging:** 5 (desktop), 4 (tablet), 3 (mobile) per page via `useCardsPerPage('partners')`.
- **Loop:** Infinite: Next on last page goes to first; Prev on first goes to last.
- **Auto-play:** `setInterval(goNext, 4000)`; no dots.
- **Wrapped slide content:** Each slide always shows full `cardsPerPage` items; second (and later) slides reuse from the start: `visible = Array.from({ length: cardsPerPage }, (_, i) => partners[(startIndex + i) % partners.length])`.
- **Styling:** Gradient/blur effect removed from partner cards; plain card with shadow only.
- **Grid:** `grid-cols-3 md:grid-cols-4 lg:grid-cols-5`.

### Updated: `app/page.tsx`
- **Partners block:** Replaced the static 7-column grid with `<PartnersCarousel partners={[...]} />` (same 7 partners).
- **Import:** Added `PartnersCarousel`; removed unused `Image` import.

---

## 6. Shared hook: `hooks/use-cards-per-page.ts`

### New file
- **`useCardsPerPage(preset?: 'default' | 'partners'): number`**
- **Default preset:** 1 (mobile &lt; 768px), 2 (tablet 768–1023px), 3 (desktop ≥ 1024px).
- **Partners preset:** 3 (mobile), 4 (tablet), 5 (desktop).
- Uses `window.matchMedia` and a `resize` listener; cleans up on unmount.

### Usage
- **BlogCarousel:** `useCardsPerPage()` (default 1/2/3).
- **SocialProofSection (TestimonialsCarousel):** `useCardsPerPage()` (default 1/2/3).
- **PartnersCarousel:** `useCardsPerPage('partners')` (3/4/5).

---

## 7. Footer (`components/Footer.tsx`)

- **Padding:** `p-5 sm:p-6 md:p-8 lg:p-10`.
- **Grid:** `gap-6 sm:gap-8`, added `sm:grid-cols-2` before `md:grid-cols-3`.
- **Divider:** `my-6 sm:my-8`.
- **Copyright:** `text-xs sm:text-sm`, `px-2` on small screens.

---

## 8. SEO

### Unchanged (preserved)
- **Home page metadata** (`app/page.tsx`): `title`, `description`, `keywords`, `openGraph`, `twitter`, `alternates.canonical`, `robots` — not modified this session.
- **StructuredData:** Home still renders `<StructuredData type="organization" />`; organization JSON-LD (name, url, logo, address, contactPoint, sameAs) unchanged.
- **Layout metadata** (`app/layout.tsx`): Root metadata, sitemap link, preload for landing image — unchanged.
- **Blog/post URLs:** Blog carousel links use the same slug-based URLs (`/blog/...` or `/${post.slug}`); no change to URL structure or canonical behaviour.

### SEO-positive aspects of UI changes
- **Single H1:** Hero keeps one `<h1>` ("Expert IT Support & Managed Services Perth"); no extra H1s added.
- **Section headings:** Blog carousel uses `<h2>` "Latest from Our Blog"; testimonials keep existing `<h2>` titles; Trust section keeps "Trusted Technology Partners" `<h2>`.
- **Link structure:** Blog carousel cards are `<Link href={blogUrl}>`; blog URLs and internal links preserved for crawlability.
- **Accessibility (helps UX/SEO):** Carousels use `aria-label`, `role="tablist"`, `role="tab"`, `aria-selected` where dots exist; arrow buttons have `aria-label="Previous"` / `"Next"`.
- **No content removed:** Testimonials, partners, and blog content are still present and reachable; only presentation (carousel vs grid) changed.

### Not modified this session
- `app/sitemap.ts`, `app/robots.ts`, `config/createPageMetadata.ts`, service page metadata, blog `[...slug]` metadata — no edits in this push.

---

## 9. Cursor rules compliance

- **Secrets:** All API keys and secrets from env (PostHog, Resend, Admin, SeoBot); no hardcoded keys.
- **PostHog:** Event and property names in const objects (`POSTHOG_EVENTS`, `POSTHOG_PROPERTIES`) in `SecurityAssessmentCTA.tsx`.
- **Code quality:** No TODO/FIXME in logic; reuse of `useCardsPerPage`; minimal, targeted changes; no dead code left in place.

---

## Files created

| File | Purpose |
|------|---------|
| `hooks/use-cards-per-page.ts` | Shared breakpoint-based "cards per page" (default & partners presets). |
| `components/BlogCarousel.tsx` | Paged blog carousel with title, testimonial-style cards, arrows + dots. |
| `components/PartnersCarousel.tsx` | Paged partners carousel, infinite loop, auto-play, no dots, wrapped slides. |
| `changes_syrus_first_push.md` | This changelog. |

---

## Files modified

| File | Summary of changes |
|------|--------------------|
| `components/EnhancedHeroSection.tsx` | Layout, spacing, typography, CTA size/alignment/wrap, responsive steps. |
| `components/Header.tsx` | Hamburger on tablet (lg breakpoint), overflow fixes, responsive logo/spacing. |
| `components/blogs-section.tsx` | Switched from BentoGrid to BlogCarousel; maps posts to carousel props. |
| `components/SocialProofSection.tsx` | TestimonialsCarousel + TestimonialCard; both testimonials views use carousel. |
| `components/Footer.tsx` | Responsive padding, grid gaps, sm grid cols, divider/copyright spacing. |
| `app/page.tsx` | Partners block uses PartnersCarousel; removed unused Image import. |
| `components/BlogCarousel.tsx` | Imports `useCardsPerPage` from `@/hooks/use-cards-per-page` (hook moved to shared file). |

---

## 10. Site audit fixes (sitemap, canonicals, links, meta, CWV)

### Sitemap (`app/sitemap.ts`)
- **SERVICE_PATHS:** Added constant listing all actual service page URLs; sitemap entries generated from it so all key service URLs are included.
- **Deduplication:** Sitemap output deduped so no duplicate URLs are listed.
- **Routes cleanup:** Removed dropdown links to non-existent pages (Business IT Support, Computer Repairs, Network Management, Remote IT Support) from the routes array.

### Canonicals
- **Domain:** All canonicals and internal URLs use `siteConfig.url` (`https://www.itsupportperth.net.au`); removed hardcoded `itsupportperth.com.au`.
- **StructuredData:** `components/StructuredData.tsx` uses `siteConfig.url` for all JSON-LD URLs.
- **Pages with canonicals:** Reviews, About Us, Blog (hub + post slug), all service pages; each has `alternates.canonical` and `openGraph.url` from `siteConfig.url`.
- **Blog post metadata:** `app/blog/[...slug]/page.tsx` uses `siteConfig.url` for `metadataBase` and canonical; meta description truncated to 160 chars.

### Service pages: broken link and naming
- **Broken link:** `/services-and-solutions/remote-support` (404) replaced with `/services-and-solutions/it-security-solutions` in Footer and on the services hub page; card title/description updated to "IT Security Solutions".
- **Rename IT Security → Firewall:** Where the link points to the Firewall page, label changed from "IT Security" to "Firewall Services" (Footer and services hub card).
- **Service pages missing metadata:** Added unique `metadata` (title, description, canonical, openGraph) and `url` for StructuredData on: Cloud Services, Firewall Service, AI-Enhanced IT Support, IT Consulting; also added metadata for the main services hub (`/services-and-solutions`).

### Core Web Vitals
- **Images:** Hero images updated from deprecated `layout="fill"` / `objectFit` to Next.js 13+ `fill`, `sizes="100vw"`, and `className="object-cover ..."` in services hub, ServicePageTemplate, AnimatedHero, EnhancedContactPage. Admin blog editor featured image given `width={640}` `height={360}` and `loading="lazy"`.
- **Scripts:** Apollo tracker in `app/layout.tsx` changed from `strategy="afterInteractive"` to `strategy="lazyOnload"`.

---

## 11. Meta tags optimization (from PDF)

New titles and meta descriptions applied site-wide per *IT Support Perth_ Meta Tags Optimization - Sheet1.pdf*. About Us and Contact Us left unchanged per PDF.

### Homepage and layout
- **Homepage** (`app/page.tsx`): Title — "Expert IT Support & Managed Services Perth | 24/7 Support". Description — "Perth's trusted IT experts serving 250+ businesses. Expert IT support, managed services, cybersecurity & cloud solutions. 20+ years experience. Free consultation."
- **Layout** (`app/layout.tsx`): Default metadata (title, description, openGraph, twitter) aligned with the new homepage copy.

### Services hub and service pages
| Page | New title | New description (summary) |
|------|-----------|---------------------------|
| Services hub | Comprehensive Proactive IT solutions in Perth \| IT Support Perth | With over 23 years of experience, IT Support Perth delivers managed IT, cybersecurity, cloud, AI support, backup solutions and more to keep your business secure. |
| Managed IT Services | Managed IT Services Perth \| Proactive IT Support \| 20+ Years Experience | Don't let IT problems slow your business. Reduce downtime, boost security, optimize systems, and ensure business continuity with IT Support Perth's expert solutions. |
| IT Security Solutions | Proactive IT Security & Cybersecurity Solutions for Perth SMBs | Protect your business from evolving cyber threats with IT Support Perth. Multi-layered proactive cybersecurity solutions for networks, email, cloud, and data. |
| Cloud Services | Cloud Services & Migration Perth \| Scalable Solutions for Business | Modernize with Perth's trusted IT partner. End-to-end cloud infrastructure, application hosting, and collaboration tools backed by a 100% local support team. |
| Backup & Disaster Recovery | Data Backup & Disaster Recovery \| Data Protection for Perth Businesses | Don't risk losing critical business data. Perth IT Experts provide cloud and local backups, disaster recovery, and ransomware protection for fast recovery. |
| IT Consulting | IT Consulting Services Perth \| Professional Business IT Strategy | Stop guessing with your IT. Get expert consulting in Perth to align your tech with your budget. Secure, strategic, and local guidance for sustainable growth. |
| On-Premises Server Management | On-Premises Server Management Perth \| IT Support Perth | Ensure your Perth business servers run at peak efficiency. Comprehensive on-site infrastructure management, 24/7 support, and guaranteed uptime. |
| Firewall Service | Perth FortiGate Firewall Services \| Network Protection | 43% of cyberattacks target SMBs. Stay protected with advanced firewall solutions, AI threat detection, and expert local monitoring from Perth's IT security leaders. |
| Email Protection | Perth Email Protection Services \| Spam, Phishing & Malware | Don't let email threat disrupt your business. AI-powered filtering & compliance management to secure your communications & block advanced threats. |
| AI-Enhanced IT Support | AI-Enhanced IT Support \| 24/7 Intelligent System Monitoring | Experience the future of IT with predictive analytics and intelligent security. Machine learning to detect threats and hardware failures before they occur. |

### Other pages
- **Reviews** (`app/reviews/page.tsx`): Title — "Customer Reviews & Testimonials | IT Support Perth". Description — "Looking for a reliable IT partner? Read reviews from Perth SMBs regarding our prompt service, reasonable pricing, and expertise in solving complex IT issues."
- **About Us / Contact Us:** No change (per PDF).

All updated pages have matching `openGraph.title` and `openGraph.description` where applicable. Email Protection title typo from PDF ("Pertth") corrected to "Perth".

**Escaped apostrophes in meta:** Backslashes (`\'`) were removed from page meta titles and descriptions by using double-quoted strings for those values (e.g. `"Don't"` and `"Perth's"` instead of `'Don\'t'` / `'Perth\'s'`). Updated: `app/page.tsx`, `app/about-us/page.tsx`, and the service pages managed-it-services-provider, firewall-service, cloud-services, backup-and-disaster-recovery-solutions, email-protection-service.

---

## Files modified (sections 10–11)

| File | Summary of changes |
|------|--------------------|
| `app/sitemap.ts` | SERVICE_PATHS, deduped sitemap, removed non-existent service links from routes. |
| `components/StructuredData.tsx` | All internal URLs use siteConfig.url. |
| `components/Footer.tsx` | Firewall Services label; Remote IT Support → IT Security Solutions link. |
| `app/services-and-solutions/page.tsx` | Metadata (title, description, canonical, openGraph); Firewall/IT Security Solutions cards; hero Image fill/sizes. |
| `app/services-and-solutions/managed-it-services-provider/page.tsx` | Meta tags optimization; meta description in double-quoted strings (no `\'`). |
| `app/services-and-solutions/it-security-solutions/page.tsx` | Meta tags optimization. |
| `app/services-and-solutions/cloud-services/page.tsx` | Metadata + url for StructuredData; meta tags optimization; meta description in double-quoted strings (no `\'`). |
| `app/services-and-solutions/backup-and-disaster-recovery-solutions/page.tsx` | Meta tags optimization; meta description in double-quoted strings (no `\'`). |
| `app/services-and-solutions/email-protection-service/page.tsx` | Meta tags optimization; meta description in double-quoted strings (no `\'`). |
| `app/services-and-solutions/on-premises-server-management/page.tsx` | Meta tags optimization. |
| `app/services-and-solutions/firewall-service/page.tsx` | Metadata + url for StructuredData; meta tags optimization; meta description in double-quoted strings (no `\'`). |
| `app/services-and-solutions/ai-enhanced-it-support/page.tsx` | Metadata + url for StructuredData; meta tags optimization. |
| `app/services-and-solutions/it-consulting/page.tsx` | Metadata + url for StructuredData; meta tags optimization. |
| `app/reviews/page.tsx` | Canonical; meta tags optimization. |
| `app/blog/page.tsx` | Canonical, StructuredData url from siteConfig. |
| `app/blog/[...slug]/page.tsx` | metadataBase/canonical from siteConfig; description truncation to 160 chars; openGraph.url = canonicalUrl. |
| `app/about-us/page.tsx` | openGraph/StructuredData URLs from siteConfig; meta description in double-quoted strings (no `\'`). |
| `app/page.tsx` | Meta tags optimization (homepage title/description); meta description in double-quoted strings (no `\'`). |
| `app/layout.tsx` | Default metadata aligned with new homepage; Apollo script strategy lazyOnload. |
| `components/ServicePageTemplate.tsx` | Hero Image: fill, sizes, object-cover class. |
| `components/AnimatedHero.tsx` | Hero Image: fill, sizes, object-cover class. |
| `components/EnhancedContactPage.tsx` | Hero Image: fill, sizes, object-cover class. |
| `app/admin/blog/editor/[id]/page.tsx` | Featured img: width, height, loading="lazy". |
| `changes_syrus_first_push.md` | This changelog (sections 10–11 appended). |

---

*Changelog for Syrus first push. Naming: `changes_syrus_first_push.md` (lowercase, underscores).*
