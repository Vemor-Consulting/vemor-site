# vemor.ai: Progress Log

Newest first. Start here for site work. The pre-November history lives one folder up in
`../PROGRESS.md` (August rebuild) and `SITE_AUDIT_2026-09-17.md`.

Repo: github.com/Vemor-Consulting/vemor-site · Stack: Astro (static) · Hosting: Netlify.
Deploy: Netlify cannot auto-deploy this private org repo on the free tier, so deploys are a
manual zip drag (see "How to deploy" below and `../DEPLOY_FIX.md`).

## Copy rules (standing)

- **No em dashes anywhere** on the site or in case studies. Use periods, commas, colons.
- Same aesthetic: white background, Vemor gold `#a68b2d`, Inter, existing components. No new
  backgrounds, no palette changes.
- Minimal and digestible. If a section repeats a point made elsewhere, cut it.
- No "small business" framing, no public prices.
- Company voice ("we" / "Vemor"). About page in third person.
- Client names only with written OK. Never mention the CARB / OBDII project.
- Spanish is written natively (tú), not translated word for word.

## 2026-11-12: lean homepage, case studies, EN/ES (branch `positioning-refresh-es`)

**Positioning:** Vemor builds and runs AI systems for the parts of a business where a mistake
costs money, and answers for them. Buyer is the operator (multi-location, mid-market, firms),
not "small business."

**Homepage, 5 sections:** hero (slogan, one sentence, proof row) · What We Do (Assess, Build,
Run) · Case Studies (2 cards + one line for Vemor Comps and Pizarrón) · The Vemor Standard
(3 cards) · CTA.

**Case studies** (`src/content/caseStudies.ts`, both languages, rendered by
`src/views/CaseStudy.astro`):
- `/case-studies/reconciliation`: one report became four systems (anonymized operator).
- `/case-studies/settlement-verification`: Vemor Comps verification engine, including the
  Sept/Oct quote-verification failure and fix (facts from `Clients/Andrew/PROGRESS.md`, 10/25).
- Format: problem, what we found, what we built, how we know it works, what broke (or where
  the line is), result, what it taught us.

**Spanish:** `/es`, `/es/about`, `/es/operations`, `/es/builds`, `/es/contact`,
`/es/case-studies/*`. EN | ES pill in the nav. Page copy for both languages lives in
`src/views/*.astro`; `src/pages/` only holds thin wrappers. Comps, Voice, methodology,
glossary, and legal pages are English only (ES switch sends them to `/es`).

**Other:** Sofia voice widget only on `/voice`. Voice is out of the nav (reachable from Builds).
About headline is plain ("Giovanni Vega, Founder.").

**Open before deploy:**
- [ ] Gio fact-check of both case studies (station count, "several rounds" of report
      revisions, the 2% to 23% figures, "623 documents").
- [ ] After deploy: confirm `vemor.ai/es` resolves (relies on `public/_redirects`) and the
      contact form posts from both languages.

## Backlog

- **WhatsApp and LinkedIn links.** Wait for the business cell number (not 858-422-6344, which
  is not Gio's WhatsApp). Then add small icons to the footer and two lines on Contact
  (`wa.me/<number>` and the LinkedIn profile URL), muted gray that turns gold on hover.
- **Case study PDFs.** Generate a branded PDF of each case study from the same content file
  (house template `docs/templates/vemor_doc.py` in the Comps repo) and add a "Download PDF"
  link. Use as a sales leave-behind.
- **Email-gated downloads (later).** Keep case study pages ungated (they are the trust
  builder). Gate a bigger asset instead, e.g. a "before you put AI in production" checklist:
  email field → Netlify form → auto-reply with the PDF. Needs a sending domain and a list
  policy before it ships.
- **Third case study:** Pizarrón recipe-costing catch (dessert showing 114% food cost from a
  unit error, really about 10%). Needs Ernesto's OK; it is Grupo Los Arcos data.
- Case studies index page (`/case-studies`) once there are 3+.
- Spanish versions of Comps and Voice if the Mexican market needs them.
- Pizarrón public page once the name is final ("Pizarrón by Vemor").

## How to deploy

```bash
cd ~/Vemor/Website/vemor-site-v2
npm run build
cd dist && zip -r ~/Desktop/vemor-site-DEPLOY.zip . && cd ..
```

Drag the zip onto the Netlify Deploys page for vemor.ai.
