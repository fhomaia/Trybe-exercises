const cadastro = (nome) => ({
    nome: nome,
    email: `${nome}@trybe.com`,
})

const newEmployees = (cadastro) => {
  const employees = {
    id1: cadastro('Pedro Guerra'),// Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: cadastro('Luiza Drumond'),// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: cadastro('Carla Paiva'),// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};

//2

const checknumber = (number,luckynumber) => (number === luckynumber)


const prizenumbers = (number,callback) => {
  const luckynumber = Math.ceil(Math.random()*5);
  console.log(luckynumber)
  console.log(number)
  console.log(callback(number,luckynumber))
  return callback(number,luckynumber) ? "Parabéns você ganhou" : "Tente novamente";
}

console.log(prizenumbers(2,checknumber))

//3

const checkAnswer2 = (correctAnswer) => (userAnswer) => correctAnswer.toLowerCase() === userAnswer.toLowerCase();

//4

const countRight = (correctAnswer) => (userAnswer) => {
  let count = 0
  for (let key = 0; key < correctAnswer.length; key += 1) {
    switch (userAnswer[key]) {
      case ('N.A'):
        count += 0;
        break;
      case (correctAnswer[key]):
        count += 1;
        break;
      default:
        count -= 0.5;
    }
  }
  return count
}

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
console.log(countRight(rightAnswers)(studentAnswers))