const uppercase = (str) => {
    return new Promise ((resolve, reject) => {
        const callback = (str.toUpperCase());
        return resolve(callback)
    })

}

describe('Exercicio 1', () => {
    test('Testando retorno da função uppercase', () => {
        expect.assertions(1);
        return expect(uppercase('exercicio')).resolves.toBe('EXERCICIO')
    })
})


