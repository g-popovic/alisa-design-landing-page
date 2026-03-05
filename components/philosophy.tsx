import FadeIn from "./fade-in";

const stats = [
  { number: "12+", label: "Years of Practice" },
  { number: "240", label: "Projects Completed" },
  { number: "18", label: "Design Awards" },
  { number: "98%", label: "Client Satisfaction" },
];

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      style={{
        background: "var(--light)",
        padding: "8.5rem 3rem",
      }}
      className="max-md:!px-6 max-md:!py-20"
    >
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "7rem",
          alignItems: "start",
        }}
        className="max-[900px]:grid-cols-1 max-[900px]:gap-12"
      >
        {/* sticky left */}
        <div style={{ position: "sticky", top: "6rem" }} className="max-[900px]:static">
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
            Our Philosophy
          </div>
          <h2
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', serif",
              fontSize: "clamp(2.125rem, 3.75vw, 3.375rem)",
              fontWeight: 500,
              color: "var(--text-dark)",
              lineHeight: 1.18,
            }}
          >
            Design is not decoration.
            <br />
            It is{" "}
            <em style={{ fontStyle: "italic", color: "var(--muted)" }}>
              intention.
            </em>
          </h2>
        </div>

        {/* right */}
        <div style={{ paddingTop: "0.5rem" }}>
          {[
            "At Forma Studio, we believe that great interiors begin with deep listening. Before we sketch a single line, we immerse ourselves in your world — understanding how you move through space, what brings you calm, and what ignites your creativity.",
            "Every project is a collaboration between your vision and our expertise. We bring together the finest materials, craftspeople, and furnishings to create environments that are not just beautiful, but genuinely liveable.",
            "Founded in 2013, our studio has completed projects across residential, hospitality, and commercial sectors — always guided by the belief that a well-designed space has the power to transform daily life.",
          ].map((text, i) => (
            <p
              key={i}
              style={{
                fontSize: "0.9375rem",
                lineHeight: 1.85,
                color: "var(--text-mid)",
                marginBottom: "1.75rem",
                fontWeight: 300,
              }}
            >
              {text}
            </p>
          ))}

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2.25rem",
              marginTop: "3.5rem",
              paddingTop: "3.5rem",
              borderTop: "1px solid var(--border-l)",
            }}
          >
            {stats.map(({ number, label }, i) => (
              <FadeIn key={label} delay={`${i * 0.1}s`}>
                <div
                  style={{
                    fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                    fontSize: "3.25rem",
                    fontWeight: 400,
                    color: "var(--text-dark)",
                    lineHeight: 1,
                    marginBottom: "0.5rem",
                  }}
                >
                  {number}
                </div>
                <div
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 500,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--muted)",
                  }}
                >
                  {label}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
