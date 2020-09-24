const fs = require('fs');

const textFile = 'textFile.txt';

try {
    const data = fs.readFileSync(textFile, 'utf8');
    console.log(data);
} catch (error) {
    console.error(`Erro ao ler o arquivo ${error.path}`);
    console.log(error);
}