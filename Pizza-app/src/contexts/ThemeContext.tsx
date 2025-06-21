
import { createContext, useReducer, type JSX, type ReactNode } from "react";
import { themeReducer } from "../reducers/themeReducer";

// 1. Tipler
type ThemeState = {
  color: string;
  mode?: string;
};

type ThemeContextType = ThemeState & {
  changeColor: (value: string) => void;
  changeMode: (value: string) => void;
};

// 2. Context Oluştur
export const ThemeContext = createContext<ThemeContextType>({
  color: "primary",
  mode: "light",
  changeColor: () => {},
  changeMode: () => {},
});

// 3. Provider Bileşeni
type ThemeProviderProps = {
  children: ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {
  const [state, dispatch] = useReducer(themeReducer, {
    color: "primary",
    mode: "light",
  });

  function changeColor(value: string): void {
    dispatch({ type: "CHANGE_COLOR", payload: value });
  }

  function changeMode(value: string): void {
    dispatch({ type: "CHANGE_MODE", payload: value });
  }

  return (
    <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
