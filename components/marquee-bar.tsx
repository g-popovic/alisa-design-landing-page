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
    <div
      aria-hidden="true"
      style={{
        background: "var(--accent)",
        padding: "0.8rem 0",
        overflow: "hidden",
        whiteSpace: "nowrap",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          animation: "marquee 24s linear infinite",
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.9)",
              padding: "0 3rem",
            }}
          >
            {i > 0 && (
              <span style={{ marginRight: "3rem", opacity: 0.55 }}>✦</span>
            )}
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
