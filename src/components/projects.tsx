import { ExternalLink, Github, Folder } from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Amazing Router React",
    description:
      "Implementación oficial para React de Amazing Router. Facilita la adopción de enrutamiento por carpetas similar a Next.js en aplicaciones Vite/React puras, incluyendo soporte avanzado para layouts anidados, rutas de grupo y hooks de contexto.",
    technologies: ["React", "TypeScript", "React Router", "Vite"],
    github: "https://github.com/AdelGann/amazing-router-react",
    featured: true,
  },
  {
    title: "Amazing Router Core",
    description:
      "Motor central agnóstico para la generación de rutas mediante el sistema de archivos (File-System Routing). Analiza el árbol de directorios en tiempo de construcción, resuelve rutas dinámicas y construye el mapa de navegación optimizado.",
    technologies: ["TypeScript", "Node.js", "AST", "File System API"],
    github: "https://github.com/AdelGann/amazing-router-core",
    featured: true,
  },
  {
    title: "Finventa",
    description:
      "Sistema integral de gestión (CRM/ERP) con enfoque financiero. Diseñado para centralizar la administración de clientes, facturación y ventas, incorporando paneles analíticos interactivos y módulos avanzados de recursos humanos.",
    technologies: ["React", "Tailwind CSS", "NestJS", "PostgreSQL", "Prisma"],
    featured: true,
  },
];

export function Projects() {
  return (
    <section id="proyectos" className="px-6 md:px-12 lg:px-24 py-24 bg-card/30">
      <div className="">
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
              <p className="text-muted-foreground max-w-4xl leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
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
