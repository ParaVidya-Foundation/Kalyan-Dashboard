"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { ErrorBoundary } from "@/components/error-boundary";

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ErrorBoundary>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"     
        enableSystem={false}      
        disableTransitionOnChange
      >
        {children}
        <Toaster />
      </ThemeProvider>
    </ErrorBoundary>
  );
}
