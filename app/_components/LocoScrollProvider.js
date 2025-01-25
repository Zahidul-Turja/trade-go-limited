"use client";

import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

export default function LocoScrollProvider({ children }) {
  useEffect(() => {
    const scrollContainer = document.querySelector("[data-scroll-container]");

    const locoScroll = new LocomotiveScroll({
      el: scrollContainer,
      smooth: true,
      multiplier: 1.2, // Adjust for scroll speed
    });

    // Update Locomotive Scroll on content changes
    const updateScroll = () => locoScroll.update();
    window.addEventListener("resize", updateScroll);

    return () => {
      locoScroll.destroy();
      window.removeEventListener("resize", updateScroll);
    };
  }, []);

  return <>{children}</>;
}
