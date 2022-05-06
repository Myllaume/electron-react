const { app, ipcMain } = require('electron');

const openOtherWindow = require('./src/config/window');

module.exports = function () {
    ipcMain.on("get-message", (event) => {
        event.returnValue = 'coucou';
    });

    ipcMain.on("open-other-window", (event) => {
        openOtherWindow();
        event.returnValue = true;
    });
}