"use client";

import { useState } from "react";

const skills = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
  { name: "Angular", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Zod", icon: "./zod.jpeg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invert: true },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", invert: true },
  { name: "REST APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "GraphQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
  { name: "Zustand", icon: "./zustand.jpeg" },
  { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "Tanstack Query", icon: "./Tanstack.jpeg" },
];

export default function Skills() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <section id="skills" className="py-20 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 font-syne">Skills</h2>
        <p className="text-[var(--muted)] mb-12 max-w-2xl">
          Technologies and tools I use to bring products to life.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4">
          {skills.map((skill, idx) => (
            <div
              key={skill.name}
              className="group relative flex flex-col items-center justify-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 transition-all duration-300 cursor-default"
              style={{
                borderColor:
                  hoveredIdx === idx
                    ? "var(--accent)"
                    : "var(--border)",
                boxShadow:
                  hoveredIdx === idx
                    ? "0 0 20px var(--accent-glow)"
                    : "none",
                transform:
                  hoveredIdx === idx ? "translateY(-4px)" : "translateY(0)",
              }}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                width={40}
                height={40}
                className={`transition-transform duration-300 group-hover:scale-110 ${
                  skill.invert ? "invert" : ""
                }`}
              />
              <span className="text-sm text-[var(--text)] text-center font-medium">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
