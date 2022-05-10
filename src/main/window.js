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
        height: 600,
        show: false,
        backgroundColor: '#fefefe',
        webPreferences: {
            nodeIntegration: false,
            preload: path.join(__dirname, 'preload.js')
        }
    });

    window.webContents.openDevTools({ mode: 'detach' });

    if (app.isPackaged === true) {
        window.loadFile(path.join(__dirname, '../../dist/main.html'));
    } else {
        window.loadURL(`http://localhost:${devServer.port}/main.html`);
    }

    window.once('ready-to-show', () => {
        window.show();
    });

    window.once('closed', () => {
        window = undefined;
    });
}