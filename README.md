# Better-Fit Leads — Independent B2B Prospect Research Website

Production-grade, conversion-focused B2B prospect research website built for **Tameem Khan** (Better-Fit Leads). Engineered with an editorial ivory & butter-yellow aesthetic, high-contrast typography pairing (*Instrument Serif* and *Manrope*), WCAG AA compliance, and single-accent conversion CTAs.

---

## 1. Architectural & Component Structure

The website strictly follows the 10 ordered sections requested, adhering to an 8pt spacing grid and a maximum content width of 1120px (`max-w-[1120px]`):

```
├── app/                              # Next.js App Router entry points
│   ├── layout.tsx                    # Root Layout with metadata, fonts, WCAG lang="en"
│   ├── page.tsx                      # Page mounting all 10 ordered sections
│   └── globals.css                   # Global Tailwind CSS and design tokens
│
├── src/
│   ├── components/                   # Modular React components
│   │   ├── Navbar.tsx                # Sticky nav, brand identity & desktop/mobile CTA
│   │   ├── Hero.tsx                  # Section 1: H1 "Better-fit leads, researched by hand.", 1-line subhead, subtle gradient
│   │   ├── ProofStrip.tsx            # Section 2: [X] prospects verified, [X]% fields confirmed, [X] clients
│   │   ├── SampleExplorer.tsx        # Section 3: Filterable table (Industry/Location/Signal), expandable rows, citations & unverified flags
│   │   ├── HowItWorks.tsx            # Section 4: 3-step timeline with deliverables & sample verification card
│   │   ├── Services.tsx              # Section 5: 4 core offers with deliverable lists & output schema snippets
│   │   ├── PricingSection.tsx        # Section 6: 3 tiers (Free sample / Starter [$XXX] / Retainer [$X,XXX/mo])
│   │   ├── Testimonials.tsx          # Section 7: Blinded case studies with client privacy disclosure
│   │   ├── AboutSection.tsx          # Section 8: Founder story (Tameem Khan), photo, unclipped heading
│   │   ├── FinalCTA.tsx              # Section 9: Sole "Have a target market in mind? Let's talk" heading, email & WhatsApp
│   │   ├── SampleRequestForm.tsx     # Embedded in Section 9: Name, email, company, niche, geography with validation & success state
│   │   ├── Footer.tsx                # Section 10: Minimal footer with mandatory deliverability disclaimer
│   │   └── StickyMobileCTA.tsx       # Bottom-docked sticky CTA on mobile viewports
│   │
│   ├── data/
│   │   └── sampleLeads.ts            # Strictly anonymized sample dataset with confidence scores & transparency flags
│   │
│   ├── App.tsx                       # Main Vite application entry
│   └── index.css                     # Design tokens, motion rules, and custom utilities
```

---

## 2. Inventory of Placeholders to Replace

Every metric, price, and client reference that requires real client data is clearly marked with brackets across the codebase:

| Location | Placeholder | Current Token | Purpose / What to Replace With |
| :--- | :--- | :--- | :--- |
| **ProofStrip.tsx** | Prospects Verified | `[X,XXX]` | Total cumulative prospects researched and verified to date (e.g., `2,450+`). |
| **ProofStrip.tsx** | Fields Confirmed | `[XX.X]%` | Overall data accuracy percentage from client delivery audits (e.g., `98.6%`). |
| **ProofStrip.tsx** | Founders & Agencies | `[XX]` | Total number of B2B clients / agency accounts served (e.g., `35+`). |
| **PricingSection.tsx** | Starter Batch Price | `[$XXX]` | Your fixed commercial price for a 250–500 lead batch (e.g., `$450` or `$600`). |
| **PricingSection.tsx** | Retainer Price | `[$X,XXX/mo]` | Monthly retainer pricing for continuous research pipelines (e.g., `$1,800/mo`). |
| **Testimonials.tsx** | Client 1 Identity | `[Client: Boutique Growth Agency]` | Real client name/company once written permission or NDA waiver is signed. |
| **Testimonials.tsx** | Client 1 Metric | `[Result: XX% Qualified Reply Rate]` | Real campaign outcome (e.g., `28% Qualified Reply Rate`). |
| **Testimonials.tsx** | Client 2 Identity | `[Client: Early-Stage B2B SaaS Founder]` | Real client name/company once written permission is granted. |
| **Testimonials.tsx** | Client 2 Metric | `[Result: XX Pipeline Conversations]` | Real pipeline impact (e.g., `14 Demo Calls Booked`). |
| **AboutSection.tsx** | Founder Portrait | `/profile.jpg` | Ensure `public/profile.jpg` contains your updated high-resolution professional portrait. |
| **FinalCTA.tsx** | WhatsApp Direct Link | `https://wa.me/923247071736` | Confirm or update your active business WhatsApp number. |
| **FinalCTA.tsx** | Primary Inbound Email | `khan.tameem@gmail.com` | Confirm your preferred inbound business email address. |

---

## 3. Checklist of Items Still Needing Real Data

Before launching public paid acquisition campaigns, complete this verification checklist:

- [ ] **1. Cumulative Verification Metric**: Replace `[X,XXX]` in `src/components/ProofStrip.tsx` with your actual verified record tally.
- [ ] **2. Accuracy Rate**: Replace `[XX.X]%` with your audited delivery pass rate.
- [ ] **3. Active Client Count**: Replace `[XX]` with the exact count of founders and agencies supported.
- [ ] **4. Starter Batch Pricing**: Decide your per-lead or starter package rate (e.g., replace `[$XXX]` with `$495`).
- [ ] **5. Monthly Retainer Pricing**: Decide your retainer bandwidth and pricing (e.g., replace `[$X,XXX/mo]` with `$1,750/mo`).
- [ ] **6. Client NDA Waivers**: Once client consent is secured, update the case studies in `src/components/Testimonials.tsx` or keep blinded case studies.
- [ ] **7. Backend Form Handler**: Currently `SampleRequestForm.tsx` operates with a transparent client-side simulation. Wire the form submission to your preferred transactional webhook (e.g., Formspree, Resend, Zapier, or Postmark) if you want automated email dispatch.
- [ ] **8. Domain DNS & Hosting**: Deploy to Vercel, Netlify, or Cloudflare Pages with SSL.

---

## 4. Key Design & Conversion Rules Enforced

1. **Bug Fixes Verified**:
   - **No Duplicate Headings**: The heading *"Have a target market in mind? Let's talk."* appears strictly once in the Final CTA section.
   - **No Clipped Headings**: The *"About Tameem Khan"* heading is rendered with generous top/bottom padding and `overflow-visible`, completely preventing ascender clipping.
   - **One Primary CTA Per Section**: Every section features exactly one primary conversion button styled in the single accent color (`#3F5BD8`), eliminating visual competition.
2. **Strict Anonymization**: Zero real individual names or proprietary agency brands are used without written consent; all sample records use anonymized executive roles and sanitized public domains.
3. **Transparent Positioning**: Every record is backed by source citations. Unknown fields are explicitly flagged as unverified—never guessed.
4. **Mandatory Deliverability Disclaimer**: Disclosed across the Hero, Form, and Footer: *"Research quality alone cannot guarantee inbox placement or downstream sales results."*
