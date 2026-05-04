import { useState, useEffect } from 'react';
import '../App.css'; 

export default function True_False() {
  const [questions, setQuestions] = useState([]);
  const [actual, setActual] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/questions?type=verdadero_falso")
        .then(res => res.json())
        .then(data => setQuestions(data))
        .catch(err => console.error("Error cargando preguntas:", err));
  }, []);

  if (questions.length === 0) return <div>Cargando preguntas...</div>;

  const preguntaObj = questions[actual];

  const handleSelect = (opcion) => {
    setSelectedOption(opcion);
    
    if (opcion === preguntaObj.correcta) {
      setFeedback("¡Correcto!");
    } else {
      setFeedback("Incorrecto.");
    }
  };

  const siguiente = () => {
      if (actual < questions.length - 1) {
          setSelectedOption("");
          setFeedback("");
          setActual(actual + 1);
      } else {
          alert("¡Trivia completada!");
      }
  };

  return (
    <div className="container">
      <div className="card">
       
        <h2 className="titulo">Preguntas</h2>
        
        <p style={{ color: '#888', marginBottom: '25px', fontSize: '1.2rem', fontWeight: '500' }}>
          {preguntaObj.pregunta || preguntaObj.question}
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

        <button className="boton" onClick={siguiente} disabled={!selectedOption}>
          {actual === questions.length - 1 ? "Finalizar" : "Siguiente"}
        </button>
      </div>
    </div>
  );
}