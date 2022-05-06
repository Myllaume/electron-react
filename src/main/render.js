import ReactDOM from 'react-dom/client';
import React from 'react';

import { HashRouter, Routes, Route } from "react-router-dom";

import App from './components/App';
import Welcome from './components/Welcome';
import List from './components/List';

import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <HashRouter>
        <Routes>
            <Route path="/" element={<App />} >
                <Route index element={<Welcome />} />
                <Route path='list' element={<List />} />
            </Route>
        </Routes>
    </HashRouter>
);