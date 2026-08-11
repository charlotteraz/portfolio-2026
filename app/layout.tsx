import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

config.autoAddCss = false;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const sofiaPro = localFont({
  src: [
    { path: "./fonts/sofia-pro/SofiaProLight.woff", weight: "300", style: "normal" },
    { path: "./fonts/sofia-pro/SofiaProRegular.woff", weight: "400", style: "normal" },
    { path: "./fonts/sofia-pro/SofiaProMedium.woff", weight: "500", style: "normal" },
    { path: "./fonts/sofia-pro/SofiaProSemiBold.woff", weight: "600", style: "normal" },
  ],
  variable: "--font-sofia-pro",
});

export const metadata: Metadata = {
  title: "Charlotte Raz",
  description: "UI/UX Engineer designing and building digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${sofiaPro.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
