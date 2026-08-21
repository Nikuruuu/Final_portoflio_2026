import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jeremiah Dela Cruz — Full-Stack Developer",
  description:
    "Showcasing my projects, skills, and experience in web development, AI, and software engineering. Let's build something amazing together!",
  keywords: ["portfolio", "full-stack", "developer", "Next.js", "TypeScript", "React", "Jeremiah Dela Cruz"],
  authors: [{ name: "Jeremiah Dela Cruz" }],
  openGraph: {
    title: "Jeremiah Dela Cruz — Full-Stack Developer",
    description:
      "Showcasing my projects, skills, and experience in web development, AI, and software engineering. Let's build something amazing together!",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100">
        <TooltipProvider>
          {children}
          <SpeedInsights />
          <Analytics />
        </TooltipProvider>
      </body>
    </html>
  );
}
