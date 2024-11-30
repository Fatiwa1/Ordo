// src/components/PromptComponent.jsx
import React, { useState } from 'react';

const PromptComponent = () => {
    const [informacionTema, setInformacionTema] = useState({
        campo: 'Física',
        nivelConocimiento: 'Básico',
        tiempoSemana: 7,
        diasEstudio: ['Lunes', 'Martes', 'Viernes', 'Domingo'],
    });

    const [resultados, setResultados] = useState(null);

    const obtenerDatosDesdePrompt = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/chat/custom-prompt', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ informacionTema }),
            });

            if (!response.ok) {
                throw new Error('Error al obtener datos del servidor');
            }

            const data = await response.json();
            setResultados(data); // Aquí está el contenido generado por ChatGPT
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <button onClick={obtenerDatosDesdePrompt}>Obtener Datos</button>
            {resultados && (
                <pre>{JSON.stringify(resultados, null, 2)}</pre> // Aquí puedes formatear el resultado de manera más bonita
            )}
        </div>
    );
};

export default PromptComponent;
