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
    <section id="services" className="services">
      <div className="services-inner">
        <div className="services-header">
          <div>
            <div className="section-label">
              <span className="section-label-line" />
              What We Do
            </div>
            <h2 className="services-heading">
              Full-spectrum
              <br />
              design services
            </h2>
          </div>
          <p className="services-subtext">
            From initial concept to the final finishing touch, we handle every
            detail of your project with precision and care.
          </p>
        </div>

        <div className="services-grid">
          {services.map(({ number, title, desc }, i) => (
            <FadeIn key={title} delay={`${i * 0.1}s`}>
              <div className="service-card">
                <div className="service-number">{number}</div>
                <h3 className="service-title">{title}</h3>
                <p className="service-desc">{desc}</p>
                <a href="#contact" className="service-link">Enquire →</a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
