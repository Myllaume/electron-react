const { app } = require('electron')
    , webpack = require('webpack');

let config = require('../webpack.config');
config = { ...config, mode: 'production' }

function execute () {
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

execute();