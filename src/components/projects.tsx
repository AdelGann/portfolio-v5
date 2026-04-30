import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "React Folder Router",
    description:
      "Un router para React basado en el sistema de archivos, inspirado en la estructura de carpetas de Next.js. Permite crear rutas de forma automática basándose en la estructura de directorios del proyecto.",
    technologies: ["React", "TypeScript", "Vite", "File System API"],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Finventa",
    description:
      "CRM financiero completo para la gestión de ventas, clientes y facturación. Incluye dashboard analítico, reportes automatizados y gestión de inventario.",
    technologies: ["Next.js", "PostgreSQL", "Tailwind CSS", "Prisma"],
    github: "#",
    demo: "#",
    featured: true,
  },
];

export function Projects() {
  return (
    <section id="proyectos" className="px-6 md:px-12 lg:px-24 py-24 bg-card/30">
      <div className="max-w-4xl">
        <h2 className="text-sm text-muted-foreground uppercase tracking-widest mb-12">
          Proyectos
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg border border-border bg-card hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <Folder className="w-10 h-10 text-primary" />
                <div className="flex items-center gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Ver código en GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      aria-label="Ver demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-medium mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-muted-foreground font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
