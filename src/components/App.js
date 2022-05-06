import React, { useMemo } from 'react';

export default function App ({
    ...props
}) {
    const message = useMemo(() => {
        return window.api.getMessage();
    }, []);

    return (
        <main>
            <h1>Bienvenue sur Naute !</h1>
            <p>{message}</p>
        </main>
    )
}