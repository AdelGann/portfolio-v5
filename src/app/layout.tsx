import { Outlet, useAmazingMeta } from "@amazing-router/react";
import { Analytics } from "@vercel/analytics/react";

export default function Layout() {
  const { title, description } = useAmazingMeta();
  return (
    <div className="bg-background">
      <title>{title}</title>
      <meta name="description" content={description} />
      <div className="font-sans antialiased bg-background text-foreground">
        <Outlet />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </div>
    </div>
  );
}
