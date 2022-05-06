const {
    contextBridge,
    ipcRenderer
} = require('electron');

window.addEventListener("DOMContentLoaded", () => {
    
});

contextBridge.exposeInMainWorld('api',
    {
        getMessage: () => ipcRenderer.sendSync('get-message')
    }
);