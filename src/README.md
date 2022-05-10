---
title:
---

Chaque répertoire correspond à une fenêtre de l'application. Il contient systématiquement les fichiers suivants :

- `./window/preload.js` : Interface de contrôle de la fenêtre
- `./window/render.js` : Rendu des composants React pour intégration des éléments de la page
- `./window/components/App.js` : Composant racine
- `./window/windows.js` : Ouverture de la fenêtre et gestion des évènements

Plus d'informations :

- https://www.electronjs.org/docs/latest/tutorial/context-isolation
- https://www.electronjs.org/docs/latest/tutorial/ipc

# Templates

## Window

```javascript
const path = require('path');

const { app, BrowserWindow } = require('electron');
const { devServer } = require('../../webpack.config');

let window;

module.exports = function createWindow () {
    if (window !== undefined) {
        window.focus();
        return;
    }

    window = new BrowserWindow({
        width: 800,
        height: 400,
        show: false,
        backgroundColor: '#fefefe',
        webPreferences: {
            nodeIntegration: false,
            preload: path.join(__dirname, 'preload.js')
        }
    });

    window.webContents.openDevTools({ mode: 'detach' });

    if (app.isPackaged === true) {
        window.loadFile(path.join(__dirname, '../../dist/<window_name>.html'));
    } else {
        window.loadURL(`http://localhost:${devServer.port}/<window_name>.html`);
    }

    window.once('ready-to-show', () => {
        window.show();
    });

    window.once('closed', () => {
        window = undefined;
    });
}
```

## Preload

```javascript
const {
    contextBridge,
    ipcRenderer
} = require('electron');

window.addEventListener("DOMContentLoaded", () => {
    // DOM access
});

contextBridge.exposeInMainWorld('api',
    {
        getMessage: () => ipcRenderer.sendSync('get-message')
    }
);
```