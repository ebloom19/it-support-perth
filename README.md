# it-support-perth

[Edit in StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/ebloom19/it-support-perth)

Next.js website for IT Support Perth (itsupportperth.net.au).

## Major Changes

### SEO & Canonical URLs
- Set `metadataBase` and canonical URLs across layout and pages
- Added metadata (title, description, OpenGraph) to service pages
- Sitemap includes all service routes and blog posts
- Human-readable sitemap preview at `/sitemap-preview`

### llms.txt
- Dynamic route at `/llms` (rewrites for `/llms.txt` and `/.well-known/llms.txt`)
- Preview mode for human-readable view

### Optional Backend Services
- SeoBot API: Returns null if `SEOBOT_API_KEY` not set; sitemap returns empty array
- Database: Conditionally fetches posts only if `DATABASE_URL` configured
- App runs without full backend credentials

### Theme & Accessibility
- Replaced gradient text with solid `text-foreground` / `text-primary` for dark mode
- Fixed `text-[#01042b]` → `text-foreground` for visibility in dark theme
- Improved contrast on dark backgrounds (SocialProofSection, ServicePageTemplate)

### Performance
- Hero: Opacity-only animations, reserved min-height, static background elements
- LCP image `sizes` optimized

### PostHog
- Event and property names centralized in `SecurityAssessmentCTA` (POSTHOG_EVENTS, POSTHOG_PROPERTIES)
