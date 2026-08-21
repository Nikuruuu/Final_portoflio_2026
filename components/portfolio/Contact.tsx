"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { CONTACT_CONTENT, type ContactContent } from "@/lib/constants";

export { CONTACT_CONTENT, type ContactContent } from "@/lib/constants";

interface ContactProps {
  content?: ContactContent;
}

export default function Contact({ content = CONTACT_CONTENT }: ContactProps) {
  const { tag, headline, description, email, emailLabel, socialLinks, footer } = content;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative px-6 pt-28 pb-16"
      aria-label="Contact section"
    >
      {/* Background glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/4 h-[400px] w-[600px] rounded-full bg-cyan-500/5 blur-3xl"
        aria-hidden
      />

      <motion.div
        className="relative mx-auto max-w-6xl"
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Left-aligned Section Header */}
        <div className="max-w-2xl text-left">
          <motion.p variants={fadeInUp} className="mb-2 font-mono text-xs uppercase tracking-widest text-slate-500">
            {tag}
          </motion.p>
          <motion.h2
            variants={fadeInUp}
            className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl"
          >
            {headline.prefix}<span className="text-slate-500">{headline.highlight}</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mb-10 text-base sm:text-lg leading-relaxed text-slate-400">
            {description}
          </motion.p>
        </div>

        {/* Left-aligned Reach-out card */}
        <motion.div
          variants={fadeInUp}
          className="w-full max-w-xl rounded-2xl border border-slate-800 bg-slate-900/60 p-5 sm:p-8 backdrop-blur-sm shadow-sm text-left"
        >
          <p className="mb-4 text-xs font-mono uppercase tracking-wider text-slate-500">{emailLabel}</p>

          {/* Email copy-to-clipboard box */}
          <div className="mb-6 flex items-center justify-between gap-2 sm:gap-3 rounded-xl border border-slate-700/60 bg-slate-800/60 px-3.5 sm:px-5 py-3 shadow-inner">
            <div className="flex min-w-0 items-center gap-2.5 sm:gap-3 overflow-hidden">
              <Mail size={16} className="shrink-0 text-cyan-400" />
              <span id="contact-email" className="truncate font-mono text-xs sm:text-sm md:text-base text-slate-200">
                {email}
              </span>
            </div>
            <button
              id="copy-email-btn"
              onClick={handleCopy}
              aria-label={copied ? "Email copied" : "Copy email address"}
              className="shrink-0 rounded-md p-1.5 text-slate-400 transition-colors hover:bg-slate-700 hover:text-white cursor-pointer"
            >
              {copied ? (
                <span className="flex items-center gap-1 text-xs text-emerald-400 font-mono">
                  <Check size={14} /> Copied
                </span>
              ) : (
                <Copy size={15} />
              )}
            </button>
          </div>

          {/* Social links */}
          <div className="flex flex-wrap items-center justify-start gap-2.5 sm:gap-3">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center gap-2 rounded-lg border border-slate-700/80 bg-slate-800/40 px-4 py-2 text-sm font-medium text-slate-300 transition-all hover:border-slate-600 hover:bg-slate-800 hover:text-white"
              >
                <Icon size={16} /> {label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Footer copyright */}
        <motion.div variants={fadeInUp} className="mt-20 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {footer.author}</p>
          <p className="font-mono">{footer.techStack}</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
