"use client";

import { animate, useInView, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  end: number;
  suffix: string;
  duration?: number;
}

export default function AnimatedCounter({ end, suffix, duration = 1.6 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(0);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) {
      return;
    }

    const controls = animate(count, end, {
      duration,
      ease: "easeOut",
      onUpdate(latest: number) {
        setDisplay(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [count, duration, end, inView]);

  return (
    <span ref={ref} className="text-4xl font-bold text-dark sm:text-5xl">
      {display}
      {suffix}
    </span>
  );
}
