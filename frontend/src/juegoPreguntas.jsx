import { useState } from "react";
import { questions } from "./data/questions";
import "./juegoPreguntas.css";

function Juego() {
    const [actual, setActual] = useState(0);
    const [elegida, setElegida] = useState(null);

    const pregunta = questions[actual];

    // 👇 lista de respuestas
    const respuestas = [
        pregunta.answer1,
        pregunta.answer2,
        pregunta.answer3,
        pregunta.answer4
    ];

    const elegir = (resp) => {
        setElegida(resp);
    };

    const siguiente = () => {
        setElegida(null);
        setActual(actual + 1);
    };

    return (
        <div className="container">
            <div className="card">
                <h2 className="titulo">Preguntas</h2>

                <h3>{pregunta.question}</h3>

                <div className="opciones">
                    {pregunta.answers.map((resp, i) => (
                        <div key={i} className="opcion" onClick={() => elegir(i)}>
                            <span className="letra">
                                {String.fromCharCode(97 + i)}
                            </span>
                            {resp}
                        </div>
                    ))}
                </div>

                {elegida !== null && (
                    <p>
                        {elegida === pregunta.correct ? "Correcto" : "Incorrecto"}
                    </p>
                )}

                <button className="boton" onClick={siguiente}>
                    Siguiente
                </button>
            </div>
        </div>
    );
}

export default Juego;