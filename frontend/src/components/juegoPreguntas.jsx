import { useState, useEffect } from "react";
import "./juegoPreguntas.css";

function Juego() {
    const [questions, setQuestions] = useState([]);
    const [actual, setActual] = useState(0);
    const [elegida, setElegida] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/questions?type=multiple")
            .then(res => res.json())
            .then(data => setQuestions(data))
            .catch(err => console.error("Error cargando preguntas:", err));
    }, []);

    if (questions.length === 0) return <div>Cargando preguntas...</div>;

    const pregunta = questions[actual];
    const respuestas = pregunta.answers; // Usamos directamente el array del archivo de datos

    const elegir = (index) => {
        setElegida(index);
    };

    const siguiente = () => {
        if (actual < questions.length - 1) {
            setElegida(null);
            setActual(actual + 1);
        } else {
            alert("¡Trivia completada!");
        }
    };

    return (
        <div className="container">
            <div className="card">
                <h2 className="titulo">Preguntas</h2>
                <h3>{pregunta.question || pregunta.pregunta}</h3>

                <div className="opciones">
                    {respuestas.map((resp, i) => (
                        <div key={i} className="opcion" onClick={() => elegir(i)}>
                            <span className="letra">
                                {String.fromCharCode(97 + i)}
                            </span>
                            {resp}
                        </div>
                    ))}
                </div>

                {elegida !== null && (
                    <p style={{ marginTop: "10px", fontWeight: "bold" }}>
                        {elegida === pregunta.correct ? "✅ Correcto" : "❌ Incorrecto"}
                    </p>
                )}

                <button className="boton" onClick={siguiente} disabled={elegida === null}>
                    {actual === questions.length - 1 ? "Finalizar" : "Siguiente"}
                </button>
            </div>
        </div>
    );
}

export default Juego;