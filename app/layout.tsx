import type { Metadata } from "next";
import { geistSans, geistMono } from "@/lib/fonts";
import { GridField } from "@/components/system/GridField";
import { Noise } from "@/components/system/Noise";
import "./globals.css";

export const metadata: Metadata = {
  title: "Poras Wadhai",
  description:
    "Mechanical engineering, IIT Madras. I read Indian marketplaces like systems and build the product that tests the thesis.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <GridField />
        <Noise />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}