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

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IT Support Perth | Computer & Business IT Support Company Perth",
  description:
    "Computer Mechanics helps Perth businesses big and small get the assistance they need to stay competitive. Enquire about a tailored package today.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const posts = await getNormalizedPosts();

  return (
    <html lang="en" suppressHydrationWarning>
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
    </html>
  );
}