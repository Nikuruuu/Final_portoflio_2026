"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { type Project, FEATURED_PROJECTS } from "@/lib/constants";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import ProjectCard from "./ProjectCard";

export { type Project, FEATURED_PROJECTS } from "@/lib/constants";

interface ProjectsProps {
  projects?: Project[];
  title?: string;
  subtitle?: string;
  description?: string;
}

export default function Projects({
  projects = FEATURED_PROJECTS,
  title = "Featured Projects",
  subtitle = "// SELECTED WORK",
  description = "A showcase of modern web applications and SaaS platforms I’ve developed.",
}: ProjectsProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [isOpen, setIsOpen] = useState(false);

  // Split projects for default 3-project view and collapsible overflow
  const initialProjects = projects.slice(0, 3);
  const remainingProjects = projects.slice(3);
  const hasMore = projects.length > 3;

  return (
    <section
      id="work"
      ref={ref}
      className="relative px-6 pt-24 pb-8"
      aria-label="Featured projects section"
    >
      <div className="mx-auto max-w-6xl">
        {/* ── Section Header ── */}
        <motion.div
          className="mb-12"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.p variants={fadeInUp} className="mb-2 font-mono text-xs uppercase tracking-widest text-slate-500">
            {subtitle}
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl"
          >
            {title}
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 max-w-xl text-slate-400 text-base sm:text-lg">
            {description}
          </motion.p>
        </motion.div>

        {/* ── Collapsible Project Grid ── */}
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full">
          {/* Default initial 3 projects */}
          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {initialProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>

          {/* Remaining projects expanded on demand */}
          {hasMore && (
            <CollapsibleContent>
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-6"
                  >
                    {remainingProjects.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </CollapsibleContent>
          )}

          {/* See More / See Less Toggle Button */}
          {hasMore && (
            <div className="flex justify-center pt-10">
              <CollapsibleTrigger className="group flex flex-col items-center justify-center gap-1.5 font-mono text-xs text-slate-400 hover:text-white hover:bg-transparent transition-colors py-2 h-auto cursor-pointer focus-visible:outline-none">
                <span className="font-medium tracking-wide">
                  {isOpen ? "See Less" : "See More"}
                </span>
                <ChevronDown
                  className={`h-4 w-4 text-slate-500 transition-transform duration-300 group-hover:text-cyan-400 ${isOpen ? "rotate-180" : ""
                    }`}
                />
              </CollapsibleTrigger>
            </div>
          )}
        </Collapsible>

        {/* ── Section separator line constrained to max-w-6xl container width ── */}
        <div className="pt-20" aria-hidden>
          <div className="h-px w-full bg-slate-800/80" />
        </div>
      </div>
    </section>
  );
}
