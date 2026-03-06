"use client";

import { useEffect, useRef } from "react";

export default function IntroOverlay() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    void animateLogo();

    const overlay = overlayRef.current;
    if (!overlay) return;

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  async function animateLogo() {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const reduceMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    )?.matches;

    if (reduceMotion) {
      return;
    }

    const svg = document.getElementById(
      "intro-logo",
    ) as unknown as SVGSVGElement;
    if (svg) {
      const D = 300; // ms per wipe

      const wipes = ["w0", "w1", "w2", "w3", "w4", "w5"].map(
        (id) => document.getElementById(id) as unknown as SVGRectElement,
      );
      const paths = Array.from(
        svg.querySelectorAll("path[mask]"),
      ) as SVGGraphicsElement[];

      // Compute per-wipe target width from each path's bbox diagonal
      const fulls = paths.map((p) => {
        const b = p.getBBox();
        return Math.ceil(Math.hypot(b.width, b.height));
      });

      const ease = (t: number) => 1 - Math.pow(1 - t, 2);

      let raf: number;

      function reset() {
        wipes.forEach((r) => r?.setAttribute("width", "0"));
      }

      function run() {
        cancelAnimationFrame(raf);
        reset();
        const t0 = performance.now();

        (function step(now: number) {
          const elapsed = now - t0;
          let done = true;
          for (let i = 0; i < wipes.length; i++) {
            let sequence = i;
            if (i >= 2) {
              sequence = i - 2;
            }

            const t = (elapsed - sequence * D) / D;
            const f = fulls[i] || 320;
            if (t <= 0) {
              wipes[i]?.setAttribute("width", "0");
              done = false;
            } else if (t >= 1) {
              wipes[i]?.setAttribute("width", String(f));
            } else {
              wipes[i]?.setAttribute("width", String(f * ease(t)));
              done = false;
            }
          }
          if (!done) raf = requestAnimationFrame(step);
        })(t0);
      }

      run();
    }
  }

  return (
    <div ref={overlayRef} className="intro-overlay">
      <div className="intro-logo-wrap">
        <svg
          id="intro-logo"
          viewBox="0 0 755 457"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Alisa Design Logo"
        >
          <defs>
            <mask
              id="m0"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="755"
              height="457"
              maskContentUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="755" height="457" fill="black" />
              <rect
                id="w0"
                className="wipe"
                x="0"
                y="-543.916"
                width="0"
                height="2000"
                fill="white"
                transform="rotate(-45 0 456.084)"
              />
            </mask>
            <mask
              id="m1"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="755"
              height="457"
              maskContentUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="755" height="457" fill="black" />
              <rect
                id="w1"
                className="wipe"
                x="226.274"
                y="-770.19"
                width="0"
                height="2000"
                fill="white"
                transform="rotate(45 226.274 229.81)"
              />
            </mask>
            <mask
              id="m2"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="755"
              height="457"
              maskContentUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="755" height="457" fill="black" />
              <rect
                id="w2"
                className="wipe"
                x="301.935"
                y="-773.726"
                width="0"
                height="2000"
                fill="white"
                transform="rotate(-45 301.935 226.274)"
              />
            </mask>
            <mask
              id="m3"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="755"
              height="457"
              maskContentUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="755" height="457" fill="black" />
              <rect
                id="w3"
                className="wipe"
                x="528.209"
                y="-1000"
                width="0"
                height="2000"
                fill="white"
                transform="rotate(45 528.209 0)"
              />
            </mask>
            <mask
              id="m4"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="755"
              height="457"
              maskContentUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="755" height="457" fill="black" />
              <rect
                id="w4"
                className="wipe"
                x="754.483"
                y="-773.726"
                width="0"
                height="2000"
                fill="white"
                transform="rotate(135 754.483 226.274)"
              />
            </mask>
            <mask
              id="m5"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="755"
              height="457"
              maskContentUnits="userSpaceOnUse"
            >
              <rect x="0" y="0" width="755" height="457" fill="black" />
              <rect
                id="w5"
                className="wipe"
                x="528.209"
                y="-547.452"
                width="0"
                height="2000"
                fill="white"
                transform="rotate(-135 528.209 452.548)"
              />
            </mask>
          </defs>

          {/* Chevron */}
          <path
            mask="url(#m0)"
            d="M0 456.084L226.274 229.81V330.219L100.409 456.084H0Z"
            fill="white"
          />
          <path
            mask="url(#m1)"
            d="M226.274 229.81L452.548 456.084H352.139L226.274 330.219V229.81Z"
            fill="#818287"
          />
          {/* Diamond */}
          <path
            mask="url(#m2)"
            d="M301.935 226.274L528.209 0V100.409L402.344 226.274L301.935 226.274Z"
            fill="#D3222A"
          />
          <path
            mask="url(#m3)"
            d="M528.209 0L754.483 226.274H654.074L528.209 100.409V0Z"
            fill="#EF018D"
          />
          <path
            mask="url(#m4)"
            d="M754.483 226.274L528.209 452.548V352.139L654.074 226.274H754.483Z"
            fill="#A7228B"
          />
          <path
            mask="url(#m5)"
            d="M528.209 452.548L301.935 226.274L402.344 226.274L528.209 352.139V452.548Z"
            fill="#95242A"
          />
        </svg>
      </div>
      <h1 className="intro-logo-text">Alisa Design</h1>
    </div>
  );
}
