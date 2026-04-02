# Portfolio Spec — Vishal Sharma
## AI-Powered HTML Portfolio Brief (Feed to HTML Generator)

---

## IDENTITY

- **Name:** Vishal Sharma
- **Title:** Fullstack AI Engineer
- **Role (context):** R&D Lead @ 100xEngineers
- **LinkedIn:** https://www.linkedin.com/in/sharma-vishall
- **Email:** iamvishal.inbox@gmail.com
- **GitHub:** [to be added]

---

## DESIGN SYSTEM

### Colors (100xEngineers Brand — strict)
```
--bg:           #0A0A0A   (page background)
--surface:      #141414   (card background)
--elevated:     #1A1A1A   (hover/elevated card)
--primary:      #FF6B35   (main accent — coral/orange)
--secondary:    #F96846   (secondary accent — used in borders, glows)
--text:         #FFFFFF
--text-muted:   #A0A0A0
--text-dim:     #666666
--border:       #2A2A2A
--border-accent:#F96846
```

### Typography
```
Headings:  Space Grotesk (Google Fonts) — weight 700
Body:      Space Grotesk — weight 400
Mono/tags: JetBrains Mono — weight 500
```

### Visual Language
- Dark theme only. #0A0A0A base — not #000000.
- Coral (#FF6B35) is the ONLY accent color. No blue, no purple, no green.
- Cards use subtle border: 1px solid #2A2A2A, hover upgrades to 1px solid rgba(249,104,70,0.3)
- Glow effects: box-shadow 0 0 30px rgba(249,104,70,0.12) on hover
- Radial gradient ambient behind hero: radial-gradient(ellipse at 50% 30%, rgba(255,107,53,0.07) 0%, transparent 60%)
- Scanline animation: 1px horizontal line sweeping down, rgba(255,107,53,0.03) — very subtle
- All cards: border-radius 16px
- Glassmorphism navbar: background rgba(10,10,10,0.85), backdrop-filter blur(16px)

---

## PAGE STRUCTURE (top to bottom)

```
1. NAVBAR (fixed, glassmorphism)
2. HERO SECTION
3. ABOUT STRIP
4. PROJECTS SECTION (5 projects)
5. SKILLS SECTION
6. CONTACT SECTION
7. FOOTER
```

---

## SECTION 1 — NAVBAR (fixed)

**Left:** `VS` monogram in JetBrains Mono, coral color
**Right nav links:** Work | About | Contact

- Fixed top, glassmorphism, thin bottom border 1px solid rgba(255,255,255,0.04)
- No heavy shadow. Clean and barely there.

---

## SECTION 2 — HERO

### Layout
Full viewport height. Centered vertically and horizontally.
Ambient radial glow behind text (coral, very dim).
Subtle HUD-style rings (3 concentric circles, coral at 4-6% opacity, slowly rotating).

### Copy — EXACT TEXT

```
[MONO LABEL, coral, letter-spaced 5px, uppercase, small]
R&D Lead @ 100xEngineers

[HERO HEADLINE — large, Space Grotesk 700, white]
I build AI systems
that actually ship.

[SUBHEADLINE — muted, weight 300]
Fullstack AI Engineer specializing in agentic infra,
custom LLM pipelines, and voice AI. Every project
here has real users, real metrics, and real impact.

[TWO CTA BUTTONS]
Primary (coral bg, white text): "See My Work"  --> scrolls to #projects
Secondary (transparent, coral border): "Get In Touch" --> scrolls to #contact
```

### Animated Stats Bar (below CTAs)
Three numbers separated by vertical dividers:

```
5         |    1000+      |    Rs.7.5L+
Projects  |  Queries/month  |  Revenue Generated
```

---

## SECTION 3 — ABOUT STRIP

Narrow horizontal band. Dark surface (#141414). Two columns: left = text, right = a short tag cloud of technologies.

### Copy — EXACT TEXT

```
[SECTION LABEL — mono, small, coral]
// about

[HEADING]
Not just an AI engineer.
A product builder.

[BODY — 2 short paragraphs]
I joined 100xEngineers as R&D Lead to figure out
one thing: how do you take cutting-edge AI research
and turn it into systems real people actually use?

Every project here answers that question — from
a voice agent that cuts mentor prep by 80%, to a
closed-loop analytics system that makes an entire
teaching operation smarter over time.
```

### Tag Cloud (right column, mono font, small pills)
```
LiveKit  |  FAISS  |  RAG Pipelines  |  LangChain
Claude API  |  OpenClaw  |  Next.js  |  Supabase
Gemini  |  Imagen 4  |  Kling AI  |  python-pptx
N8N  |  VPS Deployment  |  Multi-agent Systems
```

---

## SECTION 4 — PROJECTS

### Section Header
```
[MONO LABEL]
// work

[HEADING]
Five systems. Five real problems solved.
```

### Layout
Staggered card layout — alternating full-width and side-by-side cards.
- Project 1 (ZENO): Full-width hero card (featured — biggest, most important)
- Projects 2+3: Side by side (edith left, Community Events right)
- Projects 4+5: Side by side (Sage+Scout left, Animated Slides right)

Each card contains:
- Project number tag (01, 02, etc.) in mono, dim color
- Project name in large Space Grotesk 700
- One-line role descriptor in mono, coral
- 2-3 sentence description (exact copy below)
- Impact metrics row (coral numbers, mono labels)
- Tech stack pills
- CTA links (Live Demo / Deck / Dashboard)

---

### PROJECT 01 — ZENO

**Card style:** Full-width hero card. Has a subtle animated diagram of the pipeline on the right half (can be CSS/SVG — showing: voice --> RAG --> skill infra --> output files).

**Tag:** `01 / VOICE AI + RAG`

**Name:** `Zeno`

**One-liner (mono, coral):** `Autonomous Teaching Intelligence`

**Description — EXACT COPY:**
```
Mentors were spending hours each week manually creating lesson plans,
slides, and practice sets. Zeno conducts a Socratic voice discovery
session, searches 80+ lectures via FAISS semantic retrieval, and
delivers a complete branded teaching package in under 3 minutes.

The crown jewel is a proprietary 2-phase Skill Infrastructure:
Phase 1 — LLM parses mentor intent into a typed Pydantic JSON spec.
Phase 2 — deterministic Python renders pixel-perfect PPTX and DOCX
across 15+ slide types. Zero rendering API tokens. Zero formatting
failures. 10x cost reduction versus raw LLM generation.
```

**Impact Metrics Row:**
```
80%          <3 min        <$1           10x
Workload     Topic to      Per complete  Cost
Reduction    Full Package  Lesson Pack   Reduction
```

**Tech Stack Pills:**
```
LiveKit  |  Claude Haiku  |  FAISS  |  OpenAI Embeddings
python-pptx  |  python-docx  |  Google Drive API  |  Pydantic
```

**CTAs:**
- `View HLD Deck` — https://edith-zeno.vercel.app/zeno-hld-presentation.html

---

### PROJECT 02 — edith

**Tag:** `02 / MULTI-AGENT SYSTEMS`

**Name:** `edith`

**One-liner (mono, coral):** `AI Employee Operating System`

**Description — EXACT COPY:**
```
Seven specialized AI agents. One orchestrator. Deployed on a VPS
and in daily use by company leadership via Telegram and WhatsApp.

Each agent has a defined role, trust boundary, and communication
protocol. Dwight ingests daily AI intelligence from newsletters,
YouTube, and Twitter — then writes a structured brief that Kelly
(Twitter), Rachel (LinkedIn), and Chandler (Blog) consume to
generate platform-specific content. Richard runs an automated
AI resume screening pipeline connected to N8N hiring workflows.
Pam manages calendar and email in draft-only mode by design —
because trust boundaries matter as much as capability.

The hardest problem wasn't building the agents. It was defining
clean interfaces between them and managing cross-project data
flow across Zeno, the Discord bot database, and external automation.
```

**Impact Metrics Row:**
```
7            20 hrs        Live VPS      End-to-End
AI Agents    Reclaimed/wk  Production    Owned Infra
```

**Tech Stack Pills:**
```
OpenClaw  |  Claude API  |  N8N  |  Telegram API
WhatsApp API  |  VPS  |  Python  |  Multi-agent Orchestration
```

**CTAs:**
- `View System Deck` — https://edith-zeno.vercel.app/

---

### PROJECT 03 — COMMUNITY EVENTS PLATFORM

**Tag:** `03 / FULLSTACK PRODUCT`

**Name:** `100xEngineers Events`

**One-liner (mono, coral):** `High-Stakes Event Platform — Solo Build`

**Description — EXACT COPY:**
```
Built the company's flagship events and ticketing platform from
scratch — solo, outside my core AI domain. The site needed to
handle a major cohort launch under real pressure.

It saw 1 lakh+ visitors in launch week, converted Rs.7.5 lakh+
in ticket revenue within 7 days, and became the primary lead
funnel for attracting high-quality cohort candidates. Proves
that product ownership — design, frontend, backend, payments,
deployment — matters as much as AI expertise.
```

**Impact Metrics Row:**
```
Rs.7.5L+     1 Lakh+       7 Days        Solo
Revenue      Traffic       Post-Launch   End-to-End Build
```

**Tech Stack Pills:**
```
Next.js  |  Supabase  |  Tailwind  |  Vercel  |  TypeScript
```

**CTAs:**
- `Live Site` — https://events.100xengineers.com/

---

### PROJECT 04 — SAGE + SCOUT

**Tag:** `04 / AGENTIC INFRA + ANALYTICS`

**Name:** `Sage + Scout`

**One-liner (mono, coral):** `Closed-Loop Cohort Intelligence System`

**Description — EXACT COPY:**
```
Not support bots — a closed feedback loop that turns student
confusion into curriculum signal.

Sage and Scout answer 1000+ queries/month across tech and
non-tech domains, speaking in the company's voice via a RAG
pipeline built on the full cohort knowledge base. 89.6% of
queries resolve without any mentor intervention.

The real innovation is the Memory Layer: every query is RAG-matched
to a specific lecture and module, then persisted to a live analytics
dashboard. Mentors see exactly which topics generate confusion,
which are trending week-over-week, and which spiral into escalations.
That signal feeds directly into Zeno's lesson planning — the loop closes.

Zero new tables. Zero extra API calls. One system that eliminates
support bottleneck and makes the entire teaching operation smarter.
```

**Impact Metrics Row:**
```
89.6%        1,000+        81.8%         Closed Loop
Self-Service  Queries/mo   "Got It" Rate  Memory System
```

**Tech Stack Pills:**
```
Python  |  FAISS  |  Supabase  |  Next.js  |  Discord API
RAG Pipelines  |  OpenAI Embeddings  |  Recharts
```

**CTAs:**
- `Live Dashboard` — https://sage-dashboard-100x.vercel.app/

---

### PROJECT 05 — ANIMATED SLIDES PIPELINE

**Tag:** `05 / GENERATIVE MEDIA`

**Name:** `Cinematic Presenter`

**One-liner (mono, coral):** `A New Approach to How Presentations Are Made`

**Description — EXACT COPY:**
```
Presentations haven't changed in 30 years. They're still static slides.

This pipeline takes a single topic string and produces a cinematic
AI presentation: Gemini 2.5 Flash structures 10 slides with
narrative-aware content. Imagen 4 generates native 16:9 cinematic
visuals per slide. Kling 2.1 Pro generates morph transition videos
between every slide pair.

Stage 4 is pure Python — bundles everything into one self-contained
HTML file with all images and videos base64-embedded. Works offline.
No server. No npm install. Double-click to present.

Full cinematic deck for ~$2. A completely new primitive for how
AI-generated content is authored and consumed.
```

**Impact Metrics Row:**
```
4-Stage      ~$2           100%          Zero
AI Pipeline  Full Deck     Offline-Ready  Manual Design
```

**Tech Stack Pills:**
```
Gemini 2.5 Flash  |  Imagen 4  |  Kling 2.1 Pro  |  fal.ai
Python  |  Base64 Embedding  |  Checkpoint Resume
```

**CTAs:**
- `Live Output Example` — https://animated-slides-output.vercel.app/

---

## SECTION 5 — SKILLS

### Section Header
```
[MONO LABEL]
// capabilities

[HEADING]
What I actually build with.
```

### Layout
4-column grid of skill groups. Each group: category label (mono, coral, small) + list of tools.

```
AI / LLM INFRA          AGENTIC SYSTEMS         VOICE AI               FULLSTACK
--------------          ---------------         --------               ---------
RAG Pipeline Design     Multi-agent Orch.       LiveKit                Next.js / React
FAISS Vector Search     OpenClaw Framework      Whisper STT            Supabase
OpenAI Embeddings       N8N Automation          TTS Integration        TypeScript
Pydantic Schemas        VPS Deployment          Real-time Processing   Tailwind CSS
LLM Prompt Eng.         Cross-agent Comms       HITL Patterns          Vercel Deploy
Claude / Gemini APIs    Trust Boundary Design   Streaming Audio
Cost Optimization
```

---

## SECTION 6 — CONTACT

### Layout
Simple centered section. Dark surface card.

### Copy — EXACT TEXT
```
[MONO LABEL]
// contact

[HEADING]
Let's build something real.

[BODY]
I'm open to senior AI engineering roles at product companies
that care about shipping AI that works — not demos that impress
in a deck but fall apart in production.

[TWO CONTACT LINKS]
iamvishal.inbox@gmail.com
linkedin.com/in/sharma-vishall
```

---

## SECTION 7 — FOOTER

```
[Left] Vishal Sharma — Fullstack AI Engineer
[Right] Built with conviction. No templates.
[Bottom center — mono, dim] © 2026
```

---

## VISUAL RAZZLE-DAZZLE SPEC (Animations & Interactions)

### 1. Hero ambient background
- 3 concentric HUD rings, coral 4-6% opacity, rotating at different speeds (40s, 30s reversed, 50s)
- Scanline: 1px line sweeping top-to-bottom, 6s loop, very subtle
- Radial glow behind hero text: radial-gradient coral 7% opacity

### 2. Scroll-triggered reveals
- All sections fade up + translateY(28px) → 0 on entering viewport
- Stagger delay per child: 0.08s increments
- Transition: cubic-bezier(0.16, 1, 0.3, 1)

### 3. Project cards
- Hover: translateY(-4px), border upgrades to coral 30% opacity, box-shadow coral glow
- Top edge accent bar (3px coral) scales from scaleX(0) to scaleX(1) on hover — transform-origin left
- Impact metric numbers: count-up animation when card enters viewport (0 → final value, 1.5s)

### 4. Metric numbers (count-up)
- Use IntersectionObserver. When stat enters view, animate number from 0 to final.
- Duration: 1500ms, easing: ease-out

### 5. Tech stack pills
- Subtle shimmer sweep on hover: background-position animation

### 6. Navbar
- Starts transparent, transitions to glassmorphism on scroll past 50px
- Active section highlights nav link in coral

### 7. CTA buttons
- Primary: coral bg, white text. Hover: brightness 110%, slight scale(1.02)
- Secondary: transparent, coral border. Hover: fill coral bg, text white

### 8. Cursor (optional enhancement)
- Custom cursor dot (8px coral circle) that follows mouse with slight lag (lerp)
- Scales to 32px on hovering links/buttons

### 9. Project 01 (Zeno) hero card — pipeline diagram
- Animated SVG or CSS diagram showing the flow:
  VOICE IN --> RAG SEARCH --> SKILL INFRA --> [PPTX | DOCX | PDF]
- Dashed lines with dashOffset animation (flowing coral lines)
- Nodes pulse gently with breathe keyframe

---

## HTML GENERATION INSTRUCTIONS (for the AI generating this)

1. Single HTML file. No framework. Vanilla HTML + CSS + JS only.
2. All fonts via Google Fonts CDN (Space Grotesk + JetBrains Mono).
3. No external JS libraries except optional GSAP CDN for scroll animations.
4. All CSS in `<style>` tag in `<head>`. All JS in `<script>` tag before `</body>`.
5. Use CSS custom properties (variables) for all colors.
6. Fully responsive — mobile-first. Navbar collapses to hamburger on mobile.
7. Semantic HTML: nav, main, section, article, footer.
8. Smooth scroll behavior on html element.
9. All placeholder links marked with comment: `<!-- LINK PLACEHOLDER -->` for easy find/replace.
10. Project cards: data attributes for metric end-values so JS count-up can read them.
11. No external image dependencies — use CSS gradients and SVG for all visuals.
12. Performance: no layout shift, no render-blocking resources.
13. File should work by simply opening in a browser — zero build step.

---

## PLACEHOLDER MAP (links to fill in later)

| Placeholder | Description |
|---|---|
| `[ZENO_HLD_LINK]` | https://edith-zeno.vercel.app/zeno-hld-presentation.html |
| `[edith_DECK_LINK]` | https://edith-zeno.vercel.app/ |
| `[GITHUB_LINK]` | GitHub profile |

---

## CONTENT HIERARCHY (importance order for above-fold)

If screen space is tight, preserve in this order:
1. Name + title + 2-line hero headline
2. Zeno project (most technically complex, most impact)
3. Sage+Scout (best metrics — 89.6% self-service)
4. Community Events (only revenue number)
5. edith (production deployment signal)
6. Animated Slides (innovation signal)

---

## SYSTEM DESIGN DIAGRAMS (for portfolio cards — render as CSS/SVG in HTML)

### IMPORTANT RENDERING NOTE
Each project card should include a simple, clean system design diagram.
Style: dark bg (#141414), coral (#FF6B35) lines/nodes, mono font labels.
Nodes = rounded rectangle pills. Arrows = simple lines with arrowheads.
Keep it minimal — shows architecture at a glance, not implementation detail.

---

### PROJECT 01 — ZENO SYSTEM DESIGN

```
                    ZENO — AUTONOMOUS TEACHING INTELLIGENCE
                    (from actual HLD, verified from codebase)

  MENTOR SPEAKS
  +-----------------------------+
  | LiveKit AgentSession (WebRTC)|
  | Whisper STT transcription    |
  +-------------+---------------+
                |
                v
  +-------------+---------------+       +--------------------------------+
  | Claude Haiku SESSION LLM     |       | FAISS IndexFlatL2              |
  | (120s timeout, $0.80/MTok)   |       | 80+ lectures indexed           |
  | Socratic discovery: 7 Qs     |<----->| OpenAI text-embedding-3-small  |
  | builds full topic context    |       | 1536 dims, L2 distance scoring |
  +-------------+---------------+       +--------------------------------+
                |
                | intent confirmed --> calls generate_lesson_plan tool
                v
  +-------------+---------------+
  | Claude Haiku WORKER LLM      |
  | (400s timeout)               |
  | outputs: lesson plan text    |
  +-------------+---------------+
                |
                v
  +==============================+  <-- THE PROPRIETARY ENGINE
  |  100x CUSTOM SKILL INFRA     |
  |                              |
  |  PHASE 1 (Non-Deterministic) |
  |  parser.py + schema.py       |
  |  Claude Sonnet: lesson plan  |
  |  --> typed JSON spec          |
  |  3k input + 2k output tokens |
  |  Pydantic-validated output   |
  |                              |
  |  PHASE 2 (Deterministic)     |
  |  renderer.py                 |
  |  JSON spec --> python-pptx   |
  |  15+ typed slide templates   |
  |  100x brand: Space Grotesk   |
  |  + coral theme, zero tokens  |
  +==============================+
        |               |
        v               v
  +----------+    +----------+
  | PPTX     |    | DOCX     |
  | Slides   |    | Practice |
  | $0.039   |    | $0.039   |
  | per deck |    | per deck |
  +----+-----+    +-----+----+
       |                |
       +-------+--------+
               |
               v
  +----------------------------+
  | Google Drive API (OAuth2)  |
  | auto-upload to:            |
  | LessonPlans/ Slides/       |
  | Practice/                  |
  +----------------------------+

  COST REALITY (from HLD):
  Before (raw LLM): ~$0.40 per full lesson
  Now (Skill Infra): ~$0.13 per full lesson  --> 67% cheaper
  With Haiku Phase 1: ~$0.05 per full lesson --> 87% cheaper
  Phase 2 cost: $0.000 (pure Python, zero tokens)
  Failure rate: Near-zero (deterministic rendering)
```

---

### PROJECT 02 — edith SYSTEM DESIGN

```
                    edith — AI EMPLOYEE OPERATING SYSTEM

  INPUT CHANNELS                    edith ORCHESTRATOR
  +--------------+                  +--------------------+
  | Telegram     |                  |  OpenClaw Gateway  |
  | (ideas)      +-- idea:text -->  |  (Claude Haiku)    |
  +--------------+                  |  SOUL.md identity  |
  | WhatsApp     +-- commands -->   |  AGENTS.md rules   |
  | (Sid + team) |                  +-----+------+-------+
  +--------------+                        |      |
                                          |      |
           DAILY CRON PIPELINE            |      |
           (12:00pm IST)                  |      |
  +-------------------------+             |      |
  |  DWIGHT (Research)      |<------------+      |
  |  MVP-c6-test pipeline   |                   |
  |  - Twitter (Apify)      |   DAILY-INTEL.md  |
  |  - RSS feeds            +-----------------> intel/
  |  - YouTube API          |                   |
  |  - GPT-4o scoring       |            +------+------+
  +-------------------------+            |      |      |
                                         v      v      v
                               +-------+ +------+ +----------+
                               | KELLY | |RACHEL| | CHANDLER |
                               |Twitter| |Linked| | Blog     |
                               |3 tweet| |1-2 p.| | Mon only |
                               +---+---+ +--+---+ +----+-----+
                                   |        |           |
                                   v        v           v
                              drafts/twitter/ linkedin/ blog/

  ON-DEMAND AGENTS (WhatsApp triggered, no cron)
  +----------+   +----------+   +----------+   +----------+
  |  PAM     |   | RICHARD  |   | SHELDON  |   | ZENO     |
  | Gmail    |   | Hiring   |   | Discord  |   | Voice    |
  | Calendar |   | Google   |   | Analytics|   | Teaching |
  | draft-only   | Sheets + |   | Supabase |   | Agent    |
  | (no auto)|   | N8N flow |   | + GPT-4o |   | (bridge) |
  +----------+   +----------+   +----------+   +----------+

  ENV TEMPLATE (required keys):
  ANTHROPIC_API_KEY=sk-ant-...
  OPENAI_API_KEY=sk-...
  SUPABASE_URL=https://...supabase.co
  SUPABASE_KEY=eyJ...
  X_API_KEY, X_API_SECRET, X_ACCESS_TOKEN, X_ACCESS_TOKEN_SECRET
  APIFY_API_KEY=apify_api_...
  DEVTO_API_KEY=...  (for blog posting)
```

---

### PROJECT 03 — COMMUNITY EVENTS SYSTEM DESIGN

```
                    100xENGINEERS EVENTS PLATFORM

  USER
  +----------+
  | Browser  |
  +----+-----+
       |
       v
  +----+------------------------+
  |    Next.js (App Router)    |
  |    Vercel Edge Network     |
  |    events.100xengineers.com |
  |                            |
  |  /              [Landing]  |
  |  /events/[id]   [Detail]   |
  |  /checkout      [Payment]  |
  |  /admin         [Dashboard]|
  +----+------------------------+
       |
  +----+----------+    +-------------------+
  | Supabase DB  |    | Payment Gateway   |
  | - events     |    | (Razorpay/Stripe) |
  | - tickets    |    +-------------------+
  | - attendees  |
  | - leads      |
  +--------------+

  SCALE: 1 lakh+ visitors | Rs.7.5L+ revenue | 7 days
```

---

### PROJECT 04 — SAGE + SCOUT SYSTEM DESIGN

```
             SAGE + SCOUT — CLOSED-LOOP COHORT INTELLIGENCE
             (single Python process, two bots, one Render service)

  STUDENT IN DISCORD FORUM THREAD
  +----------------------------------+
  | @Sage  - technical curriculum Q  |
  | @Scout - FAQ / logistics Q       |
  +----------------------------------+
          |                |
          v                v
  +-----------+      +-----------+
  | SAGE BOT  |      | SCOUT BOT |
  | Tech RAG  |      | FAQ RAG   |
  +-----------+      +-----------+
  | FAISS idx |      | FAISS idx |
  | 37 lectures|     | 24 FAQs   |
  | OAI embed |      | OAI embed |
  | GPT-4.1-m |      | GPT-4.1-m |
  | Supabase  |      | urgency   |
  | analytics |      | detection |
  +-----------+      +-----------+
          |
          | SMART ROUTING (2-layer):
          | Layer 1: keyword check (~0.001s, $0 cost)
          | Layer 2: RAG score fallback (>1.5 = redirect)
          | wrong bot? --> redirect message to correct bot
          |
          v (Sage queries only)
  +---------------------------+
  | LOG TO SUPABASE           |
  | table: analytics_events   |
  | event_type: query/got_it/ |
  |   need_help/tag_crew      |
  | metadata:                 |
  |   query_text              |
  |   matched_lectures[]      |
  |     lecture_num, module   |
  |     rag_score (4dp)       |
  +-------------+-------------+
                |
     +----------+----------+
     |                     |
     v                     v
  +------------------+  +-------------------+
  | SAGE DASHBOARD   |  | MEMORY LAYER      |
  | Next.js / Vercel |  | feeds ZENO        |
  | /overview:       |  | lesson planning   |
  |  634 queries/30d |  | signal:           |
  |  89.6% self-svc  |  | "students stuck   |
  |  81.8% got-it    |  |  on module X"     |
  | /common-queries: |  | --> Zeno adjusts  |
  |  topic heatmap   |  |     next lesson   |
  |  escalation map  |  +-------------------+
  |  trending topics |
  +------------------+

  INFRA: Single process (asyncio.TaskGroup) = $25/mo vs $50 for 2 services
  THE LOOP: confusion --> RAG match --> topic signal --> lesson adjustment
  89.6% self-service | 1000+ queries/month | 81.8% "got it" rate
  Zero new tables. Zero extra API calls for memory layer.
```

---

### PROJECT 05 — ANIMATED SLIDES SYSTEM DESIGN

```
              CINEMATIC PRESENTER — AI SLIDE PIPELINE
              (verified from main.py + src/ stage files)

  CLI: python main.py "How to Build AI Agents" my-deck
  FLAGS: --slides-only | --skip-transitions | --image-backend gemini
      |
      v  validate_env() checks API keys before starting
      |
  +---+----------------------------------+
  | STAGE 1: src/stage1_slides.py        |
  | Model: Gemini 2.5 Flash              |
  | Output: output/my-deck/slides.json   |
  | Content: 10 slides, each with:       |
  |   title, subtitle, image prompt      |
  | Cost: ~$0.00 (Gemini free tier)      |
  +---+----------------------------------+
      |
      |  --slides-only flag exits here
      v
  +---+----------------------------------+
  | STAGE 2: src/stage2_images.py        |
  | Backend A: Imagen 4 (default)        |
  |   native 16:9, no cropping           |
  | Backend B: Gemini image gen          |
  |   --image-backend gemini flag        |
  | Output: output/my-deck/images/       |
  |   slide_01.png ... slide_10.png      |
  | CHECKPOINT: skips existing files     |
  | Cost: ~$0.10-0.20 (10 images)        |
  +---+----------------------------------+
      |
      |  --skip-transitions flag skips stage 3
      v
  +---+----------------------------------+
  | STAGE 3: src/stage3_transitions.py   |
  | Model: Kling 2.1 Pro via fal.ai      |
  | Input: slide N image + slide N+1     |
  | Output: output/my-deck/transitions/  |
  |   t_01_02.mp4 ... t_09_10.mp4        |
  | CHECKPOINT: skips existing files     |
  | Cost: ~$1.25-2.50 (9 transitions)    |
  +---+----------------------------------+
      |
      v
  +---+----------------------------------+
  | STAGE 4: src/stage4_player.py        |
  | Pure Python. Zero API calls.         |
  | base64-embeds all images + videos    |
  | bundles into single player.html      |
  | Keyboard controls: SPACE/arrows/     |
  |   G (grid), P (prompts), F (full)    |
  | Output: output/my-deck/player.html   |
  | Works: offline, double-click, done   |
  +---+----------------------------------+

  TOTAL COST: ~$1.35-2.70 full | ~$0.25 no transitions | $0.00 slides-only
  ENV NEEDED: GEMINI_API_KEY + KLING_API_KEY (fal.ai)
```

---

## edith — FULL HLD FOR PORTFOLIO (simplified, visual-friendly version)

This is the version that goes on the portfolio card / deck link.

### Agent Roster (complete)
| Agent | Character | Role | Trigger |
|---|---|---|---|
| Dwight | Dwight Schrute (The Office) | Daily AI research pipeline | Cron 12:00pm IST |
| Kelly | Kelly Kapoor (The Office) | Twitter/X content drafts | Cron 12:35pm IST |
| Rachel | Rachel Green (Friends) | LinkedIn post drafts | Cron 12:45pm IST |
| Chandler | Chandler Bing (Friends) | Long-form blog (Dev.to) | Cron Mon 12:25pm IST |
| Pam | Pam Beesly (The Office) | Gmail + Calendar, draft-only | Cron 9am/11am/1pm/3pm/5pm/6pm |
| Richard | Richard Hendricks (Silicon Valley) | AI resume screener | On-demand WhatsApp |
| Sheldon | Sheldon Cooper (TBBT) | Discord analytics + curriculum mapping | On-demand WhatsApp |

### Self-Healing
- HEARTBEAT.md fires after 14:00 IST — checks if daily agents ran, force-runs any that missed, notifies on WhatsApp
- Runs once per day max (state-gated via heartbeat-state.json)

### Data Flows
```
Telegram ideas --> workspace/ideas/YYYY-MM-DD.md
Dwight pipeline --> workspace/intel/DAILY-INTEL.md
Kelly output --> workspace/drafts/twitter/YYYY-MM-DD.md
Rachel output --> workspace/drafts/linkedin/YYYY-MM-DD.md
Chandler output --> workspace/drafts/blog/YYYY-MM-DD.md
Supabase (Discord) --> Sheldon analytics
Gmail/GCal --> PAM briefings
Google Sheets (n8n) --> Richard hiring reports
```

### Infrastructure
- Runtime: OpenClaw (open-source agent framework)
- Model: Claude Haiku 4.5 (all agents)
- Scoring: GPT-4o (Dwight pipeline only)
- Hosting: VPS (self-managed)
- Monthly cost: ~$55-95 all-in
