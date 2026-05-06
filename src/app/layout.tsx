import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";

const siteUrl = "https://yuvarajuk.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Yuvaraju Konduru | Senior Software Engineer",
    template: "%s | Yuvaraju Konduru",
  },
  description:
    "Yuvaraju Konduru - Senior Software Engineer specializing in React, Next.js, Angular, Node.js, TypeScript, and full-stack web development. Building scalable, performant web applications.",
  keywords: [
    "Yuvaraju Konduru",
    "Yuvaraju",
    "Konduru",
    "Senior Software Engineer",
    "Software Engineer",
    "Frontend Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Angular Developer",
    "Node.js Developer",
    "TypeScript",
    "JavaScript",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Yuvaraju Konduru" }],
  creator: "Yuvaraju Konduru",
  publisher: "Yuvaraju Konduru",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Yuvaraju Konduru | Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in React, Next.js, Angular, Node.js, and full-stack web development. Building scalable, performant web applications.",
    url: siteUrl,
    siteName: "Yuvaraju Konduru Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/yuvi.jpg",
        width: 800,
        height: 800,
        alt: "Yuvaraju Konduru - Senior Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuvaraju Konduru | Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in React, Next.js, Angular, Node.js, and full-stack web development.",
    images: ["/yuvi.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification=O-n15UHzgoX8AMAYhsfJyz2QI00h_pRWgIeUy0-lcGY",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
