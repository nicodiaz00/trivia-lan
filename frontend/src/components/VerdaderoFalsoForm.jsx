import { useState } from "react";
import "../App.css";

export default function VerdaderoFalsoForm() {
  const [pregunta, setPregunta] = useState("");
  const [correcta, setCorrecta] = useState(null); // 'verdadero' o 'falso'

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaPregunta = {
      pregunta,
      tipo: "verdadero_falso",
      correcta,
    };
    console.log("Pregunta guardada:", nuevaPregunta);
    // Aquí podrías enviar la pregunta a tu backend o API
  };

  return (
    <div className="form-container">
      <h2>Crear Pregunta de Verdadero o Falso</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Pregunta:
          <input
            type="text"
            value={pregunta}
            onChange={(e) => setPregunta(e.target.value)}
            required
          />
        </label>

        <div>
          <label>
            <input
              type="radio"
              name="correcta_vf"
              value="verdadero"
              checked={correcta === "verdadero"}
              onChange={(e) => setCorrecta(e.target.value)}
              required
            />
            Verdadero
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="correcta_vf"
              value="falso"
              checked={correcta === "falso"}
              onChange={(e) => setCorrecta(e.target.value)}
              required
            />
            Falso
          </label>
        </div>

        <button type="submit">Guardar Pregunta</button>
      </form>
    </div>
  );
}
