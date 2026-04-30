import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Experiencia", href: "#experiencia" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent",
      )}
    >
      <div className="px-6 md:px-12 lg:px-24 py-4 flex items-center justify-between">
        <a
          href="#"
          className="text-lg font-medium hover:text-primary transition-colors"
        >
          Portfolio
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="mailto:tu@email.com"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          tu@email.com
        </a>
      </div>
    </header>
  );
}
