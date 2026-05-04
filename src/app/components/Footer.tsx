"use client";

const footerLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yuvaraju-konduru-b78147176/",
    icon: "🔗",
  },
  {
    label: "konduruyuvaraj@gmail.com",
    href: "mailto:konduruyuvaraj@gmail.com",
    icon: "✉️",
  },
  {
    label: "+91 9642396557",
    href: "tel:+919642396557",
    icon: "📞",
  },
];

export default function Footer() {
  return (
    <footer className="px-6 lg:px-20 py-8 border-t border-[var(--border)] bg-[var(--bg)]">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-xs text-[var(--muted)]">
          © {new Date().getFullYear()}{" "}
          <span className="text-[var(--accent)]">Yuvaraju Konduru</span>. All
          rights reserved.
        </p>
        <div className="flex items-center gap-5">
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-1.5 text-xs text-[var(--muted)] hover:text-[var(--text)] transition-colors duration-200"
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
