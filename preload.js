const {
    contextBridge,
    ipcRenderer
} = require('electron');

window.addEventListener("DOMContentLoaded", () => {
    const toto = document.getElementById('version');
    toto.textContent = '0.0.1';
});

contextBridge.exposeInMainWorld('api',
    {
        getMessages: () => ipcRenderer.sendSync('get-messages'),
        addMessage: (message) => ipcRenderer.sendSync('add-message', message)
    }
);