const path = require("path");

const customPath = "/relatorios/scrviy/relatorio1.pdf";

console.log(path.dirname(customPath)); // nome do diretório
console.log(path.basename(customPath)); // nome do arquivo completo
console.log(path.extname(customPath)); // nome da extensão do arquivo
console.log();