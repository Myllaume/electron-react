const path = require('path');

const packager = require('electron-packager');

const { version, name } = require('../package.json');

(async () => {
    const appPaths = await packager({
        all: true,
        appVersion: version,
        arch: 'x64',
        dir: path.join(__dirname, '../build'),
        executableName: name
    })
    console.log(`Electron app bundles created:\n${appPaths.join("\n")}`)
})();