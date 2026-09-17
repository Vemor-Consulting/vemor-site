# Vemor Web Audit — vemor.ai + comps.vemor.ai

**Date:** 2026-09-17 · **Lens:** brand/positioning strategy + conversion-grade design review
**Benchmark referenced:** pagatracker.com (competitor, $0–50/mo tier product)

---

## 1. The one strategic problem

Vemor.ai is not "too much" because Vemor does several things. It is too much because
**one page speaks to two different buyers at once**:

- An **SMB owner** (smog shops, service businesses) looking for phones/automation.
- A **California employment attorney** evaluating a data product.

The attorney who lands on vemor.ai sees smog-station reconciliation stories before
they see settlement data. The SMB owner sees PAGA jargon. Each audience reads 75%
of the page as "not for me." That is the "what is his niche?" feeling — it is not
an identity crisis, it is an **audience-routing failure**.

**The fix is separation of audiences, not separation of companies:**

| Property | Audience | Job |
|---|---|---|
| **vemor.ai** | SMB owners | Sell managed AI operations + voice. Comps appears once, as a routing card: "For law firms → Vemor Comps." |
| **vemor.ai/comps** (near-term) → eventually a public **comps.vemor.ai landing** | Attorneys | Sell Vemor Comps as a standalone product with its own nav, its own Sign in button, and product proof on screen. |
| **comps.vemor.ai** (today: the gated app) | Signed-in attorneys | The product. Gets a "Sign in" entry point from the marketing page. |

Gio's instinct ("separate login on vemor.ai to redirect to comps") is right and
cheap: a **Sign in** link on the /comps page header → comps.vemor.ai. At cloud
migration, graduate to the PAGA Tracker model: public landing at comps.vemor.ai
root, app behind /app + Access.

**The unifying niche (say it once, everywhere):** Vemor builds AI systems whose
output can be checked. "Every figure verified against its source" (Comps) and
"if Vemor disappeared tomorrow, your business wouldn't notice" (services) are the
same brand value: **verifiable, exit-safe AI**. That is the moat statement.

---

## 2. What PAGA Tracker gets right (and what not to copy)

Their homepage, honestly assessed:

- **The product IS the hero.** A working search bar above the fold, live "Recent
  Filings" feed, four stat chips (200K+ records / $1.2B / 1,700 firms / Daily).
  You *use* the product before you read about it.
- **Persistent top nav with Sign In.** The visitor always knows the product has a
  door.
- **News/insights feed** = fresh content, SEO, and a reason to return.

What NOT to copy: the navy-SaaS template look (generic, interchangeable), and the
$50 positioning. Vemor's editorial gold-and-white identity is *more* premium and
should stay — the gap is **proof density**, not palette. They show data; we show
prose. At $6-12K/month, we must show *more* product than the $50 tool, not less.

---

## 3. vemor.ai — page-by-page

### Home (score: copy A-, design B, conversion B-)

Strengths: the smog-shop case study is genuinely excellent (specific numbers,
narrative arc); "If Vemor disappeared tomorrow…" is a killer differentiator; the
five-step process is clear; brand typography is clean and consistent.

Fixes, in priority order:

1. **Nav collapses to hamburger below 1080px** (`global.css` @media 1080). Most
   laptop windows are 1000-1280px — half of desktop visitors get a mobile menu.
   Drop the breakpoint to ~860px and let desktop always see: Voice · Builds ·
   Operations · **Comps** · About · Book a Call.
2. **Four services with equal visual weight** → re-weight to a primary path.
   Recommended hierarchy: Managed AI Operations (the core service) as hero,
   Voice as the entry product, Builds as the on-ramp, and **Comps as a visually
   distinct "For law firms" band** (different background tint, its own CTA to
   /comps) — clearly a *product*, not a fourth service.
3. **No social proof above the fold.** "1,000+ businesses visited" is about Gio,
   not about clients. Move "The system paid for itself in the first month" up;
   add the Comps line "in production use at a national employment defense
   practice" to the Comps band.
4. **No product visuals anywhere.** The page is 100% typography. Add: one
   screenshot-style mock of the nightly reconciliation email, one of the Comps
   report cover. Real artifacts beat abstract claims.

