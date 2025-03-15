import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ToggleButton = ({label1, label2} : {label1?: string; label2: string}) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      {theme === "bright" ? label1 : label2}
    </button>
  );
};

export default ToggleButton;