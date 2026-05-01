"use client";

const projects = [
  {
    title: "Xfinity",
    company: "Comcast",
    description:
      "Xfinity is the web applications of Comcast where we offer wide range of services like Internet, Mobile, Home Securityand TV. its a micro-frontend systems built using React where each service is a micro app residing in a mono repo. We handle customer login, listing services , adding to cart and checkout flow in Xfinity.",
    tags: ["React", "Sitecore CMS", "Tailwind CSS", "zod", "Zustand"],
    link: "https://www.xfinity.com",
    image: "/xfinity.com.png",
  },
  {
    title: "Xfinity NOW",
    company: "Comcast",
    description:
      "Xfinity NOW is a web application of Comcast that provides prepaid Internet, Mobile and TV services. It is built using Next.js, sitecore CMS and Tailwind. The application allows customers to easily browse and purchase prepaid services, manage their accounts, and access support resources.",
    tags: ["Next.js", "Sitecore CMS", "Tailwind CSS", "Zod","Zustand", "ReactQuery"],
    link: "https://www.xfinity.com/now",
        image: "/now.png",
  },
  {
    title: "Xfinity Mobile",
    company: "Comcast",
    description:
      "Xfinity Mobile is a web application of Comcast that provides mobile services for Existing HSD customers. It is built using Angular. The application allows customers to easily browse and purchase mobile, Tablets and watches along with mobile plans.",
    tags: ["Angular", "Sitecore CMS", "SASS", "Typescript"],
    link: "https://www.xfinity.com/mobile",
    image: "/xfinityMobile.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 font-syne">Projects</h2>
        <p className="text-[var(--muted)] mb-12 max-w-2xl">
          Enterprise-scale products I&apos;ve built and contributed to.
        </p>

        <div className="flex flex-col gap-8">
          {projects.map((project, idx) => (
            <a
              key={idx}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl border border-[var(--border)] bg-[var(--card)] overflow-hidden transition-all duration-300 hover:border-[var(--accent)] hover:shadow-[0_0_24px_var(--accent-glow)] hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="md:w-2/5 relative overflow-hidden bg-[var(--bg2)]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 md:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="md:w-3/5 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-semibold text-[var(--text)] font-syne">
                        {project.title}
                      </h3>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/5 text-[var(--muted)] border border-[var(--border)]">
                        {project.company}
                      </span>
                    </div>
                    <p className="text-[var(--muted)] text-sm leading-relaxed mb-5">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 items-center">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-md bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20"
                      >
                        {tag}
                      </span>
                    ))}
                    <svg
                      className="ml-auto w-5 h-5 text-[var(--muted)] transition-transform duration-300 group-hover:translate-x-1 group-hover:text-[var(--accent)]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
