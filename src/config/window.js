const path = require('path');

const { app, BrowserWindow } = require('electron');

module.exports = function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 400,
        show: false,
        webPreferences: {
            nodeIntegration: false,
            preload: path.join(__dirname, 'preload.js')
        }
    });

    win.webContents.openDevTools({ mode: 'detach' });

    win.loadFile(path.join(__dirname, '../../dist/config.html'));

    win.once('ready-to-show', () => {
        win.show();
    });
}