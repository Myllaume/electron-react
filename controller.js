const { app, ipcMain } = require('electron');
const { save } = require('./utils/database');

module.exports = function (db) {
    ipcMain.on("get-messages", (event) => {
        const [res] = db.exec("SELECT * FROM Messages");
        event.returnValue = res.values;
    });
    
    ipcMain.on("add-message", (event, message) => {
        const cmd = db.prepare("INSERT INTO Messages (content) VALUES (:message)");
        const res = cmd.getAsObject({
            ':message': message
        })

        save(db)
            .then(() => event.returnValue = true)
            .catch(() => event.returnValue = false)
        cmd.free();
    });
}