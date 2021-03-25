const fatorial = (num) => {
  let multiply = num;
  for (let index = 1; index < num; index += 1) {
    multiply = multiply * index;
  }
  return multiply;
}

console.log(fatorial(4));

//

const fatorial2 = (num) => 
  (num > 1)? num * fatorial2(num-1) : 1


console.log(fatorial2(5))

//

const biggerword = (string) => {
  let array = string.split(' ');
  let word = array[0];
  for (let index = 1; index < array.length; index += 1){
    word.length > array[index].length ? word : word = array[index];
  }
  return word;
}
  console.log(biggerword('exemplo de frase infinitamente maior que a primeira'))
