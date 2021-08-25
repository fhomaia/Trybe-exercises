const readline = require('readline-sync');

const targetScript = readline.question('Qual script deve ser executado ? ');

require(`./${targetScript}.js`)