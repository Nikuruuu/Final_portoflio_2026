"use client";

import { motion } from "framer-motion";

const CODE_LINES = [
  {
    tokens: [
      { text: "const", color: "text-cyan-400" },
      { text: " developer", color: "text-slate-200" },
      { text: " = {", color: "text-slate-300" },
    ],
  },
  {
    tokens: [
      { text: "  name", color: "text-emerald-400" },
      { text: ": ", color: "text-slate-400" },
      { text: '"Jeremiah Dela Cruz"', color: "text-amber-300" },
      { text: ",", color: "text-slate-400" },
    ],
  },
  {
    tokens: [
      { text: "  role", color: "text-emerald-400" },
      { text: ": ", color: "text-slate-400" },
      { text: '"Full-Stack Software Engineer"', color: "text-amber-300" },
      { text: ",", color: "text-slate-400" },
    ],
  },
  {
    tokens: [
      { text: "  stack", color: "text-emerald-400" },
      { text: ": [", color: "text-slate-300" },
    ],
  },
  {
    tokens: [
      { text: "    ", color: "text-slate-500" },
      { text: '"React"', color: "text-amber-300" },
      { text: ", ", color: "text-slate-400" },
      { text: '"Next.js"', color: "text-amber-300" },
      { text: ", ", color: "text-slate-400" },
      { text: '"Tailwind"', color: "text-amber-300" },
      { text: ",", color: "text-slate-400" },
    ],
  },
  {
    tokens: [
      { text: "    ", color: "text-slate-500" },
      { text: '"Node.js"', color: "text-amber-300" },
      { text: ", ", color: "text-slate-400" },
      { text: '"Prisma"', color: "text-amber-300" },
      { text: ",", color: "text-slate-400" },
    ],
  },
  {
    tokens: [{ text: "  ],", color: "text-slate-300" }],
  },
  {
    tokens: [
      { text: "  passion", color: "text-emerald-400" },
      { text: ": ", color: "text-slate-400" },
      { text: '"Building fast, high-impact apps"', color: "text-amber-300" },
      { text: ",", color: "text-slate-400" },
    ],
  },
  {
    tokens: [
      { text: "  status", color: "text-emerald-400" },
      { text: ": ", color: "text-slate-400" },
      { text: '"Open to new opportunities"', color: "text-amber-300" },
      { text: ",", color: "text-slate-400" },
    ],
  },
  {
    tokens: [{ text: "};", color: "text-slate-300" }],
  },
];

export default function IdeCard() {
  return (
    // Idle bounce animation — gentle floating when at rest
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      // Pause bounce on hover
      whileHover={{ y: 0, transition: { duration: 0.3 } }}
      className="relative w-full max-w-[520px]"
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -inset-3 rounded-2xl opacity-40 blur-2xl"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(34,211,238,0.18) 0%, transparent 70%)",
        }}
        aria-hidden
      />

      {/* Card shell */}
      <motion.div
        className="relative overflow-hidden rounded-xl border border-slate-700/50 shadow-2xl"
        style={{ background: "#0d1117" }}
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      >
        {/* ── Title bar ── */}
        <div
          className="flex items-center gap-2 border-b border-slate-700/50 px-4 py-3"
          style={{ background: "#161b22" }}
        >
          {/* Traffic lights */}
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />

          {/* Filename — centred */}
          <span className="absolute left-0 right-0 text-center font-mono text-xs text-slate-400 select-none pointer-events-none">
            developer.config.ts
          </span>
        </div>

        {/* ── Code body ── */}
        <div className="px-2 py-5" style={{ background: "#0d1117" }}>
          <pre
            className="font-mono text-[13px] leading-[1.75]"
            aria-label="Developer configuration"
          >
            {CODE_LINES.map((line, i) => (
              <div key={i} className="flex items-baseline">
                {/* Line number */}
                <span
                  className="mr-5 w-6 shrink-0 select-none text-right text-[11px] text-slate-600"
                  aria-hidden
                >
                  {i + 1}
                </span>

                {/* Tokens */}
                <span>
                  {line.tokens.map((tok, j) => (
                    <span key={j} className={tok.color}>
                      {tok.text}
                    </span>
                  ))}
                </span>
              </div>
            ))}

            {/* Blinking cursor row */}
            <div className="flex items-baseline">
              <span
                className="mr-5 w-6 shrink-0 select-none text-right text-[11px] text-slate-600"
                aria-hidden
              >
                {CODE_LINES.length + 1}
              </span>
              <motion.span
                className="inline-block h-[14px] w-[2px] translate-y-[1px] rounded-sm bg-cyan-400"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
                aria-hidden
              />
            </div>
          </pre>
        </div>

        {/* ── Terminal "Ready" bar ── */}
        <div
          className="flex items-center gap-2 border-t border-slate-700/40 px-4 py-2"
          style={{ background: "#161b22" }}
        >
          <span className="text-slate-500 text-xs select-none">▶</span>
          <span className="font-mono text-xs text-slate-400">Ready</span>
        </div>

        {/* ── Status bar ── */}
        <div
          className="flex items-center justify-between px-4 py-1.5"
          style={{ background: "#1f2937" }}
        >
          <div className="flex items-center gap-2">
            <span className="rounded bg-blue-600/70 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-blue-200">
              TypeScript
            </span>
            <span className="font-mono text-[10px] text-slate-500">·</span>
            <span className="font-mono text-[10px] text-slate-500">UTF-8</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
            <span className="font-mono text-[10px] text-slate-400">0 errors</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
