import { useState } from 'react';

function TareasCampo() {
    const [tareas, setTareas] = useState([
        { id: 1, nombre: "Estudiar primera ley de Newton", fechaCreada: "28-11-2024", fechaFinalizacion: "30-11-2024", estado: "esperando" },
        { id: 2, nombre: "Resolver ejercicios de dinámica", fechaCreada: "25-11-2024", fechaFinalizacion: "27-11-2024", estado: "en progreso" },
        { id: 3, nombre: "Leer sobre la tercera ley de Newton", fechaCreada: "20-11-2024", fechaFinalizacion: "22-11-2024", estado: "completado" },
    ]);

    const [estadoTabla, setEstadoTabla] = useState("esperando");

    const handleEstadoChange = (id, nuevoEstado) => {
        setTareas(tareas.map(tarea =>
            tarea.id === id ? { ...tarea, estado: nuevoEstado } : tarea
        ));
    };

    return (
        <section className="flex flex-col items-center justify-center h-screen gap-4">
            <h3 className="text-xl">Tareas</h3>

            {/* Selector para filtrar el estado de la tabla */}
            <select
                className="bg-transparent p-2"
                name="estadoTabla"
                value={estadoTabla}
                onChange={(e) => setEstadoTabla(e.target.value)}
            >
                <option className="text-black" value="esperando">Esperando</option>
                <option className="text-black" value="en progreso">En progreso</option>
                <option className="text-black" value="completado">Completado</option>
            </select>

            <table className="border-spacing border-spacing-x-4 border-collapse">
                <thead className="text-lg">
                    <tr className="border-t border-black">
                        <th>Nombre</th>
                        <th>Fecha Creada</th>
                        <th>Fecha Finalización</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {tareas
                        .filter(tarea => tarea.estado === estadoTabla)
                        .map(tarea => (
                            <tr key={tarea.id} className="border-b border-t border-black">
                                <td>{tarea.nombre}</td>
                                <td>{tarea.fechaCreada}</td>
                                <td>{tarea.fechaFinalizacion}</td>
                                <td>
                                    {/* Selector para cambiar el estado de la tarea */}
                                    <select
                                        className="bg-transparent  p-1"
                                        value={tarea.estado}
                                        onChange={(e) => handleEstadoChange(tarea.id, e.target.value)}
                                    >
                                        <option className="text-black" value="esperando">Esperando</option>
                                        <option className="text-black" value="en progreso">En progreso</option>
                                        <option className="text-black" value="completado">Completado</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </section>
    );
}

export default TareasCampo;
