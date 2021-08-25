const readline = require('readline-sync');

let repeat = true;

while (repeat === true) {
const chosenNumber = readline.questionInt('Escolha um numero inteiro de 0 a 10: ');
const randomNumber = Math.round(Math.random() * 10);

  if (chosenNumber === randomNumber) {
    console.log(`Parabens, voce acertou! O numero sorteado foi ${randomNumber}`);
  }
  else {
    console.log(`Nao foi desta vez. O numero sorteado foi ${randomNumber}`);
  }
  const shouldContinue = readline.question('Deseja jogar novamente ? (s/n) ')
  if (shouldContinue === 'n') {
    repeat = false
  }
}
  

