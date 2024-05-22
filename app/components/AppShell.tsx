'use client';

import '@ui5/webcomponents-react/dist/Assets.js';
import { AppShellBar } from '@/app/components/AppShellBar';
import { ThemeProvider } from '@ui5/webcomponents-react';
import { ReactNode } from 'react';

interface AppShellProps {
  children?: ReactNode | ReactNode[];
}

export function AppShell({ children }: AppShellProps) {
  return (
    <ThemeProvider>
      <AppShellBar />
      <div className="appScrollContainer" style={{overflow:"visible"}}>{children}</div>
    </ThemeProvider>
  );
}
