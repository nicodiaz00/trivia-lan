import { useState } from "react";
import PreguntaForm from "./components/PreguntaForm";
import VerdaderoFalsoForm from "./components/VerdaderoFalsoForm";
import Juego from "./components/juegoPreguntas";
import True_False from "./components/True_False";
import "./App.css";

// Componente reutilizable para la sub-navegación (DRY)
function SubNav({ vista, setVista }) {
  return (
    <nav className="nav-bar">
      <button 
        className={vista === "opcionMultiple" ? "active" : ""} 
        onClick={() => setVista("opcionMultiple")}
      >
        Opción Múltiple
      </button>
      <button 
        className={vista === "verdaderoFalso" ? "active" : ""} 
        onClick={() => setVista("verdaderoFalso")}
      >
        Verdadero o Falso
      </button>
    </nav>
  );
}

function App() {
  const [paginaActual, setPaginaActual] = useState("inicio");
  const [vistaActual, setVistaActual] = useState("opcionMultiple");
  const [vistaJuego, setVistaJuego] = useState("opcionMultiple");

  return (
    <div className="app-container">
      {/* Navegación principal entre páginas */}
      <nav className="main-nav">
        <div className="logo">Trivia LAN</div>
        <div className="nav-links">
          <button 
            className={paginaActual === "inicio" ? "active" : ""} 
            onClick={() => setPaginaActual("inicio")}
          >
            Inicio
          </button>
          <button 
            className={paginaActual === "crear" ? "active" : ""} 
            onClick={() => setPaginaActual("crear")}
          >
            Crear Preguntas
          </button>
          <button 
            className={paginaActual === "ver" ? "active" : ""} 
            onClick={() => setPaginaActual("ver")}
          >
            Ver Preguntas
          </button>
        </div>
      </nav>

      <div className="page-content">
        {paginaActual === "inicio" && (
          <div>
            <h1>Bienvenido a Trivia LAN</h1>
            <p>Usa la barra de navegación de arriba para administrar tus preguntas.</p>
          </div>
        )}

        {paginaActual === "crear" && (
          <div>
            <h1>Crear Nuevas Preguntas</h1>
            <SubNav vista={vistaActual} setVista={setVistaActual} />
            
            {vistaActual === "opcionMultiple" && <PreguntaForm />}
            {vistaActual === "verdaderoFalso" && <VerdaderoFalsoForm />}
          </div>
        )}

        {paginaActual === "ver" && (
          <div>
            <h1>Banco de Preguntas / Jugar</h1>
            <SubNav vista={vistaJuego} setVista={setVistaJuego} />

            {vistaJuego === "opcionMultiple" && <Juego />}
            {vistaJuego === "verdaderoFalso" && <True_False />}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

