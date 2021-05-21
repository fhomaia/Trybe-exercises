// Crie uma função que gere um número aleatório entre 0 e 100. 
// Você irá criar também os testes para essa função. 
// Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, 
// qual seu retorno e quantas vezes foi chamada.

function generateNumber() {
    return Math.random()*100
};

test ('Testa se generateNumber foi chamada', () => {
    generateNumber = jest.fn().mockReturnValue(10)
    generateNumber()
    expect(generateNumber).toHaveBeenCalled()
})

//Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, 
//que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. 
//Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

test('Testa se generateNumber divide dois numeros passados como parametros', () => {
    generateNumber = jest.fn().mockImplementation((a, b) => a / b)
    expect(generateNumber(4, 2)).toEqual(2);
})


//Ainda com a mesma função do primeiro exercício, utilizando o mock,
//crie uma nova implementação que receba três parâmetros e retorne sua multiplicação. 
//Após fazer os devidos testes para ela, resete sua implementação e crie uma nova, 
//que receba um parâmetro e retorne seu dobro. Faça os testes necessários.

test('Testa se generateNumber multiplica tres numeros passados como parametros', () => {
    generateNumber.mockReset();
    generateNumber = jest.fn().mockImplementation((a, b, c) => { return a * b * c})
    expect(generateNumber(4, 2, 3)).toEqual(24);
})

test('Testa se generateNumber multiplica tres numeros passados como parametros', () => {
    generateNumber.mockReset();
    generateNumber = jest.fn().mockImplementation(a => { return 2 * a })
    expect(generateNumber(4)).toEqual(8);
})

//Dentro de um mesmo arquivo, crie três funções. A primeira deve receber uma string e retorná-la 
//em caixa alta. A segunda deve também receber uma string e retornar só a primeira letra. 
//A terceira deve receber duas strings e concatená-las. Faça o mock do arquivo. 
//Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string 
//em caixa baixa. Para a segunda função, uma nova implementação deve retornar a última letra 
//de uma string. A terceira deve receber três strings e concatená-las.

// describe('Testa as funções do arquivo 1.4', () => {
//     const { stringToUpperCase, firstLetter, concatStrings } = require('./exercicio1.4');
//     jest.mock('./exercicio1.4');

//     it('Testa se a primeira função retorna a string em caixa baixa', () => {
//         expect.assertions(1)
//         stringToUpperCase.mockImplementation((string) => string.toLowerCase());
//         expect(stringToUpperCase('CaVaLo')).toEqual('cavalo');
//     });
//     it('Testa se a segunda função função retorna a última letra da string', () => {
//         expect.assertions(1)
//         firstLetter.mockImplementation((string) => string[string.length - 1]);
//         expect(firstLetter('CaVaLo')).toEqual('o');
//     });
//     it('Testa se a terceira função  recebe três strings e as concatena', () => {
//         expect.assertions(1)
//         concatStrings.mockImplementation((string1, string2, string3) => string1 + string2 + string3);
//         expect(concatStrings('primeira', 'Segunda', 'Terceira')).toEqual('primeiraSegundaTerceira');
//     });
// })

//Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira 
//função. Após repetir a implementação, restaure a implementação original e crie os testes 
//necessários para validar.

// const service = require("./exercicio1.4");
// describe("testando implementações", () => {
//   test("mockando função para receber um parâmetro e retornar em caixa baixa", () => {
//     const first = jest
//       .spyOn(service, "stringToUpperCase")
//       .mockImplementation(a => a.toLowerCase());

//     expect(first("UPPERCASE")).toBe("uppercase");
//     expect(first).toHaveBeenCalled();
//     expect(first).toHaveBeenCalledTimes(1);
//     expect(first).toHaveBeenCalledWith("UPPERCASE");

//     service.stringToUpperCase.mockRestore();

//     expect(service.stringToUpperCase("lowercase")).toBe("LOWERCASE");
//   });
// });

//Crie uma função que faça requisição para a api dog pictures . Mocke a requisição e crie 
//dois testes. O primeiro deve interpretar que a requisição se resolveu e teve como valor 
//"request sucess". O segundo deve interpretar que a requisição falhou e ter como valor 
//"request failed". Crie todos os testes que achar necessário.

const api = require("./exercicio1.4")

describe('Testar mocke da função fetchDogs', () => {
  const mockFetchDog = jest.spyOn(api, 'fetchDogs')
  
  it('Testa se a resolução da função retorna request sucess ',() => {
    expect.assertions(1)
    mockFetchDog.mockResolvedValue('request sucess')
    expect(api.fetchDogs()).resolves.toEqual('request sucess');
  });
  it('Testa se a resolução da função retorna request failed ',() => {
    expect.assertions(1)
    mockFetchDog.mockRejectedValue('request failed')
    expect(api.fetchDogs()).rejects.toEqual('request failed');
  });  
})