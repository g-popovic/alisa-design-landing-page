import Image from "next/image";
import FadeIn from "./fade-in";

const projects = [
  {
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80&auto=format&fit=crop",
    alt: "The Kensington Residence",
    name: "The Kensington Residence",
    type: "Residential · Podgorica",
    delay: "0s",
  },
  {
    src: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80&auto=format&fit=crop",
    alt: "Clerkenwell Loft",
    name: "Clerkenwell Loft",
    type: "Residential · Podgorica",
    delay: "0.08s",
  },
  {
    src: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=900&q=80&auto=format&fit=crop",
    alt: "Mayfair Kitchen",
    name: "Mayfair Kitchen",
    type: "Residential · Podgorica",
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
    type: "Commercial · Podgorica",
    delay: "0.1s",
  },
  {
    src: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&q=80&auto=format&fit=crop",
    alt: "Notting Hill Suite",
    name: "Notting Hill Suite",
    type: "Residential · Podgorica",
    delay: "0.16s",
  },
  {
    src: "https://images.unsplash.com/photo-1598928636135-d146006ff4be?w=800&q=80&auto=format&fit=crop",
    alt: "Shoreditch Bar & Lounge",
    name: "Shoreditch Bar & Lounge",
    type: "Hospitality · Podgorica",
    delay: "0.22s",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio-inner">
        <div className="portfolio-header">
          <div>
            <div className="section-label section-label--dark">
              <span className="section-label-line" />
              Selected Work
            </div>
            <h2 className="portfolio-heading">Recent Projects</h2>
          </div>
          <a href="#" className="portfolio-all-link">
            View all projects →
          </a>
        </div>

        <div className="portfolio-grid">
          {projects.map(({ src, alt, name, type, delay }) => (
            <FadeIn key={name} delay={delay}>
              <div className="p-item">
                <div className="p-item-img-wrap">
                  <Image src={src} alt={alt} fill loading="lazy" />
                </div>
                <div className="p-overlay">
                  <div className="p-name">{name}</div>
                  <div className="p-type">{type}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
