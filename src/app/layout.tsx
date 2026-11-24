import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ScrollDepthTracker } from "@/components/ScrollDepthTracker";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kevin Sorani — Teaching Humans What to Actually Do With AI",
  description:
    "AI Fluency Workshops & Custom Workflow Automation in Gothenburg, Sweden. Removing 4–6 hours of daily admin drag and bloated SaaS spend inside the tools your team already owns.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Kevin Sorani — AI Fluency Workshops & Workflow Architecture",
    description:
      "20% revenue lift & 2x capacity for a 15-person brokerage. 6 hrs/day saved in e-commerce ops. 130,000 SEK/yr saved on zero-license CRM builds.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-serif antialiased bg-paper text-ink bg-workshop-grid min-h-screen flex flex-col selection:bg-[#161618] selection:text-[#F4F0EA]">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <ScrollDepthTracker />
        <Analytics />
      </body>
    </html>
  );
}
