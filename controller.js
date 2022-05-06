const { app, ipcMain } = require('electron');

module.exports = function () {
    ipcMain.on("get-message", (event) => {
        event.returnValue = 'coucou';
    });
}