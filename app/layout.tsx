import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const poppins = Poppins({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

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
        url: "https://dichanshrestha.com.np/me.jpg",
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
    images: ["https://dichanshrestha.com.np/me.jpg"],
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
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
