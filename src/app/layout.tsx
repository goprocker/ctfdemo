import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OBSCURA 2026 | Capture The Flag — Sathyabama Institute of Science and Technology",
  description:
    "OBSCURA is the flagship techno-cultural fest of Sathyabama Institute of Science and Technology — the collision of innovation and tradition, engineering and artistry.",
};

import BackgroundMusic from "@/components/BackgroundMusic";

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
        <BackgroundMusic />
        {children}
      </body>
    </html>
  );
}
