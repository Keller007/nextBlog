import clsx from "clsx";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import ThemeProvider from "@/lib/hooks/ThemeProvider";

import Footer from "./components/Footer";
import Header from "./components/Header";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const title = "<AndreyPirogov />";
const titleTemplate = "%s | <AndreyPirogov />";

export const metadata: Metadata = {
  title: {
    default: title,
    template: titleTemplate,
  },
  description: "My personal website and tech blog",
  applicationName: "<AndreyPirogov />",
  category: "technology",
  keywords: ["NextJS", "React", "Blog", "TS"],
  authors: [{ name: "AndreyPirogov", url: "https://github.com/Keller007" }],
  creator: "AndreyPirogov",
  publisher: "AndreyPirogov",
  //     image: "https://github.com/Keller007.png",
  icons: {
    icon: [
      { url: "/assets/icon-512x512.png", sizes: "512x512" },
      { url: "/assets/icon-256x256.png", sizes: "256x256" },
      { url: "/assets/icon-144x144.png", sizes: "144x144" },
      { url: "/assets/icon-96x96.png", sizes: "96x96" },
    ],
  },
  openGraph: {
    title: {
      default: title,
      template: titleTemplate,
    },
  },
  twitter: {
    title: {
      default: title,
      template: titleTemplate,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      className={clsx(
        "scroll-pt-16 scroll-smooth",
        inter.variable,
        "antialiased",
      )}
      suppressHydrationWarning
    >
      <body className="grid-rows-layout sm:grid-cols-layout grid min-h-screen grid-cols-1 bg-slate-100 dark:bg-zinc-900">
        <ThemeProvider>
          <header className="sticky top-0 z-50 col-span-3 row-span-1 row-start-1">
            <Header />
          </header>
          {children}
          <footer className="col-span-3 row-span-1 row-start-3">
            <Footer />
          </footer>{" "}
        </ThemeProvider>
      </body>
    </html>
  );
}
