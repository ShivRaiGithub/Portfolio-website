import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/main/Footer";
import ParticlesComponent from "@/components/main/particles.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shiv Rai",
  description: "Portfolio of Shiv Rai",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <ParticlesComponent />
        {children}
        <Footer />
      </body>
    </html>
  );
}
