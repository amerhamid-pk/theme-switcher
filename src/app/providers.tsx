
// /src/app/providers.tsx
'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      defaultTheme="default" // Set default theme
      attribute="class" // Use class-based theme switching
      enableSystem={false} // Disable system theme detection
    >
      {children}
    </ThemeProvider>
  );
}

