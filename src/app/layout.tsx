import { Outlet, useAmazingMeta } from "@amazing-router/react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useTheme } from "@/components/theme-provider";

export default function Layout() {
 const { title, description, image } = useAmazingMeta();
 const { theme } = useTheme();

 const dynamicFavicon = theme === "dark" ? "/logo-dark.svg" : "/logo.svg";
 const finalImage = image || dynamicFavicon;

 return (
  <div className="bg-background">
   <title>{title}</title>
   <link rel="icon" type="image/svg+xml" href={finalImage} />
   <meta name="description" content={description} />
   <div className="font-sans antialiased bg-background text-foreground">
    <Outlet />
    {process.env.NODE_ENV === "production" && (
     <>
      <Analytics />
      <SpeedInsights />
     </>
    )}
   </div>
  </div>
 );
}
