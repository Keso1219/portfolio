import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kevin Sorani — Teaching Humans What to Actually Do With AI",
  description:
    "AI Fluency Workshops & Custom Workflow Automation in Gothenburg, Sweden. Removing 4–6 hours of daily computer drag inside the tools your team already pays for.",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased bg-paper text-ink bg-workshop-grid min-h-screen">
        {children}
      </body>
    </html>
  );
}
