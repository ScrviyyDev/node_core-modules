const path = require('path');

// Path Absoluto
console.log(path.resolve("teste.txt"));

// Formar Path
const midFolder = "relatorios";
const fileName = "scrviy.txt";

const finalPath = path.join("/", "arquivos", midFolder, fileName);

console.log(finalPath);
console.log();