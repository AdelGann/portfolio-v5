import { Mail, ArrowDown, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const technologies = [
  { name: "React", level: "Principal" },
  { name: "Next.js", level: "Principal" },
  { name: "TypeScript", level: "Principal" },
  { name: "Tailwind CSS", level: "Principal" },
  { name: "Node.js", level: "Backend" },
  { name: "PostgreSQL", level: "Backend" },
];

const stats = [
  { value: "3+", label: "Años de experiencia" },
  { value: "3", label: "Empresas" },
  { value: "3", label: "Proyectos destacados" },
];

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20 relative overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/20 dark:bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-primary/15 dark:bg-primary/3 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10">
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            Disponible para proyectos
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-muted-foreground">
            <MapPin className="w-3 h-3" />
            Remoto / Híbrido
          </span>
        </div>

        <div className="mb-6">
          <p className="text-muted-foreground text-lg mb-2">Hola, soy</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
            Adel Gannem
          </h1>
        </div>

        <div className="mb-8">
          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-muted-foreground">
            <span className="text-foreground font-medium">
              Desarrollador Fullstack
            </span>{" "}
          </p>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
          Transformo ideas en experiencias digitales. Especializado en construir
          aplicaciones web modernas, escalables y con interfaces que los
          usuarios aman.
        </p>

        {/* Technologies */}
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Stack principal
          </p>
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech.name}
                className="px-3 py-1.5 text-sm bg-secondary rounded-lg border border-border hover:border-primary/50 transition-colors cursor-default"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mb-16">
          <Button size="lg" asChild className="group">
            <a
              href="mailto:imadelg14@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="w-4 h-4 mr-2" />
              Hablemos
              <span className="ml-2 text-primary-foreground/60 group-hover:text-primary-foreground transition-colors">
                imadelg14@gmail.com
              </span>
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="cursor-pointer"
            onClick={() => window.open("/CV_Adel_Gannem.pdf", "_blank")}
          >
              Descargar CV
          
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="#proyectos">Ver mi trabajo</a>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-xl pb-5">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl font-bold text-primary">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
        <div className="border border-border mb-12" />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </div>
    </section>
  );
}
