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
    <section className="process">
      <div className="process-inner">
        <div className="process-intro">
          <div className="section-label">
            <span className="section-label-line" />
            Our Process
          </div>
          <h2 className="process-heading">How we work</h2>
          <p className="process-subtext">
            A structured process ensures every project is delivered with
            precision — and every client enjoys the journey.
          </p>
        </div>

        <div className="process-steps">
          <div className="process-connector" />
          {steps.map(({ num, title, desc }, i) => (
            <FadeIn key={title} delay={`${i * 0.1}s`}>
              <div className="process-step">
                <div className="step-num">{num}</div>
                <h3 className="step-title">{title}</h3>
                <p className="step-desc">{desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
