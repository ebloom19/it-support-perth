import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { ThemeProvider } from "@/components/theme-provider";
import { ToastProvider } from "@/components/ui/toast";
import ChatwootWidget from "@/components/ChatwootWidget";
import { GoogleTagManager } from "@next/third-parties/google";
import { PostHogSurveyProvider } from "@/components/PostHogSurveyProvider";
import { getNormalizedPosts } from "@/lib/seobot.server";
import { PostHogProvider } from "@/components/PostHogProvider";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "IT Support Perth | Proactive Managed IT Services | 20+ Years Experience",
  description:
    "Leading IT Support Perth provider with 20+ years experience. Proactive managed IT services, cybersecurity, cloud solutions & disaster recovery for Perth businesses. Free consultation available.",
  keywords:
    "IT Support Perth, Managed IT Services Perth, Perth IT Company, Computer Support Perth, IT Security Perth, Cloud Services Perth, Proactive IT Support, Perth Business IT",
  openGraph: {
    title:
      "IT Support Perth | Proactive Managed IT Services | 20+ Years Experience",
    description:
      "Leading IT Support Perth provider with 20+ years experience. Proactive managed IT services, cybersecurity, cloud solutions & disaster recovery for Perth businesses.",
    url: "https://itsupportperth.net.au",
    siteName: "IT Support Perth",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Support Perth | Proactive Managed IT Services",
    description:
      "Leading IT Support Perth provider with 20+ years experience. Proactive managed IT services for Perth businesses.",
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
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const posts = await getNormalizedPosts();

  return (
    <html lang="en" suppressHydrationWarning>
      <head></head>
      <GoogleTagManager gtmId="G-4K8XLY0JKX" />
      <body className={inter.className}>
        <PostHogProvider>
          <PostHogSurveyProvider />
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main>
              <Analytics />
              <SpeedInsights />
              {children}
            </main>
            <Footer posts={posts} />
            <ToastProvider />
            <ChatwootWidget />
          </ThemeProvider>
        </PostHogProvider>
      </body>
      <Script id="apollo-tracker" strategy="afterInteractive">
        {`function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");
          o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,
          o.onload=function(){window.trackingFunctions.onLoad({appId:"6964975a198d92001162b276"})},
          document.head.appendChild(o)}initApollo();`}
      </Script>
    </html>
  );
}
