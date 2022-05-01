import React, { useReducer, useEffect } from 'react';

import Message from './Message';
import FormMessage from './FormMessage';

export default function App ({
    ...props
}) {
    const [messages, setMessages] = useReducer(
        (state, {action, payload}) => {
            switch(action) {
                case 'set':
                    return payload;
                default:
                case 'merge':
                    return { ...state, ...payload }
            }
            
        },
        window.api.getMessages()
    );

    return (
        <>
            <h1>Bienvenue sur Naute !</h1>
            <div>La version du logiciel est <span id='version'></span></div>

            <ul>
                {
                    messages.map(([id, message]) => <Message key={id} { ...{ message, id} } />)
                }
            </ul>

            <FormMessage { ...{ setMessages } }/>
        </>
    )
}