import FadeIn from "./fade-in";

const stats = [
  { number: "12+", label: "Years of Practice" },
  { number: "240", label: "Projects Completed" },
  { number: "18", label: "Design Awards" },
  { number: "98%", label: "Client Satisfaction" },
];

export default function Philosophy() {
  return (
    <section id="philosophy" className="philosophy">
      <div className="philosophy-inner">
        <div className="philosophy-sticky">
          <div className="section-label">
            <span className="section-label-line" />
            Our Philosophy
          </div>
          <h2 className="philosophy-heading">
            Design is not decoration.
            <br />
            It is <em>intention.</em>
          </h2>
        </div>

        <div className="philosophy-right">
          <div className="philosophy-body">
            {[
              "At Forma Studio, we believe that great interiors begin with deep listening. Before we sketch a single line, we immerse ourselves in your world — understanding how you move through space, what brings you calm, and what ignites your creativity.",
              "Every project is a collaboration between your vision and our expertise. We bring together the finest materials, craftspeople, and furnishings to create environments that are not just beautiful, but genuinely liveable.",
              "Founded in 2013, our studio has completed projects across residential, hospitality, and commercial sectors — always guided by the belief that a well-designed space has the power to transform daily life.",
            ].map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>

          <div className="philosophy-stats">
            {stats.map(({ number, label }, i) => (
              <FadeIn key={label} delay={`${i * 0.1}s`}>
                <div className="stat-number">{number}</div>
                <div className="stat-label">{label}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
