// Problema 1

function palindromo (palavra) {
    let palavrainversa = []
    for (letra = 0; letra < palavra.length; letra++){
    palavrainversa = palavra[letra] + palavrainversa;
    }
    if (palavra == palavrainversa){
        return true
    } else {
        return false
    }
}
console.log(palindromo("raposa"))

//  Problema 2

function maiorvalor (array) {
    let maior = array[1]
    for (let index = 0; index < array.length ; index++){
        if (maior < array[index]) {
            maior = array[index]
        }
    }
    return maior
}

console.log(maiorvalor([1,2,3,6,8,4,9,0]))

//  Problema 3

function menorValor (array) {
    let menor = array[1]
    for (let index = 0; index < array.length ; index++){
        if (menor > array[index]) {
            menor = array[index]
        }
    }
    return menor
}

console.log(menorValor([1,2,3,6,8,4,9,0]))

//  Problema 4

function maiorPalavra (palavra){
    let maior = palavra[1]
    for (let index = 0; index < palavra.length ; index++){
        if ( maior.length < palavra[index].length){
            maior = palavra[index]
        }
    }    
    return maior
}

console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']))

//  Problema 5

function repete (numero){
    let repetidor = []
    let contador = 0
    let maiorRepeticao = 0
    for (let index = 0; index < numero.length ; index++){
        for (let index2 = 0; index2 < numero.length ; index2++){
            if (numero[index]== numero[index2]){
                contador++
            }
        }
        if (contador > maiorRepeticao){
            maiorRepeticao = contador
            repetidor = numero[index]
        }
        contador = 0
    }
    return repetidor
} 
console.log(repete([2, 3, 2, 5, 8, 2, 3]))

//  Problema 6

function somatorio (n){
    let soma = 0
    for (numero = 1; numero <= 5; numero++){
        soma = soma + numero
    }
    return soma
}
console.log (somatorio(5))

//  Problema 7

function finalIgual (word,endingword){
    let final = []
    for(index = word.length -1; index > endingword.length; index--){
        final = word[index] + final
    }
    if (final == endingword){
        return true
    } else {
        return false
    }
}
console.log(finalIgual("joaofernando", "fernan"))
