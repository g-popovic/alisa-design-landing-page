"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const hintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hint = hintRef.current;
    if (!hint) return;
    let hidden = false;

    const handleScroll = () => {
      if (!hidden && window.scrollY > 80) {
        hint.style.opacity = "0";
        hint.style.pointerEvents = "none";
        hidden = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero">
      <div className="hero-gradient" />
      <div className="hero-grain" />
      <video
        className="hero-video"
        src="/hero-video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="hero-eyebrow">Interior Design Studio — Podgorica</div>

      <h1 className="hero-title">
        Where <em>spaces</em>
        <br />
        become stories
      </h1>

      <div className="hero-actions">
        <p className="hero-body">
          We craft interiors that reflect who you are — thoughtful, considered
          spaces designed to inspire the way you live and work.
        </p>

        <div className="hero-cta-group">
          <a href="#portfolio" className="btn-primary">
            View Work
          </a>
          <a href="#contact" className="btn-ghost">
            Start a Project →
          </a>
        </div>
      </div>

      <div ref={hintRef} className="scroll-hint">
        <div className="scroll-hint-line" />
        Scroll
      </div>
    </section>
  );
}
