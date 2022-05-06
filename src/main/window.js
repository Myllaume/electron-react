const path = require('path');

const { app, BrowserWindow } = require('electron');

module.exports = function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        show: false,
        webPreferences: {
            nodeIntegration: false,
            preload: path.join(__dirname, 'preload.js')
        }
    });

    win.webContents.openDevTools();

    win.loadFile(path.join(__dirname, '../../dist/main.html'));

    win.once('ready-to-show', () => {
        win.show();
    });
}