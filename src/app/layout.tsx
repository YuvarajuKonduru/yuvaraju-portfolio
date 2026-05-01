import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import ThemeProvider from "./components/ThemeProvider";

export const metadata: Metadata = {
  title: "Yuvaraju Konduru | Senior Software Engineer",
  description:
    "Senior Software Engineer specializing in React, Next.js, Angular, Node.js, HTML, CSS and Tailwind CSS.",
  keywords: [
    "Yuvaraju Konduru",
    "Senior Software Engineer",
    "React",
    "Next.js",
    "Angular",
    "Node.js",
    "Full Stack Developer",
    "Hyderabad",
  ],
  authors: [{ name: "Yuvaraju Konduru" }],
  openGraph: {
    title: "Yuvaraju Konduru | Senior Software Engineer",
    description:
      "Building scalable, performant web applications with modern frontend frameworks and robust backend systems.",
    type: "website",
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
