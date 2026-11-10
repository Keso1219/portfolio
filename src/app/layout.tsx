import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kevin Sorani — Teaching Humans What to Actually Do With AI",
  description:
    "AI Fluency Workshops & Custom Workflow Automation in Gothenburg, Sweden. Removing 4–6 hours of daily computer drag inside the tools your team already pays for.",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Kevin Sorani — The AI Workshop & Operations Bench",
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
      <body className="font-serif antialiased bg-paper text-ink bg-workshop-grid min-h-screen">
        {children}
      </body>
    </html>
  );
}
