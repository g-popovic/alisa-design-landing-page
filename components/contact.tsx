"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: "var(--dark)",
        padding: "9rem 3rem 5rem",
        borderTop: "1px solid var(--border-d)",
      }}
      className="max-md:!px-6 max-md:!pt-20 max-md:!pb-12"
    >
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "7rem",
            paddingBottom: "6rem",
            marginBottom: "4rem",
            borderBottom: "1px solid var(--border-d)",
          }}
          className="max-[900px]:grid-cols-1 max-[900px]:gap-14"
        >
          {/* left */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-playfair), 'Playfair Display', serif",
                fontSize: "clamp(2.5rem, 5.5vw, 4.75rem)",
                fontWeight: 500,
                color: "#fff",
                lineHeight: 1.08,
                marginBottom: "2rem",
              }}
            >
              Let&apos;s create something{" "}
              <em
                style={{ fontStyle: "italic", color: "rgba(255,255,255,0.32)" }}
              >
                extraordinary
              </em>
            </h2>
            <p
              style={{
                fontSize: "0.9375rem",
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.38)",
                maxWidth: "40ch",
                fontWeight: 300,
                marginBottom: "2.75rem",
              }}
            >
              Whether you have a clear vision or are just beginning to imagine
              the possibilities, we would love to hear from you.
            </p>
            <a
              href="mailto:hello@formastudio.co"
              style={{
                display: "inline-block",
                background: "#fff",
                color: "var(--dark)",
                padding: "1.125rem 3rem",
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "background 0.25s, color 0.25s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--accent)";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#fff";
                e.currentTarget.style.color = "var(--dark)";
              }}
            >
              Begin a Conversation
            </a>
          </div>

          {/* right */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "2.25rem",
            }}
          >
            {[
              { label: "Email", value: "hello@formastudio.co", href: "mailto:hello@formastudio.co" },
              { label: "Phone", value: "+44 (0)20 7123 4567", href: "tel:+442071234567" },
              { label: "Studio", value: "12 Fitzroy Square, London W1T 6EG" },
              { label: "Instagram", value: "@formastudio", href: "#" },
            ].map(({ label, value, href }) => (
              <div key={label}>
                <div
                  style={{
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.25)",
                    marginBottom: "0.3rem",
                  }}
                >
                  {label}
                </div>
                {href ? (
                  <a
                    href={href}
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.62)",
                      textDecoration: "none",
                      display: "block",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#fff")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255,255,255,0.62)")
                    }
                  >
                    {value}
                  </a>
                ) : (
                  <span
                    style={{
                      fontSize: "0.9375rem",
                      color: "rgba(255,255,255,0.62)",
                      display: "block",
                    }}
                  >
                    {value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "2rem",
            flexWrap: "wrap",
          }}
          className="max-[900px]:flex-col max-[900px]:items-start max-[900px]:gap-6"
        >
          <div
            style={{
              fontFamily: "var(--font-playfair), 'Playfair Display', serif",
              fontSize: "1.0625rem",
              fontWeight: 600,
              color: "#fff",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Forma Studio
          </div>
          <div
            style={{
              fontSize: "0.72rem",
              color: "rgba(255,255,255,0.18)",
              letterSpacing: "0.05em",
            }}
          >
            © 2026 Forma Studio Ltd. All rights reserved.
          </div>
          <ul
            style={{
              display: "flex",
              gap: "2rem",
              listStyle: "none",
              margin: 0,
              padding: 0,
            }}
          >
            {["Privacy", "Terms", "Cookies"].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  style={{
                    fontSize: "0.72rem",
                    color: "rgba(255,255,255,0.25)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.65)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "rgba(255,255,255,0.25)")
                  }
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
