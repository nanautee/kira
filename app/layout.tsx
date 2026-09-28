import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://kira.vercel.app"),
  title: `${SITE.name} — ${SITE.tagline}`,
  description:
    "KIRA is a rugpull analyzer: you feed it the dev wallet, the bundler wallet and the token contract, it returns the address that took the money. Idea stage.",
  keywords: [
    "rugpull",
    "rug detector",
    "solana",
    "bundler",
    "crypto scam",
    "on-chain analysis",
    "scam report",
  ],
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description:
      "Feed the analyzer three public addresses. Get back the wallet that absorbed the coin.",
    siteName: SITE.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description:
      "Feed the analyzer three public addresses. Get back the wallet that absorbed the coin.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-paper text-ink antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
