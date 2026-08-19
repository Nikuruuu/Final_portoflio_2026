import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SpeedInsights } from '@vercel/speed-insights/next';
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your Name — Full-Stack Engineer",
  description:
    "Full-Stack Engineer crafting fast, elegant, and accessible web experiences. Specialising in Next.js, TypeScript, and modern backend systems.",
  keywords: ["portfolio", "full-stack", "developer", "Next.js", "TypeScript", "React"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name — Full-Stack Engineer",
    description:
      "Full-Stack Engineer crafting fast, elegant, and accessible web experiences.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Name — Full-Stack Engineer",
    description: "Full-Stack Engineer crafting fast, elegant, and accessible web experiences.",
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
        </TooltipProvider>
      </body>
    </html>
  );
}
