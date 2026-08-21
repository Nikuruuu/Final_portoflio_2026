"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/animations";
import { SKILL_GROUPS, type SkillGroup } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";

export { type SkillGroup, type SkillItem, SKILL_GROUPS } from "@/lib/constants";

interface SkillsProps {
  skillGroups?: SkillGroup[];
  title?: string;
  subtitle?: string;
  description?: string;
}

export default function Skills({
  skillGroups = SKILL_GROUPS,
  title = "Skills & Technologies",
  subtitle = "// TECH STACK",
  description = "The core tools, languages, and frameworks I use to build scalable production software.",
}: SkillsProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative px-6 pt-24 pb-8"
      aria-label="Skills and tech stack section"
    >
      {/* Decorative background element */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          className="mb-14"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.p variants={fadeInUp} className="mb-2 font-mono text-xs uppercase tracking-widest text-slate-500">
            {subtitle}
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            {title.split("&")[0]}&amp;{" "}
            <span className="text-slate-500">{title.split("&")[1]?.trim() || "Technologies"}</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 max-w-xl text-slate-400 text-base sm:text-lg">
            {description}
          </motion.p>
        </motion.div>

        {/* Responsive skills grid (1 col on mobile, 2 cols on tablet, 4 cols on desktop) */}
        <motion.div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.id}
              id={group.id}
              variants={scaleIn}
              className={`rounded-xl border ${group.borderColor} ${group.bgColor} p-6 backdrop-blur-sm transition-all hover:border-slate-700/80 hover:shadow-lg`}
            >
              <h3 className={`mb-5 font-mono text-xs font-semibold uppercase tracking-widest ${group.color}`}>
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <Badge
                    key={skill.name}
                    variant="outline"
                    className="h-auto gap-2 rounded-lg border-slate-800/80 bg-slate-900/60 px-3 py-1.5 font-sans text-xs font-normal text-slate-300 backdrop-blur-xs transition-colors hover:border-slate-700 hover:bg-slate-800 hover:text-white"
                  >
                    <span
                      className={`h-1.5 w-1.5 shrink-0 rounded-full ${group.dotColor}`}
                      aria-hidden
                    />
                    <span>{skill.name}</span>
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Section separator line constrained to max-w-6xl container width ── */}
        <div className="pt-20" aria-hidden>
          <div className="h-px w-full bg-slate-800/80" />
        </div>
      </div>
    </section>
  );
}
