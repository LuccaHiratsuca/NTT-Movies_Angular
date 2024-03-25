const fs = require('fs');
const path = require('path');

function normalizeDirectory(directory) {
    fs.readdirSync(directory).forEach(file => {
        const filePath = path.join(directory, file);
        const newFilePath = path.join(directory, file.toLowerCase());
        if (filePath !== newFilePath) {
            fs.renameSync(filePath, newFilePath);
        }
        if (fs.statSync(newFilePath).isDirectory()) {
            normalizeDirectory(newFilePath);
        }
    });
}

// Adapte o caminho abaixo conforme necessário
normalizeDirectory(path.join(__dirname, 'src'));
