import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import type { Metadata } from "next";
import { Inter, Oxygen_Mono } from "next/font/google";
import "./globals.css";

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
      <body>
        <Navbar />
        <video
          autoPlay
          muted
          loop
          className="absolute w-full h-full top-0 left-0 chibi-background object-cover"
        >
          <source src="/chibi.mp4" type="video/mp4" />
        </video>
        {children}
        <Footer />
      </body>
    </html>
  );
}
