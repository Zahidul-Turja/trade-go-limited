"use client";

import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

export const useLocoScroll = (start = true) => {
  useEffect(() => {
    if (!start) return;

    const scrollContainer = document.querySelector("[data-scroll-container]");

    const locoScroll = new LocomotiveScroll({
      el: scrollContainer,
      smooth: true,
    });

    return () => {
      if (locoScroll) locoScroll.destroy();
    };
  }, [start]);
};
