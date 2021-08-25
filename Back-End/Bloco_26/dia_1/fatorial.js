const readline = require('readline-sync');

const number = readline.questionInt('Deseja saber o fatorial de qual número ? ');
let fatorial = 1

if ( number > 0) {
  for ( let index  = 1; index <= number; index += 1) {
    fatorial *= index 
  }
  return console.log(`O fatorial de ${number} é ${fatorial}`)
}

return console.log('Numero invalido')

