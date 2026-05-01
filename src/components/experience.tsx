import { ExternalLink } from "lucide-react";

const experiences = [
  {
    period: "2026 — Presente",
    detailed: "Nov 2026 - Actual",
    role: "Soporte Tecnico",
    company: "Hoot Interactive",
    description:
      "Diagnóstico y resolución de incidencias de software para clientes, implementando soluciones mediante web scraping y automatización para extraer información, analizar problemas y optimizar procesos técnicos.",
    technologies: ["HTML", "JavaScript", "Web Scraping"],
    current: true,
  },
  {
    period: "2025 — Presente",
    detailed: "Abr 2025 - Actual",
    role: "Desarrollador Fullstack",
    company: "Sineryx",
    description:
      "Desarrollo de soluciones web completas, desde el frontend hasta el backend. Integración de APIs y bases de datos. Colaboración en equipos ágiles.",
    technologies: ["React", "Node.js", "PostgreSQL", "REST APIs"],
    current: true,
  },
  {
    period: "2024 — 2025",
    detailed: "Ene 2024 - Abr 2025",
    role: "Desarrollador Web",
    company: "Sempiterno",
    description:
      "Mi primer rol profesional donde crecí como desarrollador. Participé en múltiples proyectos web, aprendiendo las mejores prácticas de la industria y trabajando con tecnologías modernas.",
    technologies: ["TypeScript", "React", "CSS", "Git", "REST APIs"],
    current: false,
  },
];

export function Experience() {
  return (
    <section id="experiencia" className="px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-4xl">
        <h2 className="text-sm text-muted-foreground uppercase tracking-widest mb-12">
          Experiencia
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="group grid md:grid-cols-[180px_1fr] gap-4 md:gap-8"
            >
              <div>
                <div className="text-sm text-muted-foreground">
                  {exp.period}
                  {exp.current && (
                    <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-primary/10 text-primary">
                      Actual
                    </span>
                  )}
                </div>
                <div className="text-xs text-muted-foreground">{exp.detailed}</div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-1 group-hover:text-primary transition-colors">
                  {exp.role} · {exp.company}
                  <ExternalLink className="inline-block w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
