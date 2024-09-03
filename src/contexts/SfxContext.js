// "light" === lightMode, "dark" === darkMode
import { useState, createContext } from "react";

export const SfxContext = createContext({});

export function SfxContextProvider({ children }) {
  const [sfx, setSfx] = useState("light");
  
  const toggleSfx = () => {
    // console.log ("Updated theme: ", theme === "light" ? "dark" : "light");
    setSfx(sfx === "light" ? "dark" : "light");
  };
  console.log(sfx);
  return (
    <SfxContext.Provider value={{ sfx, toggleSfx }}>{children}</SfxContext.Provider>
  );
}
