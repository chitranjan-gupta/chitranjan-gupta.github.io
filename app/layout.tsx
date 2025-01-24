import "@/styles/globals.css";
import type { Metadata } from "next";
import { Anek_Devanagari } from "next/font/google";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import Header from "@/components/header";
import {
  GOOGLE_ANALYTICS_ID,
  GOOGLE_SEARCH_CONSOLE_ID,
  GOOGLE_TAG_MANAGER_ID,
} from "@/constants";

const anek_devanagari = Anek_Devanagari({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chitranjan Gupta - Portfolio",
  description: "Chitranjan Gupta - Portfolio",
  verification: { google: GOOGLE_SEARCH_CONSOLE_ID },
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${anek_devanagari.className} bg-white dark:bg-[#1E1E1E] overflow-x-hidden `}
      >
        {process.env.NODE_ENV === "production" && <GoogleTagManager gtmId={GOOGLE_TAG_MANAGER_ID} />}
        <Header />
        {children}
        {process.env.NODE_ENV === "production" && <GoogleAnalytics gaId={GOOGLE_ANALYTICS_ID} />}
      </body>
    </html>
  );
}
