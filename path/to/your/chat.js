router.post('/custom-prompt', async (req, res) => {
    const { informacionTema } = req.body;
    if (!informacionTema) {
        return res.status(400).json({ error: 'Falta la información del tema' });
    }
    try {
        const response = await axios.post(
            `https://api.openai.com/v1/assistants/asst_W1WZOw0Z3hcapmBQZy8k4e1n/completions`,
            {
                messages: [
                    {
                        role: 'user',
                        content: `
                            Campo a estudiar: ${informacionTema.campo},
                            Nivel de conocimiento: ${informacionTema.nivelConocimiento},
                            Tiempo semanal: ${informacionTema.tiempoSemana}hs,
                            Días de estudio: ${informacionTema.diasEstudio.join(', ')}
                        `
                    }
                ],
                max_tokens: 500,
            },
            {
                headers: {
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );
        res.json(response.data.choices[0].message.content);
    } catch (error) {
        console.error('Error al comunicarse con OpenAI:', error.response?.data || error.message);
        res.status(500).json({ error: 'Error al comunicarse con el asistente de OpenAI' });
    }
});