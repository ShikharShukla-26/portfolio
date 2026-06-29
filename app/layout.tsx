import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "@material-symbols/font-400/outlined.css";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shikhar Shukla | Developer & Researcher",
  description:
    "Portfolio of Shikhar Shukla — Full Stack Developer, People Research & Talent Acquisition, Behavioral Writer at Substack",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <body className="noise-bg min-h-screen antialiased">{children}</body>
    </html>
  );
}
