const fs = require('fs');
const util = require('util');

const writeFile = util.promisify(fs.writeFile)

fs.writeFile('./textFile.txt', 'Meu textão', (err) => {
  if (err) throw err
  console.log('Arquivo Salvo');
})


const text = 'Texto teste 3'

function writingFiles() {
  writeFile('./textFile.txts', text, { flag: 'wx' })
    .then(console.log(text))
    .catch(err => console.error(err))
}

writingFiles();