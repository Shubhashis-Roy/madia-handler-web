"use client";

import { Provider } from "react-redux";
import { store } from "@/app/lib/store";
import { ThemeProvider } from "@/app/components/ui/theme-provider";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider>{children}</ThemeProvider>
    </Provider>
  );
}
