"use client";

import { useEffect, useRef } from "react";

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const handleScroll = () => {
      if (window.scrollY > 60) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "1.75rem 3rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "background 0.35s ease, padding 0.35s ease, border-color 0.35s ease",
        borderBottom: "1px solid transparent",
      }}
      className="[&.scrolled]:bg-[rgba(11,11,11,0.96)] [&.scrolled]:backdrop-blur-[12px] [&.scrolled]:!py-[1.125rem] [&.scrolled]:border-[var(--border-d)] max-md:!px-6 max-md:!py-5 [&.scrolled]:max-md:!py-4"
    >
      <a
        href="#"
        style={{
          fontFamily: "var(--font-playfair), 'Playfair Display', serif",
          fontSize: "1.1875rem",
          fontWeight: 600,
          color: "#fff",
          letterSpacing: "0.12em",
          textDecoration: "none",
          textTransform: "uppercase",
        }}
      >
        Forma Studio
      </a>

      <ul
        style={{
          display: "flex",
          gap: "2.75rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
        className="max-md:hidden"
      >
        {[
          { label: "Studio", href: "#philosophy" },
          { label: "Work", href: "#portfolio" },
          { label: "Services", href: "#services" },
          { label: "Contact", href: "#contact" },
        ].map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              style={{
                color: "rgba(255,255,255,0.55)",
                textDecoration: "none",
                fontSize: "0.78rem",
                fontWeight: 400,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(255,255,255,0.55)")
              }
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      <a
        href="#contact"
        style={{
          fontSize: "0.78rem",
          fontWeight: 500,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.35)",
          padding: "0.625rem 1.625rem",
          textDecoration: "none",
          transition: "background 0.22s, color 0.22s",
        }}
        className="max-md:hidden"
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#fff";
          e.currentTarget.style.color = "var(--dark)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
          e.currentTarget.style.color = "#fff";
        }}
      >
        Get in Touch
      </a>

      <button
        className="hidden max-md:flex flex-col gap-[5px] cursor-pointer p-1 bg-transparent border-none"
        aria-label="Open menu"
      >
        <span style={{ display: "block", width: 22, height: 1.5, background: "#fff" }} />
        <span style={{ display: "block", width: 22, height: 1.5, background: "#fff" }} />
        <span style={{ display: "block", width: 22, height: 1.5, background: "#fff" }} />
      </button>
    </nav>
  );
}
