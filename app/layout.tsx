import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Dichan Shrestha — Software Engineer",
  description:
    "Freelance Full Stack Developer focused on system design, performance, and real-time web solutions.",
  generator: "Next.js",
  applicationName: "Dichan Shrestha",
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
    title: "VDichan Shrestha — Full Stack Engineer",
    description:
      "Freelance Full Stack Developer focused on system design, performance, and real-time web solutions.",
    url: "https://www.victorwilliams.me/",
    siteName: "www.victorwilliams.me",
    images: [
      {
        url: "https://user-images.githubusercontent.com/84178696/228620835-e3cc5c9b-72fc-4f54-a628-407ef7b650f5.png",
        width: 1200,
        height: 630,
        alt: "Dichan Shrestha — Full Stack Engineer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dichan Shrestha — Full Stack Engineer",
    description:
      "Freelance Full Stack Developer focused on system design, performance, and real-time web solutions.",
    creator: "victorwill__",
    creatorId: "1243720976552144897",
    images: [
      "https://user-images.githubusercontent.com/84178696/228620835-e3cc5c9b-72fc-4f54-a628-407ef7b650f5.png",
    ],
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
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
