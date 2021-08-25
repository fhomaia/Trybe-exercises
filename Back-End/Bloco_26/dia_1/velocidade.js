const readline = require('readline-sync');

const distance = readline.questionInt('Qual a distancia ? ');
const time = readline.questionInt('Qual o tempo ? ');

const avgSpeed = (distance / time).toFixed(2);

console.log(`A velocidade media foi de ${avgSpeed} m/s`)