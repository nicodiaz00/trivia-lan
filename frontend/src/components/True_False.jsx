import { useState } from 'react';
import '../App.css'; 

export default function True_False({ 
  pregunta = "JavaScript es un lenguaje compilado.", 
  respuestaCorrecta = "Falso" 
}) {
  
  const [selectedOption, setSelectedOption] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSelect = (opcion) => {
    setSelectedOption(opcion);
    
    if (opcion === respuestaCorrecta) {
      setFeedback("¡Correcto!");
    } else {
      setFeedback("Incorrecto.");
    }
  };

  return (
    <div className="container">
      <div className="card">
       
        <h2 className="titulo">Preguntas</h2>
        
        
        <p style={{ color: '#888', marginBottom: '25px', fontSize: '1.2rem', fontWeight: '500' }}>
          {pregunta}
        </p>

        <div className="opciones">
          {/* Opción Verdadero */}
          <div 
            className="opcion" 
            onClick={() => handleSelect("Verdadero")}
            style={selectedOption === "Verdadero" ? { backgroundColor: '#cce5ff', borderColor: '#2f80c0' } : {}}
          >
            <span className="letra">V</span>
            <span>Verdadero</span>
          </div>
          
          {/* Opción Falso */}
          <div 
            className="opcion" 
            onClick={() => handleSelect("Falso")}
            style={selectedOption === "Falso" ? { backgroundColor: '#cce5ff', borderColor: '#2f80c0' } : {}}
          >
            <span className="letra">F</span>
            <span>Falso</span>
          </div>
        </div>

        {/* Lógica para mostrar si acertó o no */}
        {feedback && (
          <p style={{ 
            marginTop: '20px', 
            fontWeight: 'bold', 
            fontSize: '1.1rem',
            color: feedback === "¡Correcto!" ? "#28a745" : "#dc3545" 
          }}>
            {feedback}
          </p>
        )}

        <button className="boton">
          Siguiente
        </button>
      </div>
    </div>
  );
}