import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Gestion des bourses ESU",
  description: "Système d’information pour la gestion des bourses d’études",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}<Toaster richColors position="top-right" closeButton/></body></html>;
}
