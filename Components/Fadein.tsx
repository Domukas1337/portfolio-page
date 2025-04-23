"use client";

import { useState, useEffect } from "react";

function FadeIn({
  children,
  time,
}: {
  children: React.ReactNode;
  time: number;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.querySelector(".fade-in");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top + 300 < window.innerHeight) {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fade-in  ${isVisible ? "jumpoutfadein " : "opacity-0"}`}
      style={{ "--time": `${time}s` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}

export default FadeIn;
