"use client";

import { useScroll, motion } from "framer-motion";

export default function PageScroller(): JSX.Element {
  const { scrollYProgress } = useScroll();

  return (
    <div className="w-full h-[2px] bg-creamy">
      <motion.div
        className="w-full h-[2px] bg-terracotta origin-left"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>
    </div>
  );
}
