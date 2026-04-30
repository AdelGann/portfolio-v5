import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socialLinks = [
  {
    name: "GitHub",
    href: "#",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "#",
    icon: Twitter,
  },
  {
    name: "Email",
    href: "mailto:tu@email.com",
    icon: Mail,
  },
];

export function Contact() {
  return (
    <section id="contacto" className="px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-4xl">
        <h2 className="text-sm text-muted-foreground uppercase tracking-widest mb-8">
          Contacto
        </h2>

        <p className="text-2xl md:text-3xl font-medium leading-relaxed text-balance mb-8">
          Si te gustaría hablar sobre un proyecto o simplemente saludar,{" "}
          <span className="text-primary">
            siempre estoy abierto a conversar
          </span>
          .
        </p>

        <a
          href="mailto:tu@email.com"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity mb-12"
        >
          <Mail className="w-4 h-4" />
          Envíame un mensaje
        </a>

        <div className="pt-12 border-t border-border">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} · Hecho con Next.js y Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
