"use client";

import { useEffect } from "react";

// Redux
import { setLoco } from "@/store/locoSlice";
import { AppDispatch } from "@/store/store";
import { useDispatch } from "react-redux";



export default function LocoScrollIntegration(): JSX.Element {
  const useAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = useAppDispatch();

  useEffect(() => {
    void (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      let locoScroll = new LocomotiveScroll();
      dispatch(setLoco(locoScroll));
    })();
    // eslint-disable-next-line
  }, []);

  return <></>;
}
