const path = require('path');

const { app, dialog } = require('electron');

const webpackExecute = require('./utils/webpackExecute')
    , launchController = require('./controller')
    , openWindowMain = require('./src/main/window');

Promise.all([webpackExecute(), app.whenReady()])
    .then(([webpackInfos, _]) => {
        launchController();
        openWindowMain();
    })
    .catch((err) => {
        console.error(err);
        app.quit()
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