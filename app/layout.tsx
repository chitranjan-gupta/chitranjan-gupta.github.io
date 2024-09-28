import "@/styles/globals.css";
import type { Metadata } from "next";
import { Anek_Devanagari } from "next/font/google";
import Header from "@/components/header";

const anek_devanagari = Anek_Devanagari({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chitranjan Gupta - Portfolio",
  description: "Chitranjan Gupta - Portfolio",
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
        <Header />
        {children}
      </body>
    </html>
  );
}
