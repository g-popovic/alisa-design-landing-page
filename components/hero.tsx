"use client";

import { useEffect, useRef } from "react";

const grainSvg = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`;

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
    <section
      style={{
        minHeight: "100vh",
        background: "var(--dark)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0 3rem 5.5rem",
        position: "relative",
        overflow: "hidden",
      }}
      className="max-md:!px-6 max-md:!pb-[4.5rem]"
    >
      {/* gradient overlay */}
      <div
        style={{
          content: "''",
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 60% 50% at 85% 15%, rgba(184,160,122,0.07) 0%, transparent 100%), radial-gradient(ellipse 40% 40% at 15% 80%, rgba(167,34,139,0.04) 0%, transparent 100%)",
          pointerEvents: "none",
        }}
      />
      {/* grain texture */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: grainSvg,
          pointerEvents: "none",
          opacity: 0.4,
        }}
      />

      <div
        style={{
          fontSize: "0.72rem",
          fontWeight: 500,
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "var(--accent)",
          marginBottom: "1.75rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        Interior Design Studio — London
      </div>

      <h1
        style={{
          fontFamily: "var(--font-playfair), 'Playfair Display', serif",
          fontSize: "clamp(3.25rem, 8.5vw, 7.5rem)",
          fontWeight: 500,
          color: "#fff",
          lineHeight: 1.03,
          maxWidth: "16ch",
          marginBottom: "3rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        Where{" "}
        <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.38)" }}>
          spaces
        </em>
        <br />
        become stories
      </h1>

      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: "2.5rem",
          flexWrap: "wrap",
          position: "relative",
          zIndex: 1,
        }}
        className="max-md:flex-col max-md:items-start"
      >
        <p
          style={{
            fontSize: "0.9375rem",
            lineHeight: 1.75,
            color: "rgba(255,255,255,0.42)",
            maxWidth: "40ch",
            fontWeight: 300,
          }}
        >
          We craft interiors that reflect who you are — thoughtful, considered
          spaces designed to inspire the way you live and work.
        </p>

        <div
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
            flexShrink: 0,
          }}
        >
          <a
            href="#portfolio"
            style={{
              background: "#fff",
              color: "var(--dark)",
              padding: "1.0625rem 2.75rem",
              fontSize: "0.78rem",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
              display: "inline-block",
              transition: "background 0.25s, color 0.25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--accent)";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.color = "var(--dark)";
            }}
          >
            View Work
          </a>
          <a
            href="#contact"
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: "0.78rem",
              fontWeight: 400,
              letterSpacing: "0.1em",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              transition: "color 0.2s, gap 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.gap = "0.75rem";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255,255,255,0.5)";
              e.currentTarget.style.gap = "0.5rem";
            }}
          >
            Start a Project →
          </a>
        </div>
      </div>

      {/* scroll hint */}
      <div
        ref={hintRef}
        style={{
          position: "absolute",
          bottom: "2.25rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.75rem",
          color: "rgba(255,255,255,0.22)",
          fontSize: "0.64rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          zIndex: 1,
          transition: "opacity 0.5s",
        }}
      >
        <div
          style={{
            width: 1,
            height: "2.5rem",
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.25), transparent)",
            animation: "drip 2s ease-in-out infinite",
          }}
        />
        Scroll
      </div>
    </section>
  );
}
