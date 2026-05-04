import { useState } from "react";
import "../App.css";

export default function VerdaderoFalsoForm() {
  const [pregunta, setPregunta] = useState("");
  const [correcta, setCorrecta] = useState(null); // 'verdadero' o 'falso'

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaPregunta = {
      pregunta,
      type: "verdadero_falso",
      correcta: correcta === "verdadero" ? "Verdadero" : "Falso",
    };

    fetch("http://localhost:3000/questions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevaPregunta),
    })
      .then((res) => res.json())
      .then(() => {
        alert("¡Pregunta de verdadero o falso guardada exitosamente!");
        setPregunta("");
        setCorrecta(null);
      })
      .catch((err) => console.error("Error guardando pregunta:", err));
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
