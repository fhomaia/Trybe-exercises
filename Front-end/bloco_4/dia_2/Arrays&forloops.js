let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


let somaNumbers = 0;

for (let index =0; index < numbers.length; index += 1){
    console.log(numbers[index]); //Problema 1 
    somaNumbers = somaNumbers + numbers[index]; //Problema 2 
}

console.log("----------------");
console.log("O total da soma é " + somaNumbers);

//Problema 3 

let mediaAritmetica = somaNumbers / numbers.length;

console.log(`A média artitmética é ${mediaAritmetica}`);

//Problema 4

if (mediaAritmetica > 20){
    console.log("Valor de média maior que 20");
} else {
    console.log("Valor de média menor ou igual a 20");
}

//Problema 5

let maior = 0;
for (let i = 0; i < numbers.length; i++) {
    if ( numbers[i] > maior ) {
       maior = numbers[i];
    }
 }
console.log("----------------");
console.log ("O maior número do array é " + maior);

//Problema 6

let numerosImpares = [];
for (let indeximpar = 0; indeximpar < numbers.length; indeximpar++) {
   if ( numbers[indeximpar]%2 != 0 ) {
      numerosImpares.push(numbers[indeximpar]);
   }
}
console.log("----------------");
console.log ("Os números impares do array são " + numerosImpares);

//Problema 7

let menor = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if ( numbers[i] < menor ) {
       menor = numbers[i];
    }
 }

 console.log("----------------");
console.log ("O menor número do array é " + menor);

//Problema 8

let ate25 = [];
for (let indexNumero = 1;indexNumero <= 25 ; indexNumero++){
    ate25.push(indexNumero);
}

console.log(ate25);

//Problema 9
let divididoPor2 = [];
for (let index9 = 0;index9 < ate25.length; index9++){
    divididoPor2.push(ate25[index9]/2 );
}

console.log(divididoPor2);

//Problema Bônus 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for ( let j = 1; j < numbers.length ; j++){
    for ( let i = 0; i < j; i++){
        if (numbers[j] < numbers[i]){
            let aux = numbers[j]
            numbers[j] = numbers[i]
            numbers[i] = aux
        }
    }
}
console.log(numbers)

//Problema Bônus 2

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for ( let j = 1; j < numbers.length ; j++){
    for ( let i = 0; i < j; i++){
        if (numbers[j] > numbers[i]){
            let aux = numbers[j]
            numbers[j] = numbers[i]
            numbers[i] = aux
        }
    }
}
console.log(numbers)

//Problema Bônus 3
let bonus =[]
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for ( let j = 1; j < numbers.length ; j++){
    for ( let i = j - 1; i < j; i++){
        bonus.push(numbers[i]*numbers[j])
    }
}
bonus.push(numbers[numbers.length -1]*2)
console.log(bonus)