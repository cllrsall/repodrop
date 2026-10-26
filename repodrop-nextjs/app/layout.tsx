import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "RepoDrop – GitHub Uploader",
  description: "Upload files and folders directly to a GitHub repository. No Git or terminal required.",
  applicationName: "RepoDrop",
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%230a0a0c'/%3E%3Cpath d='M18 38l14-18 14 18H18z' fill='%23e8eef8'/%3E%3Ccircle cx='32' cy='42' r='4' fill='%2394a3b8'/%3E%3C/svg%3E",
  },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#000000" };

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en" data-theme="dark"><body>{children}</body></html>;
}
