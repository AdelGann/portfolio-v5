import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";

export const metadata = {
  title: "Adel Gannem - Developer",
  description:
    "Desarrollador Web especializado en React, Next.js, TypeScript y Tailwind CSS. 3 años de experiencia construyendo aplicaciones web modernas.",
  requiresAuth: false,
};

export default function Page() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
