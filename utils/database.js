const { app } = require('electron')
    , fs = require('fs')
    , path = require('path');

pathToSqlLiteFile = path.join(app.getPath('appData'), 'naute.sqlite');

exports.getSqlLiteFile = function (SQL) {
    return new Promise((resolve, reject) => {
        if (fs.existsSync(pathToSqlLiteFile)) {
            console.info('Let read database');
            fs.readFile(pathToSqlLiteFile, (err, data) => {
                if (err) { reject(err); }
                const db = new SQL.Database(data);
                resolve(db);
            })
        } else {
            console.info('Let create database');
            create(SQL)
                .then(db => resolve(db))
                .catch(err => reject(err))
        }
    })
}

function create (SQL) {
    return new Promise((resolve, reject) => {
        const db = new SQL.Database();

        let sqlstr = `CREATE TABLE Messages (
                id integer primary key autoincrement,
                content char not null
            );
            INSERT INTO Messages VALUES (0, 'hello world!');
            INSERT INTO Messages VALUES (1, 'Bonjour à tous');`;
    
        db.run(sqlstr);
        const data = db.export();
        const buffer = Buffer.from(data);
        fs.writeFile(pathToSqlLiteFile, buffer, 'utf-8', (err) => {
            if (err) { reject(err); }
            resolve(db);
        })
    })
}

exports.save = function (db) {
    return new Promise((resolve, reject) => {
        const data = db.export();
        const buffer = Buffer.from(data);
        fs.writeFile(pathToSqlLiteFile, buffer, 'utf-8', (err) => {
            if (err) { reject(err); }
            resolve(db);
        })
    })
}