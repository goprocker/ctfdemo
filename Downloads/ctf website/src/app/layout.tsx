import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OBSCURA 2026 | Chronosync — IIITDM Kancheepuram",
  description:
    "OBSCURA is the flagship techno-cultural fest of IIITDM Kancheepuram — the collision of innovation and tradition, engineering and artistry.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* Fixed mural background */}
        <div className="bg-mural">
          <img src="/images/hero-bg.png" alt="" aria-hidden="true" />
        </div>
        {children}
      </body>
    </html>
  );
}
