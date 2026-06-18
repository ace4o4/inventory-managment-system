import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { CustomCursor } from "@/components/CustomCursor";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "NexStock - Inventory Management",
  description: "Modern, scalable inventory management system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex bg-clay text-foreground transition-colors duration-300 md:cursor-none">
        <CustomCursor />
        <ThemeProvider>
          <Sidebar />
          <main className="flex-1 p-8 overflow-y-auto">
            <Header />
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
