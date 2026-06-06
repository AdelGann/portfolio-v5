import { Suspense, lazy } from "react";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";

const Experience = lazy(() => import("@/components/experience").then(m => ({ default: m.Experience })));
const Projects = lazy(() => import("@/components/projects").then(m => ({ default: m.Projects })));
const Contact = lazy(() => import("@/components/contact").then(m => ({ default: m.Contact })));

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
      <Suspense fallback={<div className="h-screen w-full flex items-center justify-center"><div className="w-8 h-8 rounded-full border-4 border-primary border-t-transparent animate-spin"></div></div>}>
        <Experience />
        <Projects />
        <Contact />
      </Suspense>
    </main>
  );
}
