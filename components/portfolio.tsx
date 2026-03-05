"use client";

import Image from "next/image";
import FadeIn from "./fade-in";

const projects = [
  {
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80&auto=format&fit=crop",
    alt: "The Kensington Residence",
    name: "The Kensington Residence",
    type: "Residential · London",
    delay: "0s",
  },
  {
    src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80&auto=format&fit=crop",
    alt: "Clerkenwell Loft",
    name: "Clerkenwell Loft",
    type: "Residential · London",
    delay: "0.08s",
  },
  {
    src: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=900&q=80&auto=format&fit=crop",
    alt: "Mayfair Kitchen",
    name: "Mayfair Kitchen",
    type: "Residential · London",
    delay: "0.12s",
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80&auto=format&fit=crop",
    alt: "Oslo Boutique Hotel",
    name: "Oslo Boutique Hotel",
    type: "Hospitality · Oslo",
    delay: "0.04s",
  },
  {
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80&auto=format&fit=crop",
    alt: "Camden Creative Office",
    name: "Camden Creative Office",
    type: "Commercial · London",
    delay: "0.1s",
  },
  {
    src: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&q=80&auto=format&fit=crop",
    alt: "Notting Hill Suite",
    name: "Notting Hill Suite",
    type: "Residential · London",
    delay: "0.16s",
  },
  {
    src: "https://images.unsplash.com/photo-1598928636135-d146006ff4be?w=800&q=80&auto=format&fit=crop",
    alt: "Shoreditch Bar & Lounge",
    name: "Shoreditch Bar & Lounge",
    type: "Hospitality · London",
    delay: "0.22s",
  },
];

const colSpans = [7, 5, 5, 7, 4, 4, 4];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      style={{
        background: "var(--dark)",
        padding: "8.5rem 3rem",
      }}
      className="max-md:!px-6 max-md:!py-20"
    >
      <div style={{ maxWidth: 1340, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "3rem",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "0.68rem",
                fontWeight: 600,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.28)",
                marginBottom: "2rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <span
                style={{
                  display: "block",
                  width: "1.75rem",
                  height: 1,
                  background: "currentColor",
                  flexShrink: 0,
                }}
              />
              Selected Work
            </div>
            <h2
              style={{
                fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 500,
                color: "#fff",
                marginTop: "0.5rem",
              }}
            >
              Recent Projects
            </h2>
          </div>
          <a
            href="#"
            style={{
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.38)",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              transition: "color 0.2s, gap 0.2s",
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.gap = "0.875rem";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255,255,255,0.38)";
              e.currentTarget.style.gap = "0.5rem";
            }}
          >
            View all projects →
          </a>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "0.625rem",
          }}
          className="max-md:grid-cols-1"
        >
          {projects.map(({ src, alt, name, type, delay }, i) => (
            <FadeIn
              key={name}
              delay={delay}
              style={{ gridColumn: `span ${colSpans[i]}` }}
              className="max-md:!col-span-1"
            >
              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
                className="group"
              >
                <div style={{ position: "relative", minHeight: 280 }}>
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    style={{
                      objectFit: "cover",
                      filter: "brightness(0.8)",
                      transition:
                        "transform 0.65s cubic-bezier(0.4,0,0.2,1), filter 0.4s",
                    }}
                    className="group-hover:scale-105 group-hover:!brightness-100"
                    loading="lazy"
                  />
                </div>
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "2.5rem 1.75rem 1.75rem",
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.82), transparent)",
                    opacity: 0,
                    transition: "opacity 0.35s",
                  }}
                  className="group-hover:!opacity-100 max-md:!opacity-100"
                >
                  <div
                    style={{
                      fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                      fontSize: "1.0625rem",
                      fontWeight: 500,
                      color: "#fff",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {name}
                  </div>
                  <div
                    style={{
                      fontSize: "0.68rem",
                      fontWeight: 600,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "var(--accent)",
                    }}
                  >
                    {type}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
