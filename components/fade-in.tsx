"use client";

import { useEffect, useRef, ReactNode, CSSProperties } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: string;
  style?: CSSProperties;
  className?: string;
}

export default function FadeIn({ children, delay, style, className }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-in${className ? ` ${className}` : ""}`}
      style={{ transitionDelay: delay, ...style }}
    >
      {children}
    </div>
  );
}
