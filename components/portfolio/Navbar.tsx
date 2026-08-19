"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { GithubIcon } from "@/lib/icons";
import Link from "next/link";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const backdropOpacity = useTransform(scrollY, [0, 50], [0, 1]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Glassmorphism backdrop */}
      <motion.div
        className="absolute inset-0 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md"
        style={{ opacity: backdropOpacity }}
        aria-hidden
      />

      <nav className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Monospace Logo */}
        <Link
          href="/"
          className="font-mono text-base sm:text-lg font-semibold tracking-tight text-slate-100 transition-colors hover:text-cyan-400 flex items-center gap-0.5"
          aria-label="Home"
        >
          <span className="text-slate-400">&lt;</span>
          <span className="text-white">Jeremiah</span>
          <span className="text-slate-400 ml-1">/&gt;</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 md:flex">
          <ul className="flex items-center gap-7" role="list">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-sm font-medium text-slate-400 transition-colors hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Separator */}
          <span className="h-4 w-px bg-slate-800" aria-hidden />

          {/* GitHub icon */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="rounded-md p-1.5 text-slate-400 transition-colors hover:text-white"
          >
            <GithubIcon size={19} />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          id="mobile-menu-toggle"
          className="rounded-md p-2 text-slate-400 transition-colors hover:bg-slate-800 hover:text-slate-100 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="relative border-b border-slate-800 bg-slate-950/95 backdrop-blur-lg px-6 pb-5 pt-2 md:hidden"
        >
          <ul className="flex flex-col gap-4" role="list">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="block text-sm font-medium text-slate-300 transition-colors hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="pt-2 border-t border-slate-800/80">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                <GithubIcon size={16} /> GitHub
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
}
