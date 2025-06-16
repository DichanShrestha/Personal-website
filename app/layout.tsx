import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import me from "../public/me.jpg";

// Font setup with variable names for Tailwind
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
});

// Metadata
export const metadata: Metadata = {
  title: "Dichan Shrestha — Software Developer",
  description:
    "Freelance Full Stack Developer focused on system design, performance, and real-time web solutions.",
  generator: "Next.js",
  applicationName: "Dichan Shrestha Portfolio",
  keywords: [
    "freelance",
    "developer",
    "freelance developer",
    "full stack",
    "react",
    "full stack developer",
    "full stack engineer",
    "fast",
    "fast developer",
    "fast engineer",
    "tech",
    "nepal",
    "software",
    "software developer",
    "portfolio",
    "full stack developer portfolio",
    "fast developer portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Dichan Shrestha — Full Stack Developer",
    description:
      "Freelance Full Stack Developer focused on system design, performance, and real-time web solutions.",
    url: "https://dichanshrestha.com.np",
    siteName: "Dichan Shrestha — Full Stack Developer",
    images: [
      {
        url: me.src,
        width: 1200,
        height: 630,
        alt: "Dichan Shrestha — Full Stack Developer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dichan Shrestha — Full Stack Developer",
    description:
      "Freelance Full Stack Developer focused on system design, performance, and real-time web solutions.",
    creator: "@DichanShrestha",
    creatorId: "1883852449875963904",
    images: [me.src],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
  icons: {
    icon: "/favicon-512x512.png", // make sure this file exists in /public
  },
};

// Props
type RootLayoutProps = {
  children: ReactNode;
};

// Layout Component
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${poppins.variable} ${playfair.variable}`}>
      <body className="scroll-smooth font-sans scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
