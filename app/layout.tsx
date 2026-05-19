import type { Metadata } from "next";
import "./globals.css";
import { MainNav } from "./components/main-nav";
import { SiteFooter } from "./components/site-footer";

export const metadata: Metadata = {
  title: {
    default: "ARG | GeoSint",
    template: "%s | ARG GeoSint",
  },
  description:
    "Prototype modern pentru platforma ARG, optimizat pentru claritate, utilitate si extindere rapida.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ro">
      <body>
        <MainNav />
        <main className="page-main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
