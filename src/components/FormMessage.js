import React, { useState } from 'react';

export default function FormMessage ({
    setMessages
}) {
    const [input, setInput] = useState('');
    
    function onSubmit (e) {
        e.preventDefault();
        const result = window.api.addMessage(input);

        if (result === true) {
            setMessages({
                action: 'merge',
                payload: [666, input]
            });

            setInput('');
        } else {

        }

        console.log(result);
        
    }

    return (
        <form onSubmit={onSubmit}>
            <textarea
                onChange={(e) => setInput(e.target.value)}
                value={input}
            >
            </textarea>

            <button>Ajouter</button>
        </form>
    )
}