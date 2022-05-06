const {
    contextBridge,
    ipcRenderer
} = require('electron');

window.addEventListener("DOMContentLoaded", () => {
    
});

contextBridge.exposeInMainWorld('api',
    {
        getMessage: () => ipcRenderer.sendSync('get-message'),
        openOtherWindow: () => ipcRenderer.sendSync('open-other-window')
    }
);
