import { useEffect, useState } from 'react';

/**
 * Hook to manage light/dark theme using a data attribute on the <html> element.
 * It reads the initial theme from localStorage (if present) or defaults to 'light'.
 * The returned toggleTheme function switches between the two modes and persists the choice.
 */
export function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(
    // Initialise from localStorage or default to light
    (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
  );

  // Apply the theme to the document root whenever it changes
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
}
