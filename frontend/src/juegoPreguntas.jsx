import { useState } from "react";
import { questions } from "./data/questions";

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
        <div>
            <h3>{pregunta.question}</h3>

            {/* 👇 crear botones automáticamente */}
            {respuestas.map((resp, i) => (
                <button key={i} onClick={() => elegir(resp)}>
                    {resp}
                </button>
            ))}

            {/* resultado */}
            {elegida && (
                <p>
                    {elegida === pregunta.correct
                        ? "Correcto"
                        : "Incorrecto"}
                </p>
            )}

            {/* botón siguiente */}
            {elegida && actual < questions.length - 1 && (
                <button onClick={siguiente}>Siguiente</button>
            )}

            {/* fin */}
            {elegida && actual === questions.length - 1 && (
                <p>Terminaste</p>
            )}
        </div>
    );
}

export default Juego;