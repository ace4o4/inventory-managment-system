import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { CustomCursor } from "@/components/CustomCursor";
import { Toaster } from "sonner";

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
        <Toaster position="bottom-right" toastOptions={{ className: 'bg-clay shadow-clay-pressed text-foreground border-accent', duration: 4000 }} />
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
