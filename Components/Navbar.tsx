"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOverlapped, setIsOverlapped] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".fade-in");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top + 200 < window.innerHeight) {
          setIsOverlapped(true);
        } else {
          setIsOverlapped(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className="fixed z-10 top-0 left-0 w-full text-xl sm:text-3xl">
      <div className="flex justify-center py-4 px-3 text-white">
        <Link
          href="/"
          className={`px-3 py-2 rounded-2xl font-oxygen-mono ${
            isOverlapped ? "bg-black/50 backdrop-blur-lg" : ""
          } transition-colors`}
        >
          {"<"}
          <span className="font-bold text-cyan-200 hover:text-cyan-400 transition-colors">
            Domukas
          </span>
          {" />"}
        </Link>
      </div>
    </nav>
  );
}
