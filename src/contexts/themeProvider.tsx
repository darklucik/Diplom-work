import React, {
  useState,
  useEffect,
  useMemo,
  ReactNode,
  useCallback,
} from "react";
import { ThemeContext, themes } from "./themeContext";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [themeValue, setThemeValue] = useState(themes.light);

  useEffect(() => {
    const persistedTheme = localStorage.getItem("currentTheme");

    if (persistedTheme && typeof persistedTheme === "string") {
      setThemeValue(persistedTheme);
    }
  }, [themeValue]);

  const toggleTheme = useCallback(() => {
    setThemeValue((prevValue) =>
      prevValue === themes.dark ? themes.light : themes.dark
    );
  }, [setThemeValue]);

  const contextValue = useMemo(() => {
    return {
      theme: themeValue,
      toggleTheme: toggleTheme,
    };
  }, [themeValue, toggleTheme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
