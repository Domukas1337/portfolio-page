import type { Metadata } from "next";
import { Oxygen_Mono } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const oxygenMono = Oxygen_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-oxygen-mono",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: "%s | domukas",
    default: "domukas",
  },
  description: "ELIV Portfolio",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oxygenMono.variable} ${inter.variable} antialiased`}
    >
      <body className="first-background">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
