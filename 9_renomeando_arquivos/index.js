import fs from 'fs';

const oldFile = "arquivo.txt";
const newFile = "curriculo.docx";

fs.rename(oldFile, newFile, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    
    console.log(`O arquivo ${oldFile} foi renomeado para ${newFile}.`);
})