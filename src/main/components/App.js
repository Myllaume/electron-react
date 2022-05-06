import React from 'react';

import { Outlet, Link } from "react-router-dom";

export default function App ({
    ...props
}) {
    return (
        <div className='App'>
            <header className='Header'>
                <h1>Naute</h1>
                <nav className='Nav'>
                    <ul>
                        <li><Link to='/'>Accueil</Link></li>
                        <li><Link to='list'>Voir la liste</Link></li>
                    </ul>
                </nav>
            </header>
            <main className='Main'>
                <Outlet />
            </main>
        </div>
    )
}