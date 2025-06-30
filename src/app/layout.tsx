import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "ASA McGill | Algerian Students Association",
  description: "The official website of the Algerian Students Association at McGill University. Connecting Algerian students through culture, community, and shared experiences.",
  keywords: "Algerian students, McGill University, ASA, student association, culture, community, events",
  authors: [{ name: "ASA McGill" }],
  openGraph: {
    title: "ASA McGill | Algerian Students Association",
    description: "Connecting Algerian students at McGill University through culture, community, and shared experiences.",
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "ASA McGill | Algerian Students Association",
    description: "Connecting Algerian students at McGill University through culture, community, and shared experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans text-gray-900 dark:text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
