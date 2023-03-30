import fs from 'fs';
import http from 'http';
import url from 'url';

const port = 3000;
const server = http.createServer((req, res) => {
    fs.readFile("mensagem.html", function (err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
    })
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}!`);
})