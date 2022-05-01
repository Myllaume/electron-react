const path = require('path');

const { app, dialog } = require('electron')
    , initSqlJs = require('sql.js');

const webpackExecute = require('./utils/webpackExecute')
    , launchController = require('./controller')
    , openWindow = require('./window');

const { getSqlLiteFile: getDatabase, save: saveDatabase } = require('./utils/database');

Promise.all([webpackExecute(), app.whenReady(), initSqlJs()])
    .then(([webpackInfos, _, SQL]) => {
        
        getDatabase(SQL)
            .then((db) => {
                launchController(db);
                openWindow();
            })
            .catch((err) => console.log(err))
    })
    .catch((err) => app.quit())

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