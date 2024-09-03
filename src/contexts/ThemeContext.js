// "light" === lightMode, "dark" === darkMode
import { useState, createContext } from "react";

export const ThemeContext = createContext({});

export function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState("light");
  
  const toggleTheme = () => {
    // console.log ("Updated theme: ", theme === "light" ? "dark" : "light");
    setTheme(theme === "light" ? "dark" : "light");
  };
  // console.log(theme);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
  );
}
