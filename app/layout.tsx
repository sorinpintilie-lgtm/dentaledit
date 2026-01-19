import "./globals.css";
import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "600", "700"],
});

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dental Edit Clinică stomatologică",
  description:
    "Dental Edit atmosferă calmă, explicații clare, tratamente moderne. Programează-te simplu.",
};

import PromoBar from "../components/PromoBar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <body className={`${display.variable} ${sans.variable} font-sans antialiased text-ink-900`}>
        <PromoBar />
        {children}
      </body>
    </html>
  );
}