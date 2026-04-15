"use client";

import { useEffect, useState, useCallback } from "react";
import { flushSync } from "react-dom";
import {
  Sun,
  Moon,
  ChevronUp,
  Mail,
  FileText,
  ExternalLink,
} from "lucide-react";
import {
  TwitterIcon,
  LinkedInIcon,
  VerifiedIcon,
} from "@/components/icons";

// ---- Dark mode hook ----
function useDarkMode() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = stored === "dark" || (!stored && prefersDark);
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = useCallback((e?: React.MouseEvent) => {
    const next = !dark;
    const x = e?.clientX ?? window.innerWidth / 2;
    const y = e?.clientY ?? window.innerHeight / 2;

    const applyTheme = () => {
      flushSync(() => setDark(next));
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
    };

    if (!("startViewTransition" in document)) {
      applyTheme();
      return;
    }

    document.documentElement.style.setProperty("--vt-x", `${x}px`);
    document.documentElement.style.setProperty("--vt-y", `${y}px`);

    const cls = next ? "vt-to-dark" : "vt-to-light";
    document.documentElement.classList.add(cls);
    const t = document.startViewTransition(applyTheme);
    t.finished.finally(() => document.documentElement.classList.remove(cls));
  }, [dark]);

  return { dark, toggle };
}

// ---- CornerMarker ----
function CornerMarker({ className }: { className: string }) {
  return (
    <div className={`absolute ${className}`}>
      <div className="relative flex size-3 items-center justify-center">
        <div className="absolute h-[1.5px] w-full bg-zinc-400 dark:bg-zinc-400" />
        <div className="absolute h-full w-[1.5px] bg-zinc-400 dark:bg-zinc-400" />
      </div>
    </div>
  );
}

// ---- SectionDivider (diagonal hatch + full-width screen lines) ----
function SectionDivider() {
  return (
    <div
      className="border-x border-edge screen-line-before screen-line-after select-none overflow-hidden"
      style={{ height: 40 }}
    >
      <div
        className="w-full h-full"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(113,113,123,0.45) 0px, rgba(113,113,123,0.45) 1px, transparent 1px, transparent 9px)",
        }}
      />
    </div>
  );
}

// ---- DotBanner (footer) ----
function DotBanner() {
  return (
    <div className="border-x border-edge select-none">
      <div
        className="h-full min-h-[110px] w-full bg-center px-[5px]"
        style={{
          backgroundImage: "radial-gradient(rgba(113,113,123,0.4) 1px, transparent 0)",
          backgroundSize: "10px 10px",
        }}
      />
    </div>
  );
}

// ---- Cycling subtitle ----
const SUBTITLES = ["R&D Lead @ 100xEngineers", "AI Systems that Ship.", "Real Numbers. Real Impact."];

function CyclingSubtitle() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((i) => (i + 1) % SUBTITLES.length);
        setVisible(true);
      }, 300);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <p
      className="font-mono leading-snug text-balance text-muted-foreground"
      style={{ fontSize: 'clamp(10px, 2.5vw, 14px)', opacity: visible ? 1 : 0, transition: "opacity 0.3s" }}
    >
      {SUBTITLES[index]}
    </p>
  );
}

// ---- ProfileCard ----
function ProfileCard({ dark }: { dark: boolean }) {
  return (
    <div className="relative border-x border-edge" style={{ height: 'clamp(112px, 22vw, 168px)' }}>
      <CornerMarker className="top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
      <CornerMarker className="top-0 right-0 translate-x-1/2 -translate-y-1/2" />
      <CornerMarker className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
      <CornerMarker className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />

      <div className="flex h-full flex-row">
        {/* Avatar */}
        <div className="h-full aspect-square overflow-hidden flex-shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={dark ? "/pfp_dark.png" : "/pfp1.png"}
            alt="Vishal Sharma"
            className="size-full object-cover object-top"
          />
        </div>

        {/* Info */}
        <div className="flex flex-1 flex-col justify-center gap-1 pl-2 sm:pl-4 min-w-0">
          {/* Name */}
          <h1 className="font-pixel leading-none font-black flex items-center gap-1.5" style={{ fontSize: 'clamp(15px, 4vw, 28px)' }}>
            Vishal Sharma
            <VerifiedIcon className="size-4 sm:size-5 flex-shrink-0" />
          </h1>

          {/* Cycling subtitle */}
          <CyclingSubtitle />

          {/* Status */}
          <span className="flex min-h-4 items-center gap-1.5 font-mono text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#00d560" }} />
            Currently Building<span className="blink ml-0.5">|</span>
          </span>
        </div>
      </div>
    </div>
  );
}

