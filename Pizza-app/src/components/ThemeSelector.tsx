
import { useContext } from "react";
import "./ThemeSelector.css";
import { ThemeContext } from "../contexts/ThemeContext";

const themeColors: string[] = ["warning", "danger", "secondary", "primary", "success","magic"];


export default function ThemeSelector() {
  const { changeColor, mode, changeMode, color } = useContext(ThemeContext);

  function toggleMode() {
    changeMode(mode === "light" ? "dark" : "light");
  }
  console.log("Current mode:", mode);


  return (
    <div className={`container theme-selector theme-${color} mode-${mode}`}>
      <div className="mode-toggle">
        <i
          className={`bi bi-moon-stars${mode === "dark" ? "-fill" : ""}`}
          onClick={toggleMode}
        />
      </div>
      <div className="theme-links">
        {themeColors.map((clr) => (
          <span
            key={clr}
            className={`bg-${clr}`}
            onClick={() => changeColor(clr)}
          ></span>
        ))}
      </div>
    </div>
  );
}
