"use client";

import Image from "next/image";
import {
  Sparkles,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import { GithubIcon } from "@/lib/icons";
import { type Project } from "@/lib/constants";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

interface ProjectModalProps {
  project: Project;
  allImages: string[];
}

export default function ProjectModal({ project, allImages }: ProjectModalProps) {
  const title = project.title || project.name || "";
  const description = project.description || project.shortDescription || "";
  const techStack = project.techStack || project.stack || [];
  const liveUrl = project.link || project.liveUrl;
  const githubUrl = project.githubUrl;

  const about = project.details?.description || project.about;
  const keyFeatures = project.details?.features || project.keyFeatures || [];
  const challenges = project.details?.challenges || project.challenges;
  const outcomes = project.details?.outcomes || project.outcome;

  return (
    <DialogContent className="fixed inset-0 top-0 left-0 z-50 block h-screen w-screen !max-w-none max-h-none translate-x-0 translate-y-0 overflow-y-auto border-0 bg-slate-950 px-6 pt-10 sm:px-10 sm:pt-14 pb-28 sm:pb-36 text-slate-100 rounded-none ring-0 data-open:zoom-in-100 data-closed:zoom-out-100">
      {/* ── Inner Full-Screen Content Container ── */}
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10">
        {/* ── Modal Header with Title & Quick Actions ── */}
        <DialogHeader className="gap-4 text-left">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
            <div className="flex items-start gap-4">
              <div>
                <DialogTitle className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
                  {title}
                </DialogTitle>
                <DialogDescription className="text-sm sm:text-base text-slate-400 mt-1 max-w-2xl leading-relaxed">
                  {description}
                </DialogDescription>
              </div>
            </div>

            {/* Quick links in header on desktop */}
            <div className="flex flex-wrap items-center gap-3 shrink-0 pt-1">
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-500 px-4 py-2 text-xs sm:text-sm font-semibold text-slate-950 transition-all hover:bg-cyan-400"
                >
                  <ExternalLink size={15} />
                  <span>Live Demo</span>
                </a>
              )}
              {githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900/80 px-4 py-2 text-xs sm:text-sm font-medium text-slate-200 transition-colors hover:bg-slate-800 hover:text-white"
                >
                  <GithubIcon size={15} />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>

          {/* ── Tech Stack Badges ── */}
          <div className="flex flex-wrap gap-2 pt-2">
            {techStack.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="rounded-lg border-slate-800 bg-slate-900/80 px-3 py-1 font-mono text-xs font-medium text-slate-300 shadow-sm"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </DialogHeader>

        {/* ── Full-Width High-Res Screenshots Carousel ── */}
        {allImages.length > 0 && (
          <div className="relative w-full">
            {allImages.length > 1 ? (
              <Carousel opts={{ loop: true }} className="w-full">
                <CarouselContent>
                  {allImages.map((imgSrc, index) => (
                    <CarouselItem key={index}>
                      <div className="relative aspect-[16/9] sm:aspect-[21/10] w-full overflow-hidden rounded-2xl border border-slate-800/90 bg-slate-900 shadow-2xl">
                        <Image
                          src={imgSrc}
                          alt={`${title} screenshot ${index + 1}`}
                          fill
                          sizes="(max-width: 1200px) 100vw, 1080px"
                          className="object-cover object-top"
                          priority
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4 h-10 w-10 border-slate-700 bg-slate-900/90 text-white hover:bg-slate-800 backdrop-blur-md shadow-lg" />
                <CarouselNext className="right-4 h-10 w-10 border-slate-700 bg-slate-900/90 text-white hover:bg-slate-800 backdrop-blur-md shadow-lg" />
              </Carousel>
            ) : (
              <div className="relative aspect-[16/9] sm:aspect-[21/10] w-full overflow-hidden rounded-2xl border border-slate-800/90 bg-slate-900 shadow-2xl">
                <Image
                  src={allImages[0]}
                  alt={`${title} screenshot`}
                  fill
                  sizes="(max-width: 1200px) 100vw, 1080px"
                  className="object-cover object-top"
                  priority
                />
              </div>
            )}
          </div>
        )}

        {/* ── Case Study Content: About, Features, Challenges & Outcome ── */}
        <div className="flex flex-col gap-8 pt-4 border-t border-slate-800/80">
          {/* 1. About this project */}
          {about && (
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-cyan-400 mb-2.5 flex items-center gap-1.5">
                <Sparkles size={14} />
                <span>About this project</span>
              </h4>
              <p className="text-base leading-relaxed text-slate-300 font-normal">
                {about}
              </p>
            </div>
          )}

          {/* 2. Key Features */}
          {keyFeatures && keyFeatures.length > 0 && (
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-emerald-400 mb-3">
                // KEY ARCHITECTURAL FEATURES
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {keyFeatures.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 rounded-xl border border-slate-800/80 bg-slate-900/50 p-4 text-slate-200 text-sm leading-relaxed shadow-sm"
                  >
                    <CheckCircle2 size={17} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* 3. Technical Challenges & Outcome Cards */}
          {(challenges || outcomes) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {challenges && (
                <div className="rounded-2xl border border-slate-800/90 bg-slate-900/60 p-5 shadow-sm">
                  <h5 className="font-mono text-xs uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-1.5">
                    <AlertCircle size={15} />
                    <span>Technical Challenges</span>
                  </h5>
                  {Array.isArray(challenges) ? (
                    <ul className="space-y-2">
                      {challenges.map((c, i) => (
                        <li key={i} className="text-sm leading-relaxed text-slate-300 flex items-start gap-2">
                          <span className="text-amber-400 font-bold">•</span>
                          <span>{c}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm leading-relaxed text-slate-300">{challenges}</p>
                  )}
                </div>
              )}

              {outcomes && (
                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/20 p-5 shadow-sm">
                  <h5 className="font-mono text-xs uppercase tracking-wider text-emerald-400 mb-3 flex items-center gap-1.5">
                    <CheckCircle2 size={15} />
                    <span>Outcome &amp; Impact</span>
                  </h5>
                  {Array.isArray(outcomes) ? (
                    <ul className="space-y-2">
                      {outcomes.map((o, i) => (
                        <li key={i} className="text-sm leading-relaxed text-slate-200 flex items-start gap-2">
                          <span className="text-emerald-400 font-bold">•</span>
                          <span>{o}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm leading-relaxed text-slate-200">{outcomes}</p>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* ── Modal Bottom Action Bar ── */}
        <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-4">
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg bg-cyan-500 px-5 py-2.5 text-slate-950 font-semibold transition-all hover:bg-cyan-400"
              >
                <ExternalLink size={15} />
                <span>Open Live Demo</span>
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-5 py-2.5 text-slate-200 transition-colors hover:bg-slate-800 hover:text-white"
              >
                <GithubIcon size={15} />
                <span>View Source Code</span>
              </a>
            )}
          </div>

          <p className="text-slate-500">Press ESC or click ✕ to close</p>
        </div>
      </div>
    </DialogContent>
  );
}