// ---- TerminalWidget ----
function TerminalWidget() {
  return (
    <div className="flex flex-col rounded-lg border border-border bg-card px-3 py-2.5 shadow-sm font-mono text-xs w-full sm:w-fit sm:mx-auto">
      <div className="flex items-center gap-1.5 mb-2">
        <span className="size-2 rounded-full bg-red-400/70" />
        <span className="size-2 rounded-full bg-yellow-400/70" />
        <span className="size-2 rounded-full bg-green-400/70" />
        <span className="ml-1 text-muted-foreground text-[10px]">terminal — vishal@prod</span>
      </div>
      <div className="space-y-1 text-muted-foreground">
        <div><span className="text-foreground">$</span> git push origin main</div>
        <div className="flex items-center gap-1.5">
          <span style={{ color: "#00c758" }}>✓</span>
          <span>deployed — feat/zeno-mcp-server</span>
        </div>
        <div><span className="opacity-60">repo:</span> vishal/zeno · branch: main</div>
        <div className="flex items-center gap-1.5">
          <span className="size-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#00c758" }} />
          <span>live in production</span>
        </div>
      </div>
    </div>
  );
}

// ---- AboutSection ----
function AboutSection() {
  return (
    <section id="about" className="relative border-x border-edge" style={{ padding: 'clamp(20px, 4vw, 32px) clamp(16px, 5vw, 32px)' }}>
      <CornerMarker className="top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
      <CornerMarker className="top-0 right-0 translate-x-1/2 -translate-y-1/2" />
      <CornerMarker className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
      <CornerMarker className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
      <h2 className="font-pixel font-semibold text-muted-foreground mb-4" style={{ fontSize: 'clamp(20px, 4.5vw, 30px)' }}>
        <span className="font-mono text-xs text-muted-foreground/40 mr-2 align-middle">01 /</span>About
      </h2>
      <ul className="space-y-3 list-none">
        {[
          "R&D Lead at 100xEngineers. I own the full stack — architecture, build, deploy — for every AI system the company ships. Not demos. Real products handling real user traffic.",
          "I build from first principles. Most engineers wrap an API and call it innovation. I ask why the layer exists before I touch it. That's why I built a 2-phase skill infrastructure from scratch instead of burning tokens on LLM-rendered slides — 87% cheaper, near-zero failures.",
          "Right now I'm deep in ambient AI. Zeno started as a voice teaching agent. Now it's becoming the intelligence layer for smart glasses. The next interface isn't another chat window."
        ].map((text, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed">
            <span className="mt-1 size-1.5 rounded-full bg-muted-foreground flex-shrink-0" />
            {text}
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <TerminalWidget />
      </div>
    </section>
  );
}

// ---- ConnectSection ----
const CONNECT_LINKS = [
  { label: "X / Twitter", href: "https://x.com/vishalsh2903", icon: TwitterIcon, preview: "/X.png" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sharma-vishall", icon: LinkedInIcon, preview: "/Linkedin.png" },
  { label: "Mail", href: "https://mail.google.com/mail/?view=cm&to=iamvishal.inbox@gmail.com", icon: Mail, preview: null },
  { label: "Resume", href: "/Vishal_Sharma_Resume_work.pdf", icon: FileText, preview: "/resume.png" },
] as unknown as { label: string; href: string; icon: React.ComponentType<{ className?: string }>; preview: string | null }[];

function ConnectSection() {
  return (
    <section id="connect" className="relative border-x border-edge" style={{ padding: 'clamp(20px, 4vw, 32px) clamp(16px, 5vw, 32px)' }}>
      <CornerMarker className="top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
      <CornerMarker className="top-0 right-0 translate-x-1/2 -translate-y-1/2" />
      <CornerMarker className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
      <CornerMarker className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
      <h2 className="font-pixel font-semibold text-muted-foreground mb-4" style={{ fontSize: 'clamp(20px, 4.5vw, 30px)' }}>
        <span className="font-mono text-xs text-muted-foreground/40 mr-2 align-middle">02 /</span>Connect
      </h2>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {CONNECT_LINKS.map((link) => {
          const Icon = link.icon;
          return (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center gap-1.5 rounded-lg border border-border p-3 hover:bg-muted transition-colors touch-manipulation active:opacity-75"
            >
              {link.preview && (
                <div className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 shadow-lg -translate-x-1/2 translate-y-1 scale-95 opacity-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 ease-out">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={link.preview} alt={link.label} style={{ maxWidth: '280px' }} />
                </div>
              )}
              <Icon className="size-5" />
              <span className="text-xs font-medium leading-none">{link.label}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}

// ---- ProjectsSection ----
const PROJECTS = [
  {
    tag: "01 / VOICE AI + RAG",
    name: "Zeno",
    role: "Autonomous Teaching Intelligence",
    bullets: [
      "Voice AI teaching system at 100xEngineers — 6-turn Socratic conversation backed by live RAG against 37 lectures before any content is generated; mentor prep time 3–4 hrs → under 30 min",
      "80%+ cost cut: LLM outputs a validated JSON spec; deterministic Python renderer produces slides with zero LLM calls in the render layer — $1+ → under $0.20 per lesson",
      "Cross-session memory per mentor — each Socratic question dynamically framed from mentor input + retrieved lecture context, preventing generic AI output at the source",
    ],
    cta: { label: "View HLD Deck", href: "https://edith-zeno.vercel.app/zeno-hld-presentation.html" },
    skills: ["LiveKit", "ElevenLabs", "FAISS", "Claude Sonnet", "Pydantic", "MCP", "python-pptx"],
  },
  {
    tag: "02 / MULTI-AGENT SYSTEMS",
    name: "EDITH",
    role: "AI Chief of Staff",
    bullets: [
      "7-agent production OS — Dwight scores AI research via Claude Opus 4.6, writes DAILY-INTEL.md; Kelly/Rachel/Chandler consume it independently via file contract; no message-passing, no coupling. 30+ hrs/month reclaimed for CTO",
      "Trust boundary by design: Pam drafts emails, never sends; drafts calendar events, never creates — one bad autonomous send to an investor costs more than a human's 15-second review. Asymmetry baked into architecture",
      "HEARTBEAT monitor detects silent pipeline failures, force-reruns the responsible agent, notifies CTO on WhatsApp — state-gated via JSON to fire once per day. Zero manual intervention on failure",
    ],
    cta: { label: "View System Deck", href: "https://edith-zeno.vercel.app/" },
    skills: ["OpenClaw", "Claude Opus", "Claude Sonnet", "Tailscale", "N8N", "Python", "Telegram API"],
  },
  {
    tag: "03 / FULLSTACK PRODUCT",
    name: "100xEngineers Events",
    role: "High-Stakes Event Platform — Solo Build",
    bullets: [
      "Solo-built the company's owned ticketing platform — 100k+ visitors in launch week, zero downtime, $15k+ from a single cohort launch; chose Razorpay over Stripe for native UPI + lower Indian checkout friction",
      "Registration designed as a lead funnel: every attendee submits structured profile data (role, yoe, what_building) gated at checkout — output is a segmented, pre-qualified candidate database, not a ticket list",
    ],
    cta: { label: "Live Site", href: "https://events.100xengineers.com/" },
    skills: ["Next.js", "Supabase", "Razorpay", "TypeScript", "Vercel Edge"],
  },
  {
    tag: "04 / AGENTIC INFRA + ANALYTICS",
    name: "Sage + Scout",
    role: "Closed-Loop Cohort Intelligence System",
    bullets: [
      "Dual-bot system — 1,000+/week student queries, response time 4–5 hrs (manual ops) → instant; 89.6% self-service rate, 81.8% resolution confirmation",
      "Closed loop: every query RAG-matched to a specific lecture, persisted to Supabase, surfaced on ops dashboard — confusion data from cohort N directly changes lesson plans for cohort N+1",
      "2-layer routing: keyword classifier at ~0.001s/$0, RAG score fallback only when ambiguous; both bots in a single asyncio process — $25/month vs $50 for two services",
    ],
    cta: { label: "Dashboard", href: "https://sage-dashboard-100x.vercel.app/" },
    skills: ["FAISS", "GPT-5 Mini", "Supabase", "discord.py", "asyncio", "OpenAI Embeddings"],
  },
  {
    tag: "05 / MCP INFRASTRUCTURE",
    name: "Zeno MCP Server",
    role: "Protocol-Native Knowledge Infrastructure",
    bullets: [
      "Production MCP server on Cloudflare Workers — exposes the 100xEngineers knowledge base inside Claude, ChatGPT, and Cursor with zero new UI, zero context switch; one server, any MCP-compatible client, forever",
      "8-layer security for an AI-facing API: rate limiting (30 req/60s), DoS prevention, path whitelisting, prompt injection sanitization (7 patterns stripped + content delimiters), security headers, PostHog abuse tracking in real time",
      "Zero LLM in the server — pure KV retrieval at Cloudflare edge; intelligence lives in the client. No cold start, per-request billing, globally distributed",
    ],
    skills: ["Cloudflare Workers", "Cloudflare KV", "MCP Protocol", "PostHog", "TypeScript"],
  },
  {
    tag: "06 / AI SCREENING",
    name: "HireX",
    role: "AI Resume Screener at Scale",
    bullets: [
      "Scores 1,000+ real alumni resumes per JD via rubric-based evaluation — skills, seniority markers, domain experience, project evidence scored independently then aggregated; placement ops time 2 hrs/day → shortlist review only",
      "JD-specific, not generic: same candidate scores differently per role — Python depth matters for a backend JD, irrelevant for a PM JD; each result includes rubric breakdown so ops can interrogate the score, not just trust a number",
    ],
    cta: { label: "Live Site", href: "https://hirex-100x.vercel.app/" },
    skills: ["Claude Opus", "Python", "RAG", "Supabase", "Next.js", "Vercel"],
  },
  {
    tag: "07 / GENERATIVE MEDIA",
    name: "Cinematic Presenter",
    role: "A New Primitive for AI Presentations",
    bullets: [
      "End-to-end AI media pipeline: writes content, generates 16:9 cinematic visuals via Imagen 4, animates transitions via Kling — full cinematic deck for ~$2",
      "Output is a single self-contained offline HTML file — no server, no app, double-click to present",
    ],
    cta: { label: "Live Output", href: "https://animated-slides-output.vercel.app/" },
    skills: ["Gemini 2.5 Flash", "Imagen 4", "Kling 2.1 Pro", "fal.ai", "Python"],
  },
];

function ProjectsSection() {
  return (
    <section id="projects" className="relative border-x border-edge" style={{ padding: 'clamp(20px, 4vw, 32px) clamp(16px, 5vw, 32px)' }}>
      <CornerMarker className="top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
      <CornerMarker className="top-0 right-0 translate-x-1/2 -translate-y-1/2" />
      <CornerMarker className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
      <CornerMarker className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
      <h2 className="font-pixel font-semibold text-muted-foreground mb-6" style={{ fontSize: 'clamp(20px, 4.5vw, 30px)' }}>
        <span className="font-mono text-xs text-muted-foreground/40 mr-2 align-middle">03 /</span>Projects
      </h2>
      <div className="space-y-8">
        {PROJECTS.map((project) => (
          <div key={project.name}>
            <div className="flex items-start gap-3 mb-3">
              <div className="flex-shrink-0 mt-0.5">
                <span className="flex items-center justify-center size-7 rounded-md border border-border text-xs font-mono text-muted-foreground">
                  {"</>"}
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-mono text-xs text-muted-foreground mb-0.5">{project.tag}</p>
                    <h3 className="font-pixel font-bold leading-tight" style={{ fontSize: 'clamp(16px, 3.5vw, 20px)' }}>{project.name}</h3>
                    <p className="font-mono text-xs text-muted-foreground mt-0.5">{project.role}</p>
                  </div>
                  {"cta" in project && project.cta && (
                    <a
                      href={project.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 flex items-center gap-1 rounded-md border border-border px-2 py-1 text-xs text-muted-foreground hover:bg-muted transition-colors font-mono"
                    >
                      {project.cta.label}
                      <ExternalLink className="size-3" />
                    </a>
                  )}
                </div>

                <div className="mt-3 border-l border-border pl-4 space-y-2">
                  {project.bullets.map((b, i) => (
                    <p key={i} className="flex gap-2 text-sm leading-relaxed">
                      <span className="mt-1.5 size-1 rounded-full bg-muted-foreground flex-shrink-0" />
                      {b}
                    </p>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 mt-3">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded border border-border px-2 py-0.5 text-xs font-mono text-muted-foreground"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ---- ExperienceSection ----
const EXPERIENCE = [
  {
    company: "100xEngineers",
    role: "R&D Lead",
    type: "Full-time",
    dates: "August 2025 – Present",
    skills: ["LiveKit", "ElevenLabs", "FAISS", "Claude Opus", "MCP", "OpenAI Embeddings", "RAG Pipelines", "Multi-Agent Orchestration", "N8N", "Pydantic", "Supabase", "Tailscale", "Python", "TypeScript", "Next.js"],
  },
  {
    company: "Schneider Electric",
    role: "Hardware System Intern",
    type: "Internship",
    dates: "June 2024 – August 2024",
    skills: ["Python", "Embedded C", "Ultrasonic Sensing", "GPS Integration", "IoT System Design", "Sensor Fusion"],
  },
];

function ExperienceSection() {
  return (
    <section id="experience" className="relative border-x border-edge" style={{ padding: 'clamp(20px, 4vw, 32px) clamp(16px, 5vw, 32px)' }}>
      <CornerMarker className="top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
      <CornerMarker className="top-0 right-0 translate-x-1/2 -translate-y-1/2" />
      <CornerMarker className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
      <CornerMarker className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
      <h2 className="font-pixel font-semibold text-muted-foreground mb-4" style={{ fontSize: 'clamp(20px, 4.5vw, 30px)' }}>
        <span className="font-mono text-xs text-muted-foreground/40 mr-2 align-middle">04 /</span>Experience
      </h2>
      {EXPERIENCE.map((entry, i) => (
        <div key={i} className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <span className="size-1.5 rounded-full bg-foreground flex-shrink-0" />
            <h3 className="text-lg leading-snug font-medium">{entry.company}</h3>
          </div>
          <div className="ml-4 border-l border-border pl-4">
            <div className="flex items-start justify-between gap-2 mb-2">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center size-7 rounded-md border border-border text-xs font-mono text-muted-foreground">
                  {"</>"}
                </span>
                <div>
                  <h4 className="font-medium text-balance">{entry.role}</h4>
                  <p className="text-sm text-muted-foreground font-mono">
                    {entry.type} <span className="mx-1.5">|</span> {entry.dates}
                  </p>
                </div>
              </div>
              <span className="text-muted-foreground flex-shrink-0">
                <ChevronUp className="size-4" />
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {entry.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded border border-border px-2 py-0.5 text-xs font-mono text-muted-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

// ---- EducationSection ----
function EducationSection() {
  return (
    <section id="education" className="relative border-x border-edge" style={{ padding: 'clamp(20px, 4vw, 32px) clamp(16px, 5vw, 32px)' }}>
      <CornerMarker className="top-0 left-0 -translate-x-1/2 -translate-y-1/2" />
      <CornerMarker className="top-0 right-0 translate-x-1/2 -translate-y-1/2" />
      <CornerMarker className="bottom-0 left-0 -translate-x-1/2 translate-y-1/2" />
      <CornerMarker className="bottom-0 right-0 translate-x-1/2 translate-y-1/2" />
      <h2 className="font-pixel font-semibold text-muted-foreground mb-4" style={{ fontSize: 'clamp(20px, 4.5vw, 30px)' }}>
        <span className="font-mono text-xs text-muted-foreground/40 mr-2 align-middle">05 /</span>Education
      </h2>
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <span className="size-1.5 rounded-full bg-foreground flex-shrink-0" />
          <h3 className="text-lg leading-snug font-medium">Vellore Institute of Technology</h3>
        </div>
        <div className="ml-4 border-l border-border pl-4">
          <div className="flex items-start gap-2">
            <span className="flex items-center justify-center size-7 rounded-md border border-border text-xs flex-shrink-0">
              🎓
            </span>
            <div>
              <h4 className="font-medium">B.Tech. Electronics &amp; Communication Engineering</h4>
              <p className="text-sm text-muted-foreground font-mono">CGPA 8.58/10 &nbsp;|&nbsp; 2021 – 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ---- QuoteBlock ----
function QuoteBlock() {
  return (
    <div className="border-x border-edge px-4 text-center" style={{ padding: 'clamp(24px, 6vw, 48px) clamp(16px, 4vw, 32px)' }}>
      <div className="text-muted-foreground/60 font-serif mb-4 select-none leading-none" style={{ fontSize: 'clamp(36px, 8vw, 60px)' }}>
        &ldquo;
      </div>
      <blockquote className="font-medium italic leading-relaxed max-w-lg mx-auto text-foreground/80" style={{ fontSize: 'clamp(15px, 3vw, 20px)' }}>
        A computer would deserve to be called intelligent if it could deceive a human into believing that it was human.
      </blockquote>
      <div className="mt-6 flex items-center justify-center gap-3">
        <div className="h-px w-8 bg-muted-foreground/40" />
        <cite className="text-xs font-mono tracking-widest text-muted-foreground not-italic">
          ALAN TURING
        </cite>
        <div className="h-px w-8 bg-muted-foreground/40" />
      </div>
    </div>
  );
}

// ---- Footer ----
function Footer() {
  return (
    <footer id="contact" className="border-x border-edge" style={{ padding: 'clamp(12px, 2.5vw, 16px) clamp(16px, 5vw, 32px)' }}>
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <div>
          <div>&copy; 2026 Vishal Sharma</div>
          <div>Built with Hope</div>
        </div>
        <span className="font-mono text-xs opacity-40">iamvishal.inbox@gmail.com</span>
      </div>
    </footer>
  );
}

// ---- Navbar ----
function Navbar({ dark, toggleDark }: { dark: boolean; toggleDark: (e?: React.MouseEvent) => void }) {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-edge">
      <div className="mx-auto flex h-12 items-center justify-between gap-4 px-4 md:max-w-3xl md:px-6">
        {/* Logo */}
        <a href="/" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={dark ? "/logo-dark.png" : "/logo-light.png"} alt="Vishal Sharma" className="h-8 w-auto" />
        </a>

        {/* Nav links */}
        <nav className="flex items-center gap-2 sm:gap-4">
          <a href="#about" className="font-pixel text-[11px] sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Home
          </a>
          <a href="#projects" className="font-pixel text-[11px] sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Projects
          </a>
          <a href="#experience" className="hidden sm:block font-pixel text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Experience
          </a>
          <a href="#connect" className="font-pixel text-[11px] sm:text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Connect
          </a>
        </nav>

        {/* Theme toggle */}
        <button
          onClick={(e) => toggleDark(e)}
          className="rounded-md p-1.5 text-muted-foreground hover:bg-muted transition-colors"
          aria-label="Toggle theme"
        >
          {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </button>
      </div>
    </header>
  );
}

// ---- Page ----
export default function Home() {
  const { dark, toggle } = useDarkMode();

  return (
    <main className="max-w-screen px-2">
      <div className="mx-auto md:max-w-3xl">
        <Navbar dark={dark} toggleDark={toggle} />

        {/* Hero image */}
        <div className="border-x border-edge overflow-hidden" style={{ height: 'clamp(140px, 28vw, 220px)' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/Hero.png" alt="Hero" className="w-full h-full object-cover object-center" />
        </div>

        <ProfileCard dark={dark} />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <ConnectSection />
        <SectionDivider />
        <ProjectsSection />
        <SectionDivider />
        <ExperienceSection />
        <SectionDivider />
        <EducationSection />
        <SectionDivider />
        <QuoteBlock />
        <Footer />
        <DotBanner />
      </div>
    </main>
  );
}
