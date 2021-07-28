const path = require('path');

const baseName = () => {
    return path.basename('../testFile.txt');
}

const dirName = () => {
    return path.dirname('../testFile.txt');
}

const extName = () => {
    return path.extname('../testFile.txt');
}

const isAbsolute = () => {
    return path.isAbsolute('../testFile.txt');
}

exports.pathModule = () => {
    return(
        `
        <h1>Path Module</h1>
        <a href="/">Back</a>
        <p>Base name: ${baseName()}</p>
        <p>Directories: ${dirName()}</p>
        <p>Extension: ${extName()}</p>
        <p>Relative Path: ${isAbsolute()}</p>
        `
    );
}