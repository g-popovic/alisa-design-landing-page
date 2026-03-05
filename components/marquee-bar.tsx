const items = [
  "Residential Design",
  "Commercial Spaces",
  "Space Planning",
  "Furniture Curation",
  "Lighting Design",
  "Full Renovation",
];

export default function MarqueeBar() {
  const doubled = [...items, ...items];

  return (
    <div className="marquee-bar" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">{item}</span>
        ))}
      </div>
    </div>
  );
}
