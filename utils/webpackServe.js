const { app } = require('electron');

const Webpack = require('webpack')
    , WebpackDevServer = require('webpack-dev-server');

const config = require('../webpack.config')
    , compiler = Webpack(config)
    , devServerOptions = config.devServer
    , server = new WebpackDevServer(devServerOptions, compiler);

module.exports = function runServer () {
    if (app.isPackaged === true) {
        return true;
    }

    return new Promise(async (resolve, reject) => {
        await server.start();
        resolve(server);
    })
}