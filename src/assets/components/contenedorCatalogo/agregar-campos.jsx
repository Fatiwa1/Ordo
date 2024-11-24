import { useState } from "react";

function AgregarCampo() {
  const [informacionTema, setInformacionTema] = useState({
    campo: "",
    nivelConocimiento: "basico",
    tiempoSemana: "",
    diasEstudio: [],
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setInformacionTema((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setInformacionTema((prevState) => ({
      ...prevState,
      diasEstudio: checked
        ? [...prevState.diasEstudio, value]
        : prevState.diasEstudio.filter((dia) => dia !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Información del Tema:", informacionTema);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-96 m-auto text-white space-y-5 text-xl"
      >
        <div>
          <label htmlFor="campo">¿Qué campo quieres estudiar?</label>
          <input
            className="text-black w-full"
            type="text"
            id="campo"
            value={informacionTema.campo}
            onChange={handleInputChange}
            placeholder="Escribe el campo..."
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="nivelConocimiento">
            ¿Qué conocimiento tienes del campo?
          </label>
          <select
            className="text-black"
            id="nivelConocimiento"
            value={informacionTema.nivelConocimiento}
            onChange={handleInputChange}
          >
            <option value="basico">Básico</option>
            <option value="intermedio">Intermedio</option>
            <option value="avanzado">Avanzado</option>
          </select>
        </div>

        <div>
          <label htmlFor="tiempoSemana">
            ¿Cuánto tiempo semanal le dedicarías?
          </label>
          <input
            className="text-black w-full"
            type="number"
            id="tiempoSemana"
            value={informacionTema.tiempoSemana}
            onChange={handleInputChange}
            placeholder="Escribe el tiempo..."
          />
        </div>

        <div>
          <label>¿Qué días a la semana vas a estudiar?</label>
          <div className="flex flex-wrap gap-4">
            {["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"].map(
              (dia) => (
                <label key={dia} className="flex items-center">
                  <input
                    type="checkbox"
                    value={dia}
                    checked={informacionTema.diasEstudio.includes(dia)}
                    onChange={handleCheckboxChange}
                  />{" "}
                  {dia.charAt(0).toUpperCase() + dia.slice(1)}
                </label>
              )
            )}
          </div>
        </div>

        <button className="bg-black w-max p-2 rounded-lg mt-4" type="submit">
          Agregar
        </button>
      </form>
    </div>
  );
}

export default AgregarCampo;
