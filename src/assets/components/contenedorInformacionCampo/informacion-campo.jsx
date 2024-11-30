import React from 'react';
import { useState } from 'react';
import TareasCampo from './tareas-campo';
import ObjetivosCampo from './objetivos-campo';
import MetricasCampo from './metricas-campo';

function InformacionCampo({ planEstudio }) {

    const [contenidoCampo, setContenidoCampo] = useState("tareas")

    const handleContenidoClick = (e) => {
        setContenidoCampo(e.target.value)
    }
    return (
        <article className='flex flex-col items-center justify-center text-white ' >
            <h2 className='text-2xl text-white'>Física</h2>
            <div className='flex flex-row gap-4 text-xl text-white bg-black rounded-lg'>
                
                <button className={`${contenidoCampo === "tareas" && "bg-white text-black rounded-lg"} p-2`} onClick={handleContenidoClick} value="tareas">Tareas</button>
                <button className={`${contenidoCampo === "objetivos" && "bg-white text-black rounded-lg"} p-2`} onClick={handleContenidoClick} value="objetivos">Objetivos</button>
                <button className={`${contenidoCampo === "metricas" && "bg-white text-black rounded-lg"} p-2`} onClick={handleContenidoClick} value="metricas">Metricas</button>
            </div>
            <div className='flex flex-col items-center justify-center'>
                {contenidoCampo === "tareas" && <TareasCampo />}
                {contenidoCampo === "objetivos" && <ObjetivosCampo />}
                {contenidoCampo === "metricas" && <MetricasCampo />}
            </div>
        </article>
    );
}

export default InformacionCampo;
