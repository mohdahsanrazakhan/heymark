import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkMode from "../hooks/useDarkMode";

export default function Switcher() {
  const [colorTheme, setTheme] = useDarkMode();
  const [darkMode, setDarkMode] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarMode = (checked) => {
    setTheme(colorTheme);
    setDarkMode(checked);
  };

  return (
    <>
      <DarkModeSwitch
        checked={darkMode}
        onChange={toggleDarMode}
        size={24}
        sunColor={`#131313`}
        moonColor={`#CFC1AE`}
      />
    </>
  );
}