import { useEffect } from "react";
import { useTheme } from "./components/useTheme";
import ThemeProvider from "./components/ThemeProvider";
import "./assets/Theme.css";

function App() {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div>
      <h1>APLICACIÓN PARA CAMBIAR EL COLOR DE FONDO DE LA PANTALLA</h1>
      <p>Pulsa el botón y nota el cambio</p>
      <button className="boton-tema" onClick={toggleTheme}>
        Cambiar a {theme === "light" ? "Oscuro" : "Claro"}
      </button>
    </div>
  );
}

export default function RootApp() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}
