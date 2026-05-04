export default function About() {
  const contact = [
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
  return (
    <section id="about" className="py-20 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12">About</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="flex justify-center">
            <img
              src="/yuvi.jpg"
              alt="Yuvi"
              className="w-80 h-80 rounded-lg object-cover shadow-lg"
            />
          </div>

          {/* Right side - Text */}
          <div>
            <p className="text-lg text-white-700 leading-relaxed mb-6">
              I&apos;m a Frontend-focused Full Stack Engineer with 6 years of experience building clean, accessible, and high-performance web applications used by millions. Currently at Comcast, I work on the Xfinity e-commerce platform — a system that handles over 7.7 billion monthly requests and supports 55 million monthly visitors with 99.87% uptime.
            </p>

            {/* Contact Links */}
            <div className="flex flex-col gap-3">
              {contact.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-3 text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors duration-200"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
