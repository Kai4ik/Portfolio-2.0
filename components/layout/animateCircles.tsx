"use client";
import gsap from "gsap";
import { useEffect } from "react";

export default function GsapCircleAnimation(): JSX.Element {
  useEffect(() => {
    gsap.timeline().to(".circle", {
      xPercent: "random(-100, 100)",
      yPercent: "random(-100, 100)",
      duration: 6,
      ease: "none",
      repeat: -1,
      repeatRefresh: true, // gets a new random x and y value on each repeat
    });
  }, []);

  return <></>;
}
