"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp, slideInRight } from "@/lib/animations";
import { HERO_CONTENT, type HeroContent } from "@/lib/constants";
import IdeCard from "./IdeCard";

export { HERO_CONTENT, type HeroContent, type SocialLink } from "@/lib/constants";

interface HeroProps {
  content?: HeroContent;
}

export default function Hero({ content = HERO_CONTENT }: HeroProps) {
  const { status, headline, description, cta, socialLinks } = content;

  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] flex-col justify-between overflow-hidden px-6 pt-28 pb-8"
      aria-label="Hero section"
    >
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute -top-40 left-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-1/2 right-10 h-[450px] w-[450px] rounded-full bg-blue-600/5 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 py-10 lg:grid-cols-[54fr_46fr]">
        {/* ── Left column ── */}
        <motion.div
          className="flex flex-col gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Status pill */}
          <motion.div variants={fadeInUp} className="flex">
            <span
              id="availability-status"
              className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/90 px-3.5 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-sm shadow-sm"
            >
              {status.isAvailable && (
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
              )}
              {status.text}
            </span>
          </motion.div>

          {/* H1 Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-[3.75rem] leading-[1.1]"
          >
            <span className="block text-white">{headline.title}</span>
            <span className="block text-slate-400/90">{headline.middle}</span>
            <span className="block text-white">{headline.suffix}</span>
          </motion.h1>

          {/* Subtitle / Value proposition */}
          <motion.p
            variants={fadeInUp}
            className="max-w-xl text-base sm:text-lg leading-relaxed text-slate-400"
          >
            {description}
          </motion.p>

          {/* Action row with buttons & social links */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <a
              id="cta-view-projects"
              href={cta.primary.href}
              className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition-all hover:bg-slate-200 active:scale-[0.98] shadow-sm"
            >
              {cta.primary.text}
            </a>
            <a
              id="cta-contact-me"
              href={cta.secondary.href}
              className="inline-flex items-center justify-center rounded-lg border border-slate-700/80 bg-slate-900/80 px-5 py-2.5 text-sm font-semibold text-slate-200 transition-all hover:border-slate-600 hover:bg-slate-800 hover:text-white active:scale-[0.98]"
            >
              {cta.secondary.text}
            </a>

            {/* Subtle separator before social icons */}
            <span className="hidden h-5 w-px bg-slate-800 sm:inline-block mx-1" aria-hidden />

            {/* Social links */}
            <div className="flex items-center gap-1">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-850 hover:text-slate-100"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* ── Right column — IDE card ── */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          animate="visible"
          className="flex justify-center lg:justify-end"
        >
          <IdeCard />
        </motion.div>
      </div>

      {/* ── Section separator line constrained to max-w-6xl container width ── */}
      <div className="mx-auto w-full max-w-6xl pt-10" aria-hidden>
        <div className="h-px w-full bg-slate-800/80" />
      </div>
    </section>
  );
}
