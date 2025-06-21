type ThemeState = {
  color: string;
  mode?: string;
};

type ThemeAction =
  | { type: "CHANGE_COLOR"; payload: string }
  | { type: "CHANGE_MODE"; payload: string };

export function themeReducer(state: ThemeState, action: ThemeAction): ThemeState {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.payload };
    case "CHANGE_MODE":
      if (typeof document !== "undefined") {
        document.body.classList.toggle("dark-mode", action.payload === "dark");
      }
      return { ...state, mode: action.payload };
    default:
      return state;
  }
}
