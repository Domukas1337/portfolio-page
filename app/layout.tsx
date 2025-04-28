import type { Metadata } from "next";
import { Oxygen_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const oxygenMono = Oxygen_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-oxygen-mono",
});

export const metadata: Metadata = {
  title: {
    default: "ELIV Portfolio",
    template: "%s | ELIV Portfolio",
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
    <html lang="en" className={`${oxygenMono.variable} antialiased`}>
      <body className="first-background">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
