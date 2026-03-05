import FadeIn from "./fade-in";

const steps = [
  {
    num: "1",
    title: "Discovery",
    desc: "We begin with a deep conversation about your life, your aesthetic, and your vision for the space.",
  },
  {
    num: "2",
    title: "Concept",
    desc: "We develop a comprehensive design concept — mood boards, spatial plans, and material palettes.",
  },
  {
    num: "3",
    title: "Refinement",
    desc: "Working closely with you, we refine every detail until the design is exactly right.",
  },
  {
    num: "4",
    title: "Realisation",
    desc: "We oversee every aspect of the build and installation, ensuring flawless execution.",
  },
];

export default function ProcessSection() {
  return (
    <section
      style={{
        background: "var(--light)",
        padding: "8.5rem 3rem",
      }}
      className="max-md:!px-6 max-md:!py-20"
    >
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <div
          style={{
            textAlign: "center",
            maxWidth: "52ch",
            margin: "0 auto 5.5rem",
          }}
        >
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
              justifyContent: "center",
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
            Our Process
          </div>
          <h2
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', serif",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
              fontWeight: 500,
              color: "var(--text-dark)",
              lineHeight: 1.18,
              marginTop: "1rem",
              marginBottom: "1.25rem",
            }}
          >
            How we work
          </h2>
          <p
            style={{
              fontSize: "0.9375rem",
              lineHeight: 1.75,
              color: "var(--muted)",
              fontWeight: 300,
            }}
          >
            A structured process ensures every project is delivered with
            precision — and every client enjoys the journey.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1.5rem",
            position: "relative",
          }}
          className="max-md:!grid-cols-2"
        >
          {/* connecting line — desktop only */}
          <div
            style={{
              position: "absolute",
              top: "1.4375rem",
              left: "calc(12.5% + 0.75rem)",
              right: "calc(12.5% + 0.75rem)",
              height: 1,
              background: "var(--border-l)",
              zIndex: 0,
            }}
            className="max-md:hidden"
          />

          {steps.map(({ num, title, desc }, i) => (
            <FadeIn key={title} delay={`${i * 0.1}s`}>
              <div
                style={{
                  textAlign: "center",
                  padding: "0 1rem 2rem",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "2.875rem",
                    height: "2.875rem",
                    borderRadius: "50%",
                    background: "var(--light)",
                    border: "1px solid var(--border-l)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                    fontSize: "0.9375rem",
                    fontWeight: 500,
                    color: "var(--text-dark)",
                    margin: "0 auto 1.75rem",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {num}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                    fontSize: "1.125rem",
                    fontWeight: 500,
                    color: "var(--text-dark)",
                    marginBottom: "0.875rem",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontSize: "0.8125rem",
                    lineHeight: 1.75,
                    color: "var(--muted)",
                    fontWeight: 300,
                  }}
                >
                  {desc}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
