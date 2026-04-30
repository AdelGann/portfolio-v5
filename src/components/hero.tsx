import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-4xl">
        <div className="mb-6">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
            Disponible para proyectos
          </span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
          Adel Gannem
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Desarrollador Web & Backend
        </p>

        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mb-10">
          +3 años construyendo aplicaciones web modernas y escalables.
          Especializado en{" "}
          <span className="text-foreground font-medium">React</span>,{" "}
          <span className="text-foreground font-medium">Next.js</span>,{" "}
          <span className="text-foreground font-medium">TypeScript</span> y{" "}
          <span className="text-foreground font-medium">Tailwind CSS</span>.
        </p>

        <div className="flex flex-wrap gap-4 mb-12">
          <Button asChild>
            <a href="mailto:imadelg14@gmail.com">
              <Mail className="w-4 h-4 mr-2" />
              Contactar
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#proyectos">Ver proyectos</a>
          </Button>
        </div>

        <div className="flex items-center gap-6 pt-8 border-t border-border">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:imadelg14@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <span className="text-sm text-muted-foreground ml-auto">
            imadelg14@gmail.com
          </span>
        </div>
      </div>
    </section>
  );
}
