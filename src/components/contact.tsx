import { Github, Linkedin, Mail } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/AdelGann",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/adel-gannem/",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:imadelg14@gmail.com",
    icon: Mail,
  },
];

export function Contact() {
  return (
    <section id="contacto" className="px-6 md:px-12 lg:px-24 py-24 md:py-32">
      {/* Mega CTA Card */}
      <div className="relative rounded-3xl overflow-hidden border border-border/50 bg-secondary/30 dark:bg-secondary/10 px-6 py-20 md:py-32 text-center">
        {/* Animated gradient background blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
        
        <div className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold tracking-widest uppercase bg-background border border-border text-foreground rounded-full mb-8 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Disponible
        </div>

        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/60">
          Trabajemos juntos
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 text-balance leading-relaxed">
          Ya sea que tengas una pregunta, una propuesta interesante, o simplemente quieras conectar, mi bandeja de entrada siempre está abierta.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:imadelg14@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium overflow-hidden hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-primary/20"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            <Mail className="w-5 h-5 relative z-10" />
            <span className="relative z-10">Envíame un correo</span>
          </a>
          <a
            href="https://www.linkedin.com/in/adel-gannem/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-background border border-border hover:bg-secondary hover:-translate-y-1 transition-all duration-300 font-medium"
          >
            <Linkedin className="w-5 h-5" />
            Conectar en LinkedIn
          </a>
        </div>
      </div>

      {/* Footer minimalista */}
      <div className="mt-16 md:mt-24 pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-border/50">
        <div className="flex items-center justify-center md:justify-start gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
              aria-label={link.name}
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        <p className="text-sm text-muted-foreground text-center md:text-right">
          © {new Date().getFullYear()} AdelGann · Construido con React & Tailwind.
        </p>
      </div>
    </section>
  );
}
