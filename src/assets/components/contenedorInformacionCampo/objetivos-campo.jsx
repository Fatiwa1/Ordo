import { useState } from "react";

function ObjetivosCampo() {
    const [objetivos, setObjetivos] = useState([
        { id: 1, nombre: "Aprender ley de Newton", fechaCreada: "28-11-2024", fechaFinalizacion: "30-11-2024", prioridad: "alta" },
        { id: 2, nombre: "Resolver problemas de cinemática", fechaCreada: "20-11-2024", fechaFinalizacion: "25-11-2024", prioridad: "media" },
        { id: 3, nombre: "Entender movimiento parabólico", fechaCreada: "15-11-2024", fechaFinalizacion: "18-11-2024", prioridad: "baja" },
    ]);

    const [prioridadTabla, setPrioridadTabla] = useState("alta");

    const handlePrioridadChange = (id, nuevaPrioridad) => {
        setObjetivos(objetivos.map(objetivo =>
            objetivo.id === id ? { ...objetivo, prioridad: nuevaPrioridad } : objetivo
        ));
    };

    return (
        <section className="flex flex-col items-center justify-center h-screen  gap-4">
            <h3 className="text-xl">Objetivos</h3>

            {/* Selector para filtrar la tabla */}
            <select
                className="bg-transparent p-2"
                name="prioridadTabla"
                value={prioridadTabla}
                onChange={(e) => setPrioridadTabla(e.target.value)}
            >
                <option className="text-black" value="alta">Alta</option>
                <option className="text-black" value="media">Media</option>
                <option className="text-black" value="baja">Baja</option>
            </select>

            <table className="border-spacing border-spacing-x-4 border-collapse">
                <thead className="text-lg">
                    <tr className="border-t border-black">
                        <th>Nombre</th>
                        <th>Fecha Creada</th>
                        <th>Fecha Finalización</th>
                        <th>Prioridad</th>
                    </tr>
                </thead>
                <tbody>
                    {objetivos
                        .filter(objetivo => objetivo.prioridad === prioridadTabla)
                        .map(objetivo => (
                            <tr key={objetivo.id} className="border-b border-t border-black">
                                <td>{objetivo.nombre}</td>
                                <td>{objetivo.fechaCreada}</td>
                                <td>{objetivo.fechaFinalizacion}</td>
                                <td>
                                    {/* Selector para cambiar la prioridad de un objetivo */}
                                    <select
                                        className="bg-transparent p-1"
                                        value={objetivo.prioridad}
                                        onChange={(e) => handlePrioridadChange(objetivo.id, e.target.value)}
                                    >
                                        <option className="text-black" value="alta">Alta</option>
                                        <option className="text-black" value="media">Media</option>
                                        <option className="text-black" value="baja">Baja</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </section>
    );
}

export default ObjetivosCampo;
