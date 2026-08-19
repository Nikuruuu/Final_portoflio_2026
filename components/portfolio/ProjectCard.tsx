"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, ImageIcon } from "lucide-react";
import { GithubIcon } from "@/lib/icons";
import { scaleIn } from "@/lib/animations";
import {
  type Project,
  PROJECT_THEME_STYLES,
} from "@/lib/constants";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ProjectModal from "./ProjectModal";

export default function ProjectCard({ project }: { project: Project }) {
  const {

    name,
    description,
    stack,
    liveUrl,
    githubUrl,
    imageUrl,
    screenshots,
    about,
    keyFeatures,
    challenges,
    theme,
  } = project;

  const styles = PROJECT_THEME_STYLES[theme] || PROJECT_THEME_STYLES.cyan;

  // Gather all available preview images
  const allImages =
    screenshots && screenshots.length > 0
      ? screenshots
      : imageUrl
        ? [imageUrl]
        : [];

  const previewImage = allImages.length > 0 ? allImages[0] : undefined;
  const hasLiveUrl = Boolean(liveUrl);
  const hasGithubUrl = Boolean(githubUrl);
  const hasDetailedPreview = allImages.length > 0 || Boolean(about || keyFeatures || challenges);

  return (
    <Dialog>
      <motion.div
        variants={scaleIn}
        whileHover={{ y: -6, transition: { duration: 0.22, ease: "easeOut" } }}
        className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-800/90 bg-[#0b1324]/80 backdrop-blur-sm transition-all duration-300 ${styles.borderGlow} hover:shadow-2xl hover:shadow-slate-950/80`}
      >
        {/* ── Top Visual Preview Banner ── */}
        <div
          className={`relative h-44 w-full overflow-hidden border-b border-slate-800/80 ${!previewImage ? `bg-gradient-to-b ${styles.bannerGradient}` : "bg-slate-950"
            }`}
        >
          {previewImage ? (
            <>
              <Image
                src={previewImage}
                alt={`${name} preview`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1324] via-[#0b1324]/20 to-transparent opacity-80" />
            </>
          ) : (
            <>
              {/* Subtle grid pattern for gradient fallback */}
              <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                  backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px)`,
                  backgroundSize: "20px 20px",
                }}
                aria-hidden
              />
              <div
                className={`absolute -top-10 left-1/2 h-32 w-48 -translate-x-1/2 rounded-full ${styles.ambientGlow} blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-60`}
                aria-hidden
              />
              <div className="absolute inset-x-8 bottom-0 h-24 rounded-t-xl border-t border-x border-slate-700/30 bg-slate-900/30 backdrop-blur-[2px] transition-transform duration-300 group-hover:translate-y-[-2px]" />
            </>
          )}
        </div>

        {/* ── Card Content Body ── */}
        <div className="flex flex-1 flex-col p-6">
          <div className="mb-3.5 flex items-center gap-3">

            <h3 className="text-lg font-bold tracking-tight text-white">{name}</h3>
          </div>

          <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-400">{description}</p>

          <div className="flex flex-wrap gap-2">
            {stack.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-slate-800 bg-slate-950/70 px-2.5 py-1 font-mono text-xs font-medium text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* ── Bottom Link Actions Bar ── */}
        <div className="flex items-center gap-3.5 border-t border-slate-800/80 bg-slate-950/40 px-6 py-3.5 font-mono text-xs text-slate-400">
          {hasLiveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <ArrowUpRight size={13} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
              <span>Live demo</span>
            </a>
          )}

          {hasDetailedPreview && (
            <DialogTrigger className="inline-flex items-center gap-1.5 transition-colors hover:text-white cursor-pointer focus-visible:outline-none">
              <ImageIcon size={13} className="text-slate-400 group-hover:text-cyan-400 transition-colors" />
              <span>{hasLiveUrl ? "Details" : "View Preview"}</span>
            </DialogTrigger>
          )}

          {(hasLiveUrl || hasDetailedPreview) && hasGithubUrl && (
            <span className="text-slate-600">·</span>
          )}

          {hasGithubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <GithubIcon size={14} className="text-slate-400 group-hover:text-white transition-colors" />
              <span>Source</span>
            </a>
          )}
        </div>
      </motion.div>

      {/* ── Extracted Modal Component ── */}
      {hasDetailedPreview && (
        <ProjectModal project={project} allImages={allImages} />
      )}
    </Dialog>
  );
}
