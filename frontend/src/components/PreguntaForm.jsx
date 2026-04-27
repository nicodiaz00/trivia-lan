import { useState } from "react";
import "../App.css";

export default function PreguntaForm() {
  const [pregunta, setPregunta] = useState("");
  const [opciones, setOpciones] = useState(["", "", "", ""]);
  const [correcta, setCorrecta] = useState(null);

  const handleOpcionChange = (index, value) => {
    const nuevasOpciones = [...opciones];
    nuevasOpciones[index] = value;
    setOpciones(nuevasOpciones);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaPregunta = {
      pregunta,
      opciones,
      correcta,
    };
    console.log("Pregunta guardada:", nuevaPregunta);
    // Aquí podrías enviar la pregunta a tu backend o API
  };

  return (
    <div className="form-container">
      <h2>Crear Pregunta de Opción Múltiple</h2>
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

        {opciones.map((opcion, index) => (
          <div key={index}>
            <label>
              Opción {index + 1}:
              <input
                type="text"
                value={opcion}
                onChange={(e) => handleOpcionChange(index, e.target.value)}
                required
              />
            </label>
            <input
              type="radio"
              name="correcta"
              checked={correcta === index}
              onChange={() => setCorrecta(index)}
            />
            Correcta
          </div>
        ))}

        <button type="submit">Guardar Pregunta</button>
      </form>
    </div>
  );
}
