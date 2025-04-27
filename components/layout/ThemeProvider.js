import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
  theme: 'system',
  setTheme: () => null,
  themes: ['light', 'dark', 'system'],
});

export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }) {
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Avoid rendering with incorrect theme on initial load
    return <>{children}</>;
  }

  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  );
}