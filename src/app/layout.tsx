

// src/app/layout.tsx
import { Providers } from "@/app/providers";
import "./globals.css";
import { ReactNode } from "react";
import Header from "@/components/Header";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col relative">
        <Providers>
          <div className="flex-grow w-full flex justify-start mt-24 relative z-20">
            <main className="w-full max-w-full lg:max-w-6xl mx-auto px-4 md:px-0 py-5">
              <Header />
              {children}
            </main>
          </div>
        </Providers >
      </body >
    </html >
  );
}
