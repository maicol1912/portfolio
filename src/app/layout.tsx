import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { LocaleProvider } from "@/components/providers/LocaleProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

export const metadata: Metadata = {
  title: "Maicol Arcila | Software Engineer - Backend & Cloud Specialist",
  description: "Software Engineer with 4+ years building scalable fintech systems. Specialized in Node.js, NestJS, AWS, microservices, and event-driven architectures.",
  keywords: "software engineer, backend developer, nodejs, nestjs, aws, fintech, microservices, colombia, medellin",
  authors: [{ name: "Maicol Arcila" }],
  creator: "Maicol Arcila",
  icons: {
    icon: [
      { url: `${basePath}/android-chrome-512x512.png`, sizes: '512x512', type: 'image/png' },
      { url: `${basePath}/android-chrome-192x192.png`, sizes: '192x192', type: 'image/png' },
      { url: `${basePath}/favicon-32x32.png`, sizes: '32x32', type: 'image/png' },
      { url: `${basePath}/favicon-16x16.png`, sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: `${basePath}/apple-touch-icon.png`, sizes: '180x180', type: 'image/png' },
    ],
    shortcut: `${basePath}/android-chrome-512x512.png`,
  },
  manifest: `${basePath}/site.webmanifest`,
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Maicol Arcila | Software Engineer",
    description: "Building scalable financial solutions with modern technologies",
    siteName: "Maicol Arcila Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maicol Arcila | Software Engineer",
    description: "Building scalable financial solutions with modern technologies",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          <LocaleProvider>
            {children}
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
