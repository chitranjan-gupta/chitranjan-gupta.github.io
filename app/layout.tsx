import type { Metadata } from "next";
import { Anek_Devanagari } from "next/font/google";
import "./globals.css";

const anek_devanagari = Anek_Devanagari({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chitranjan Gupta - Portfolio",
  description: "Chitranjan Gupta - Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${anek_devanagari.className} bg-[cornsilk] overflow-x-hidden `}
      >
        {children}
      </body>
    </html>
  );
}
