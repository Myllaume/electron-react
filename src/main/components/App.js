import React, { useMemo } from 'react';

export default function App ({
    ...props
}) {
    const message = useMemo(() => {
        return window.api.getMessage();
    }, []);

    function onClickOpenWindow() {
        window.api.openOtherWindow();
    }

    return (
        <main>
            <h1>Bienvenue sur Naute !</h1>
            <p>{message}</p>
            <button onClick={onClickOpenWindow} >Ouvrir l'autre fenêtre</button>
        </main>
    )
}