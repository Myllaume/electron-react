const path = require('path');

const { app } = require('electron');

const webpackExecute = require('./utils/webpackExecute')
    , webpackServe = require('./utils/webpackServe')
    , launchController = require('./controller')
    , openWindowMain = require('./src/main/window');

Promise.all([webpackServe(), app.whenReady()])
    .then(([webpackServeControl, _]) => {
        launchController();
        openWindowMain();
    })
    .catch((err) => {
        console.error(err);
        app.quit();
    })

app.on('window-all-closed', () => {
    app.quit();
})

// app.on('before-quit', (e) => {
//     e.preventDefault();

//     dialog.showMessageBox(
//         'Enregistrement en cours',
//         "Vos données sont en cours d'enregistrement"
//     );

//     saveDatabase()
//         .catch((err) => {
//             dialog.showErrorBox("Erreur d'enregistrement", err);
//         })
// })