const { error } = require('console');
const fs = require('fs');

const textFile = 'textFile.txt';

fs.readFile(textFile, 'utf8', (err, data) => {
    if (err) {
        console.error(`Não foi possível ler o arquivo ${textFile}\n Erro: ${err}`);
        process.exit(1);
    }
    setTimeout(() => { }, 5000);
    console.log(`Conteúdo do arquivo atrasado: ${data}`);
})

fs.readFile(textFile, 'utf8', (err, data) => {
    if (err) {
        console.error(`Não foi possível ler o arquivo ${textFile}\n Erro: ${err}`);
        process.exit(1);
    }
    console.log(`Conteúdo do arquivo: ${data}`);
})

fs.readFile('./textFile.txt', (err, content) => {
    if (err) {
        console.error(`Erro ao ler o arquivo: ${err.message}`);
        return;
    }

    console.log(`Arquivo lido com sucesso. Conteúdo: ${content.toString('utf8')}`);
})