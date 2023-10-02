"use client";

import { useEffect } from "react";

export default function LocoScrollIntegration(): JSX.Element {
  useEffect(() => {
    void (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      new LocomotiveScroll();
    })();
  }, []);

  return <></>;
}
