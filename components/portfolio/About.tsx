"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { staggerContainer, fadeInUp, slideInLeft } from "@/lib/animations";
import { ABOUT_CONTENT, type AboutContent } from "@/lib/constants";

export { ABOUT_CONTENT, type AboutContent, type ValueBadge } from "@/lib/constants";

interface AboutProps {
  content?: AboutContent;
}

export default function About({ content = ABOUT_CONTENT }: AboutProps) {
  const { tag, headline, paragraphs, image, valueBadges } = content;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="about"
      ref={ref}
      className="relative px-6 pt-24 pb-8"
      aria-label="About me section"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-stretch gap-12 lg:grid-cols-[40fr_60fr]">
          {/* ── Left: portrait with height proportional to text column ── */}
          <motion.div
            className="flex h-full w-full justify-center"
            variants={slideInLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="relative h-full min-h-[380px] w-full max-w-[400px] lg:max-w-none">
              {/* Subtle decorative offset border */}
              <div
                className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl border-2 border-cyan-500/20"
                aria-hidden
              />

              {/* Main portrait image container */}
              <div className="relative h-full min-h-[380px] w-full overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900 shadow-xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-top"
                  priority
                />
                {/* Location badge */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-950/85 px-3 py-1.5 text-xs font-medium text-slate-200 backdrop-blur-md shadow-md">
                  <MapPin size={12} className="text-cyan-400" />
                  {image.location}
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Right: bio details ── */}
          <motion.div
            className="flex flex-col gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Section Tag */}
            <motion.p
              variants={fadeInUp}
              className="font-mono text-xs text-slate-500 tracking-widest uppercase mb-5"
            >
              {tag}
            </motion.p>

            {/* Headline */}
            <motion.h2
              variants={fadeInUp}
              className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl leading-[1.15]"
            >
              <span className="text-white">{headline.prefix}</span>
              <span className="text-slate-500">{headline.highlight}</span>
            </motion.h2>

            {/* Bio Paragraphs */}
            {paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                variants={fadeInUp}
                className={
                  index === 0
                    ? "text-base sm:text-lg leading-relaxed text-slate-300"
                    : "text-sm sm:text-base leading-relaxed text-slate-400"
                }
              >
                {paragraph}
              </motion.p>
            ))}

            {/* Value badges using responsive layout */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-2 sm:gap-3 pt-2"
            >
              {valueBadges.map(({ icon: Icon, label }) => (
                <Badge
                  key={label}
                  variant="outline"
                  className="h-auto inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/80 px-3.5 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-medium text-slate-200 backdrop-blur-sm transition-all hover:border-slate-700 hover:bg-slate-800/90 shadow-sm"
                >
                  <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-cyan-400 shrink-0" />
                  <span>{label}</span>
                </Badge>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* ── Section separator line constrained to max-w-6xl container width ── */}
        <div className="pt-20" aria-hidden>
          <div className="h-px w-full bg-slate-800/80" />
        </div>
      </div>
    </section>
  );
}
