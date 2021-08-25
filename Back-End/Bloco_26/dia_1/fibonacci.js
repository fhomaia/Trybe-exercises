const readline = require('readline-sync');

const number = readline.questionInt('Sequencia fibonacci ate o elemento da posicao: ');
let fibonacci = [1, 1]

if (number === 1) console.log(`Sequencia fibonacci ate o elemento da posicao 1 é 1`);
if (number === 2) console.log(`Sequencia fibonacci ate o elemento da posicao 1 é 1, 1`);

if ( number > 2) {
  for ( let index  = 2; index <= number - 1; index += 1) {
    fibonacci.push( fibonacci[index - 2] + fibonacci[index -1]) 
  }
  return console.log(`Sequencia fibonacci ate o elemento da posicao ${number} é ${fibonacci}`)
}

return console.log('Numero invalido')