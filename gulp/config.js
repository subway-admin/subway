/**
 * Created by Loki.Luo on 2017/3/2.
 */
var VERSION = require('../package.json').version,
    path = require('path'),
    root = 'app',
    output = '';
function resolveToApp(files) {
    return path.join(root, files);
}

function resolveToOut(files) {
    return path.join(output, files);
}

module.exports = {
    banner: '',
    output: 'build',
    debug: 'debug',
    entry: '',
    root: 'app',
    outPaths:{
        skin:resolveToOut('/skin')
    },
    paths: {
        js: resolveToApp('/**/*!(.doc.js).js'),
        componentJs: resolveToApp('/component/**/*!(.doc.js).js'),
        libjs: resolveToApp('/**/js/**/*.*'),
        css:resolveToApp('/**/*.scss'),
        img:resolveToApp('/**/images/*.*'),
        font:resolveToApp('/**/font/*.*'),
        lib:resolveToApp('/**/lib/**/*.*'),
        data:resolveToApp('/**/test-data/**/*'),
        templates:resolveToApp('/**/templates/*.*'),
        html: [
            resolveToApp('/**/*.html')
        ],
        styl: resolveToApp('**/*.styl')
    }
};