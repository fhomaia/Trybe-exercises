const readline = require('readline-sync')

const peso = readline.questionInt('Qual seu peso? ');
const altura = readline.questionFloat('Qual sua altura? ')

function calculateIMC(peso, altura) {
  return  peso / (altura ** 2)
}

const IMC = calculateIMC(peso, altura).toFixed(2);
// const IMC = (peso / Math.pow(altura / 100, 2)).toFixed(2);

function imcStatus(imc) {
  if ( imc >= 40.0) {
    return "Obesidade graus III e IV"
  }
  if (imc > 35.0) {
    return 'Obesidade grau II'
  }
  if ( imc > 30.0) {
    return 'Obesidade grau I'
  }
  if ( imc > 25.0) {
    return 'Acima do peso'
  }
  if ( imc > 18.5) {
    return 'Peso Normal'
  }
  return 'Abaixo do peso'
}

const status = imcStatus(IMC);

console.log(`Seu IMC é ${IMC}. ${status}`);
