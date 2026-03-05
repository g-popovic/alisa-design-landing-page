"use client";

import FadeIn from "./fade-in";

const services = [
  {
    number: "01",
    title: "Residential Design",
    desc: "Private homes and apartments designed around the rhythms of daily life. From single rooms to whole-home transformations, we create spaces that feel authentically yours.",
  },
  {
    number: "02",
    title: "Commercial Interiors",
    desc: "Offices, restaurants, hotels, and retail environments designed to inspire and perform. We translate your brand values into tangible, memorable spatial experiences.",
  },
  {
    number: "03",
    title: "Design Consultation",
    desc: "Expert guidance for those who need a clear direction. A single session or an ongoing advisory relationship — we meet you where you are in the process.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        background: "var(--light)",
        padding: "8.5rem 3rem",
      }}
      className="max-md:!px-6 max-md:!py-20"
    >
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "5rem",
            gap: "3rem",
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
                color: "var(--muted)",
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
              What We Do
            </div>
            <h2
              style={{
                fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                fontSize: "clamp(2rem, 3.5vw, 3rem)",
                fontWeight: 500,
                color: "var(--text-dark)",
                lineHeight: 1.15,
              }}
            >
              Full-spectrum
              <br />
              design services
            </h2>
          </div>
          <p
            style={{
              fontSize: "0.9375rem",
              lineHeight: 1.75,
              color: "var(--muted)",
              maxWidth: "36ch",
              fontWeight: 300,
            }}
          >
            From initial concept to the final finishing touch, we handle every
            detail of your project with precision and care.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            border: "1px solid var(--border-l)",
          }}
          className="max-[900px]:grid-cols-1"
        >
          {services.map(({ number, title, desc }, i) => (
            <FadeIn key={title} delay={`${i * 0.1}s`}>
              <div
                style={{
                  padding: "3.25rem 2.75rem",
                  borderRight: "1px solid var(--border-l)",
                  transition: "background 0.3s",
                  cursor: "default",
                  height: "100%",
                }}
                className={`hover:bg-[rgba(0,0,0,0.025)] max-[900px]:!border-r-0 max-[900px]:border-b border-b-[var(--border-l)] ${i === services.length - 1 ? "max-[900px]:!border-b-0 !border-r-0" : ""}`}
              >
                <div
                  style={{
                    fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                    fontSize: "4rem",
                    fontWeight: 400,
                    color: "rgba(0,0,0,0.07)",
                    lineHeight: 1,
                    marginBottom: "1.75rem",
                    userSelect: "none",
                  }}
                >
                  {number}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                    fontSize: "1.3125rem",
                    fontWeight: 500,
                    color: "var(--text-dark)",
                    marginBottom: "1rem",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontSize: "0.875rem",
                    lineHeight: 1.75,
                    color: "var(--muted)",
                    marginBottom: "2.25rem",
                    fontWeight: 300,
                  }}
                >
                  {desc}
                </p>
                <a
                  href="#contact"
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--text-dark)",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    transition: "gap 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.gap = "0.875rem";
                    e.currentTarget.style.color = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.gap = "0.5rem";
                    e.currentTarget.style.color = "var(--text-dark)";
                  }}
                >
                  Enquire →
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
