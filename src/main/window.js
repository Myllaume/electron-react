const path = require('path');

const { app, BrowserWindow } = require('electron');

let window;

module.exports = function createWindow () {
    if (window !== undefined) {
        window.focus();
        return;
    }

    window = new BrowserWindow({
        width: 800,
        height: 600,
        show: false,
        backgroundColor: '#fefefe',
        webPreferences: {
            nodeIntegration: false,
            preload: path.join(__dirname, 'preload.js')
        }
    });

    window.webContents.openDevTools({ mode: 'detach' });

    window.loadFile(path.join(__dirname, '../../dist/main.html'));

    window.once('ready-to-show', () => {
        window.show();
    });

    window.once('closed', () => {
        window = undefined;
    });
}