"use client";

const stats = [
  { num: "7+", label: "Years Experience" },
  { num: "30+", label: "Projects Delivered" },
  { num: "10+", label: "Technologies" },
];

export default function Hero() {
  const scrollTo = (href: string) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "8rem 4rem 4rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Grid background */}
      <div
        className="hero-grid-bg"
        style={{ position: "absolute", inset: 0, zIndex: 0 }}
      />

      {/* Orbs */}
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          top: -100,
          right: -100,
          background:
            "radial-gradient(circle, rgba(108,99,255,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 400,
          height: 400,
          borderRadius: "50%",
          bottom: 0,
          left: "10%",
          background:
            "radial-gradient(circle, rgba(0,212,170,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, maxWidth: 760 }}>
        {/* Availability badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            color: "var(--accent2)",
            border: "0.5px solid rgba(0,212,170,0.3)",
            padding: "6px 14px",
            borderRadius: 100,
            marginBottom: "2rem",
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "var(--accent2)",
              display: "inline-block",
            }}
          />
          Available for new opportunities
        </div>

        {/* Name */}
        <h1
          style={{
            fontFamily: "Syne, sans-serif",
            fontSize: "clamp(3rem, 7vw, 5.5rem)",
            fontWeight: 800,
            lineHeight: 1.0,
            letterSpacing: "-2px",
            marginBottom: "1rem",
          }}
        >
          Yuvaraju
          <br />
          <span style={{ color: "var(--accent)" }}>Konduru</span>
        </h1>

        <p
          style={{
            fontSize: "1.1rem",
            fontWeight: 300,
            color: "var(--muted)",
            marginBottom: "1.5rem",
            letterSpacing: "0.3px",
          }}
        >
          Senior Software Engineer · Full Stack Developer
        </p>

        <p
          style={{
            fontSize: "1.05rem",
            color: "rgba(240,238,232,0.7)",
            maxWidth: 560,
            marginBottom: "2.5rem",
            fontWeight: 300,
            lineHeight: 1.8,
          }}
        >
          Building scalable, performant web applications with modern frontend
          frameworks and robust backend systems. Passionate about clean
          architecture and exceptional user experiences.
        </p>

        {/* CTA buttons */}
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <button
            onClick={() => scrollTo("#projects")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "var(--accent)",
              color: "#fff",
              padding: "0.85rem 2rem",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 500,
              border: "none",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#5750e8";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--accent)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            View Projects ↓
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              border: "0.5px solid var(--border2)",
              color: "var(--text)",
              padding: "0.85rem 2rem",
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 500,
              cursor: "pointer",
              background: "transparent",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "var(--accent)";
              el.style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.borderColor = "var(--border2)";
              el.style.color = "var(--text)";
            }}
          >
            Get in Touch
          </button>
        </div>

        {/* Stats */}
        <div
          style={{
            display: "flex",
            gap: "3rem",
            marginTop: "3.5rem",
            paddingTop: "2.5rem",
            borderTop: "0.5px solid var(--border)",
            flexWrap: "wrap",
          }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              style={{ display: "flex", flexDirection: "column", gap: 4 }}
            >
              <span
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontSize: "2rem",
                  fontWeight: 700,
                  color: "var(--text)",
                  letterSpacing: "-1px",
                }}
              >
                {stat.num.replace("+", "")}
                <span style={{ color: "var(--accent)" }}>+</span>
              </span>
              <span
                style={{
                  fontSize: 12,
                  color: "var(--muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.5px",
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
