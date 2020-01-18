const fs = require('fs-extra');
const path = require('path')
var appDir = path.dirname(require.main.filename);

exports.createProject = async function (projectName) {
    await fs.mkdir(projectName,  err => {
        if (err) throw err;
    });
    await fs.mkdir(`${projectName}/src`, err => {
        if (err) throw err;
    });
    await fs.createReadStream(path.join(appDir, '/lib/package.json')).pipe(fs.createWriteStream(`${projectName}/package.json`));
    await fs.createReadStream(path.join(appDir, '/lib/webpack.config.js')).pipe(fs.createWriteStream(`${projectName}/webpack.config.js`));
    await fs.createReadStream(path.join(appDir, '/lib/index.html')).pipe(fs.createWriteStream(`${projectName}/src/index.html`));
    await fs.copyFile(path.join(appDir, '/lib/index.html'), `${projectName}/src/index.html`, (err) => {
        if (err) throw err;
    });
    await fs.createReadStream(path.join(appDir, '/lib/index.jsx')).pipe(fs.createWriteStream(`${projectName}/src/index.jsx`));
    await fs.mkdir(`${projectName}/src/component`, { recursive: true },  err => {
        if (err) throw err;
    });
    await fs.copy(path.join(appDir, '/lib/home'), `${projectName}/src/component/home`)
    await fs.copy(path.join(appDir, '/lib/gui'), `${projectName}/src/component/gui`)
    await fs.mkdir(`${projectName}/src/container`, { recursive: true },  err => {
        if (err) throw err;
    });
    await fs.mkdir(`${projectName}/src/lib`, { recursive: true },  err => {
        if (err) throw err;
    });
    await fs.mkdir(`${projectName}/src/css`, { recursive: true },  err => {
        if (err) throw err;
    });
    await fs.mkdir(`${projectName}/src/reducer`,  err => {
        if (err) throw err;
    });
    await fs.createReadStream(path.join(appDir, '/lib/index.js')).pipe(fs.createWriteStream(`${projectName}/src/reducer/index.js`));
    await fs.mkdir(`${projectName}/static`, err => {
        if (err) throw err;
    });
}
