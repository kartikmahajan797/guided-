import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const body = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
  variable: "--font-display-face",
});

export const metadata: Metadata = {
  title: "Guided — Finance, AI, Coding & Robotics classes for ages 8–12",
  description:
    "Live online Finance, AI, Development and Robotics classes for 8–12 year olds. Max 8 kids per class, taught by working engineers and finance professionals. Book a free trial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${body.variable} ${display.variable} h-full`}>
      <head>
        {/* Scroll-reveal is progressive enhancement, never a gate on content:
            with scripting off the elements render in their final state. */}
        <noscript>
          <style>{`[data-reveal]{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
