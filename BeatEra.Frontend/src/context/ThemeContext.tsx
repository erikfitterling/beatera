import { createContext, useState, useEffect, ReactNode } from "react";

// Typ für den Theme-Context
interface ThemeContextType {
  theme: "bright" | "dark";
  toggleTheme: () => void;
}

// Context erstellen (mit Default-Werten)
export const ThemeContext = createContext<ThemeContextType>({
  theme: "bright",
  toggleTheme: () => {},
});

// Props für den ThemeProvider
interface ThemeProviderProps {
  children: ReactNode;
}

// Provider-Komponente
export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<"bright" | "dark">(() => {
    return (localStorage.getItem("theme") as "bright" | "dark") || "bright";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "bright" ? "dark" : "bright"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
