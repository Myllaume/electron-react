const { app } = require('electron')
    ,  webpack = require('webpack');

const config = require('../webpack.config');

module.exports = function execute () {
    if (app.isPackaged === true) {
        return true;
    }

    return new Promise((resolve, reject) => {
        webpack(
            config,
            (err, stats) => {
                const info = stats.toJson();
                if (stats.hasErrors()) {
                    reject(info.errors);
                }
        
                if (stats.hasWarnings()) {
                    return console.warn(info.warnings);
                }
        
                resolve(info);
            }
        );
    })
}