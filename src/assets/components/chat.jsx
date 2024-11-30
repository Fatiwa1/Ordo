import React, { useState } from 'react';
import axios from 'axios';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    const handleSend = async () => {
        if (!input) return;

        const userMessage = { role: 'user', content: input };
        setMessages([...messages, userMessage]);

        try {
            const response = await axios.post('http://localhost:5000/api/chat', { prompt: input });
            const botMessage = { role: 'assistant', content: response.data.choices[0].message.content };
            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error('Error al enviar mensaje:', error);
        }

        setInput('');
    };

    return (
        <div>
            <div>
                {messages.map((msg, idx) => (
                    <div key={idx} className={msg.role === 'user' ? 'user' : 'assistant'}>
                        {msg.content}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Escribe tu mensaje..."
            />
            <button onClick={handleSend}>Enviar</button>
        </div>
    );
};

export default Chat;
