import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "portbridge — one port for your whole stack",
    template: "%s — portbridge",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "portbridge",
    "dev proxy",
    "single port",
    "no CORS",
    "frontend backend dev server",
    "Vite proxy",
    "Next.js proxy",
    "developer CLI",
    "concurrently alternative",
  ],
  authors: [{ name: "portbridge" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: "portbridge — one port for your whole stack",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "portbridge — one port for your whole stack",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0d14",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable} dark`}>
      <body>
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-panel focus:px-4 focus:py-2 focus:text-sm focus:text-ink focus:shadow-glow"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
