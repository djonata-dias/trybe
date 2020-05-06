const assert = require('assert');
// escreva a função wordLengths para passar nos testes abaixo:
    function wordLengths(word) {
        const array = [];
        for (let i = 0; i < word.length; i++ ) {
            array.push(word[i].length)
        }
        return array
    }
//
const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepEqual(output, expected);
