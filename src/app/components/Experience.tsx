"use client";

import { useState } from "react";

const experiences = [
  {
    role: "Development Engineer 3",
    company: "Comcast · Full-time",
    period: "2024 – Present",
    active: true,
    logo: "/comcast.png",
    description:
      "Leading development of Xfinity NOW & Xfinity CBM web applications using React and Next.js. Architected micro-frontend systems and mentored junior developers. Collaborated with cross-functional teams to deliver complex features on time.",
    tags: ["Next.js", "React", "Node.js", "Tailwind CSS", "zod", "Zustand"],
  },
  {
    role: "Development Engineer 2",
    company: "Comcast · Full-time",
    period: "2022 – 2024",
    active: false,
    logo: "/comcast.png",
    description:
      "Developed and maintained high-traffic web applications using Angular and Node.js. Implemented responsive designs, optimized API performance, and contributed to a 30% increase in user engagement. Worked closely with UX designers to enhance user experience.",
    tags: ["Angular", "REST APIs", "SCSS", "JavaScript"],
  },
  {
    role: "Senior Systems Engineer",
    company: "Infosys · Full-time",
    period: "2019 – 2022",
    active: false,
    logo: "/infosys.jpeg",
    description:
      "Built full-stack Application using Angular & Node.js for Genmab Client for their Internal platform, enabling better and efficient understanding of customer records.",
    tags: ["Angular", "React", "Node.js", "HTML5", "Bootstrap", "JavaScript"],
  },
];

export default function Experience() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="experience" className="py-20 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 font-syne">Experience</h2>
        <p className="text-[var(--muted)] mb-12 max-w-2xl">
          A timeline of my professional journey.
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-[var(--border2)] hidden md:block" />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative md:pl-16 transition-all duration-300"
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-[18px] top-8 w-3 h-3 rounded-full border-2 hidden md:block transition-colors duration-300"
                  style={{
                    borderColor: exp.active || hoveredIdx === idx ? "var(--accent)" : "var(--border2)",
                    background: exp.active ? "var(--accent)" : hoveredIdx === idx ? "var(--accent)" : "var(--bg)",
                  }}
                />

                {/* Card */}
                <div
                  className="rounded-xl border p-6 transition-all duration-300"
                  style={{
                    background: "var(--card)",
                    borderColor: hoveredIdx === idx ? "var(--accent)" : "var(--border)",
                    boxShadow: hoveredIdx === idx ? "0 0 24px var(--accent-glow)" : "none",
                    transform: hoveredIdx === idx ? "translateY(-2px)" : "translateY(0)",
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    {/* Company Logo */}
                    <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-white/10 flex items-center justify-center overflow-hidden">
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-10 h-10 object-contain"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <div>
                          <h3 className="text-xl font-semibold text-[var(--text)] font-syne">
                            {exp.role}
                          </h3>
                          <p className="text-[var(--muted)] text-sm">{exp.company}</p>
                        </div>
                        <span
                          className={`text-xs font-medium px-3 py-1 rounded-full w-fit ${
                            exp.active
                              ? "bg-[var(--accent2)]/15 text-[var(--accent2)]"
                              : "bg-white/5 text-[var(--muted)]"
                          }`}
                        >
                          {exp.period}
                        </span>
                      </div>

                      <p className="text-[var(--muted)] text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-1 rounded-md bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