### About (score: copy B+, structure B-)

The founder story is strong and differentiated (operator-not-consultant,
first-gen, bilingual, 1,000 shop visits). Two gaps:

1. **It ends without a mission.** Gio wants the "AI for good / give people their
   time back" statement — the raw material already exists ("life's too short to
   spend it on busywork") but it's rendered as a pull-quote, not a thesis.
   Recommended closing block (draft):

   > **Why Vemor exists**
   > AI is going to remake small business. The only question is whether it
   > happens *to* owners or *for* them. Vemor exists to make sure the people
   > who actually do the work — the shop owners, the Spanish-speaking operators,
   > the folks closing out registers at 9 PM — get their time back first.
   > We build systems you can check, you can leave, and you can trust with the
   > business your family depends on. Life's too short to spend it on busywork.
   > That's not a tagline. It's the product spec.

2. **The credential block reads as a resume.** Convert to three proof pillars:
   Operator (14 years, 1,000 visits) · Builder (systems in production, list
   them) · Verifier (MBA/STEM, the "checkable" discipline). Every credential
   under one of the three.

### /comps (score: copy A, design B, conversion B+)

This page's copy is the best on the site — verification-led, honest coverage
statement, real FAQ, strong disclaimer. Fixes:

1. **Add "Attorney sign-in" to the page header** → comps.vemor.ai. Existing
   customers currently have no path from marketing to product. (Gio's ask; one
   line of code today.)
2. **The illustrative table should become a real artifact.** Show the actual
   branded report (sanitized page 1 as an image) and the actual app search
   screen. "Illustrative data only" undercuts a product whose entire pitch is
   verification.
3. **Make the stats live.** The app already exposes `/api/coverage`; the page
   shows a static "20,000+". Pull matter/document/firm counts nightly at build
   (or client-side) with a "as of <date>" stamp — a growing number is proof the
   corpus is alive.

---

## 4. comps.vemor.ai (the product)

Post brand-unification (9/15-16) the app itself is consistent: correct lockup,
neutral surfaces, Inter everywhere, matching PDFs/Excel, clean Access login with
sign-out. Remaining product-experience gaps, ranked:

1. **No public front door.** The domain IS the login wall. Fine for a pilot;
   wrong for a product being sold to ten firms. At cloud migration, put the
   marketing landing at the root and gate the app at /app (or app.vemor.ai).
   Until then, vemor.ai/comps is the front door — link it from the login page
   footer (`footer_text` already says vemor.ai; good enough).
2. **No first-run experience.** A dormant attorney signing in for the first time
   lands on a search box with no guidance. Add a dismissible first-visit strip:
   "New here? Type any plaintiff firm (try the one on your newest case) and
   press Generate — the report takes ~30 seconds." Directly serves the
   dormant-reactivation goal.
3. **Empty-state coaching.** A search with no results should suggest: "Not in
   the corpus yet? We add firms on request within 3-5 days — email
   comps@vemor.ai."

---

## 5. Prioritized roadmap

**P0 — this week, hours (do before cold outreach lands eyeballs on the site):**
- /comps header "Attorney sign-in →" link
- Nav breakpoint fix (1080 → ~860)
- Comps band on the homepage restyled as a distinct "For law firms" product card
- About page mission block (draft above)

**P1 — next 2 weeks, a day or two:**
- Real report imagery + app screenshot on /comps; live coverage stats
- Homepage re-weighting (Operations hero, proof moved up, artifact mocks)
- First-run strip + empty-state coaching in the app

**P2 — at cloud migration:**
- Public landing at comps.vemor.ai root, app gated behind it
- Insights/news feed on the Comps landing (PAGA trend notes; SEO + return visits;
  the Digest engine can feed this)

---

## 6. What NOT to change

- The gold/white editorial identity. It is more premium than every competitor.
- The verification-led copy on /comps. It is the moat, in words.
- The smog-shop case study. Specific beats slick.
- The umbrella structure itself. Holding-brand + product is how this scales to
  "Vemor <X> Comps" in other jurisdictions.
