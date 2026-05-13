import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-dark">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Stránka nenalezena</h2>
        <p className="mt-2 text-sm text-text-muted">Stránka, kterou hledáte, neexistuje nebo byla přesunuta.</p>
        <div className="mt-6">
          <Link to="/" className="btn-primary">Zpět na hlavní stránku</Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "SIT Automotive | Prémiová autopůjčovna Mercedes-Benz Praha" },
      { name: "description", content: "Prémiová autopůjčovna Mercedes-Benz a BMW v Praze. Krátkodobý i dlouhodobý pronájem luxusních vozidel. Přistavení po Praze, plné pojištění a servis v ceně." },
      { property: "og:title", content: "SIT Automotive | Prémiová autopůjčovna Mercedes-Benz Praha" },
      { property: "og:description", content: "Prémiová autopůjčovna Mercedes-Benz a BMW v Praze. Krátkodobý i dlouhodobý pronájem luxusních vozidel. Přistavení, pojištění a servis v ceně." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/ypS9RaVyxCStGNf1td7aGxe0KSg1/social-images/social-1777925086131-1-AMG-S63-2024-review.webp" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "SIT Automotive | Prémiová autopůjčovna Mercedes-Benz Praha" },
      { name: "twitter:description", content: "Prémiová autopůjčovna Mercedes-Benz a BMW v Praze. Krátkodobý i dlouhodobý pronájem luxusních vozidel." },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/ypS9RaVyxCStGNf1td7aGxe0KSg1/social-images/social-1777925086131-1-AMG-S63-2024-review.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" as const },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
