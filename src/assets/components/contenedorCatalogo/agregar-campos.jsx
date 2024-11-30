import React, { useState } from 'react';
import axios from 'axios';
import InformacionCampo from '../contenedorInformacionCampo/informacion-campo';

function AgregarCampo() {
    const [informacionTema, setInformacionTema] = useState({
        campo: "",
        nivelConocimiento: "sinConocimiento",
        tiempoSemana: "",
        tipoTiempo: "horas",
        diasEstudio: [],
    });

    const [planEstudio, setPlanEstudio] = useState(""); // Estado para el plan de estudio
    const [loading, setLoading] = useState(false); // Estado para el indicador de carga

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Mostrar indicador de carga
        try {
            const response = await axios.post('http://localhost:5000/api/chat/custom-prompt', {
                informacionTema,
            });

            setPlanEstudio(response.data); // Guardar el plan de estudio en el estado
        } catch (error) {
            console.error('Error al generar el plan de estudio:', error);
            setPlanEstudio("Ocurrió un error al generar tu plan de estudio. Por favor, intenta nuevamente.");
        } finally {
            setLoading(false); // Ocultar indicador de carga
        }
    };

    return (
        <div className="flex justify-center items-center h-screen">
            <form
                onSubmit={handleSubmit}
                className="flex flex-col w-1/4 m-auto text-white space-y-5 text-xl"
            >
                {/* Formulario aquí */}
                <div>
                    <label className='text-2xl' htmlFor="campo">¿Qué campo quieres estudiar?</label>
                    <select
                    className="style-input"
                    name="campo" 
                    id="campo"
                    value={informacionTema.campo}
                    onChange={handleInputChange}
                    >
                        <option value="fisica">Fisica</option>
                        <option value="Programacion">Programacion</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label className='text-2xl' htmlFor="nivelConocimiento">
                        ¿Qué conocimiento tienes del campo?
                    </label>
                    <select
                        className="style-input"
                        id="nivelConocimiento"
                        value={informacionTema.nivelConocimiento}
                        onChange={handleInputChange}
                    >
                        <option value="sinConocimiento">Sin conocimiento</option>
                        <option value="basico">Básico</option>
                        <option value="intermedio">Intermedio</option>
                        <option value="avanzado">Avanzado</option>
                    </select>
                </div>
                <div>
                    <label className='text-2xl' htmlFor="descripcion">Describe como te gusta estudiar</label>
                    <textarea name="descricion" id="descripcion" placeholder='Como te gusta...' className='w-full style-input mt-1'></textarea>
                </div>
                <div>
                    <label className='text-2xl' htmlFor="tiempoSemana">
                        ¿Cuánto tiempo semanal le dedicarías?
                    </label>
                    <div className='flex flex-row'>
                    <input
                        className="style-input"
                        type="number"
                        id="tiempoSemana"
                        value={informacionTema.tiempoSemana}
                        onChange={handleInputChange}
                        placeholder="Escribe el tiempo..."
                    />
                    <select className='style-input w-max' name="tipoTiempo" id="tipoTiempo" value={informacionTema.tipoTiempo} onChange={handleInputChange}>
                        <option value="horas">Horas</option>
                        <option value="minutos">Minutos</option>
                    </select>
                    </div>
                </div>

                <div>
                    <label className='text-2xl'>¿Qué días a la semana vas a estudiar?</label>
                    <div className="flex flex-wrap gap-4 items-center">
                        {["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"].map(
                            (dia) => (
                                <label key={dia} className="flex items-center flex-row">
                                    {dia.charAt(0).toUpperCase() + dia.slice(1)}
                                    <input
                                    className='w-5'
                                        type="checkbox"
                                        value={dia}
                                        checked={informacionTema.diasEstudio.includes(dia)}
                                        onChange={handleCheckboxChange}
                                    />{" "}
                                </label>
                            )
                        )}
                    </div>
                </div>

                <button className="bg-black w-max p-2 rounded-lg mt-4 m-auto" type="submit" disabled={loading}>
                    {loading ? "Generando..." : "Agregar"}
                </button>
            </form>
        </div>
    );
}

export default AgregarCampo;
