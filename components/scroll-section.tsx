"use client";

import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function ScrollSection() {
  return (
    <section style={{ background: "var(--dark-2)", overflow: "hidden" }}>
      <ContainerScroll
        titleComponent={
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <div
              style={{
                fontSize: "0.72rem",
                fontWeight: 500,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "var(--accent)",
                marginBottom: "1.25rem",
              }}
            >
              Portfolio Preview
            </div>
            <h2
              style={{
                fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                fontSize: "clamp(2.5rem, 5.5vw, 5rem)",
                fontWeight: 500,
                color: "#fff",
                lineHeight: 1.08,
              }}
            >
              Interiors that
              <br />
              <em
                style={{
                  display: "block",
                  fontStyle: "italic",
                  color: "rgba(255,255,255,0.38)",
                }}
              >
                speak for themselves
              </em>
            </h2>
          </div>
        }
      >
        <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1800&q=80&auto=format&fit=crop"
          alt="Forma Studio — interior design project"
          fill
          style={{ objectFit: "cover", objectPosition: "center top" }}
          loading="lazy"
        />
      </ContainerScroll>
    </section>
  );
}
