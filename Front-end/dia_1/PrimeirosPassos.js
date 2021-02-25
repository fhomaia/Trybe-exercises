let a = 8;
let b = 7;
let c = 5;
console.log(a + b); //Progama 1
console.log(a - b); //Progama 2
console.log(a * b); //Progama 3
console.log(a / b); //Progama 4
console.log(a % b); //Progama 5

//Progama 6
if (a < b){ 
    console.log(b);
} else {
    console.log(a);
}

//Progama 7
let a = 8;
let b = 7;
let c = 14;

if (a > b && a > c){
    console.log(a);
} else if (b > a && b > c) {
    console.log (b);
} else {
    console.log(c);
}

//Progama 8
let d = -5;
if (d > 0){
    console.log("Positivo");
} else if (d < 0) {
    console.log ("Negativo");
} else {
    console.log("Zero");
}

//Progama 9
let anguloA = 80;
let anguloB = 70;
let anguloC = 30;

if (anguloA + anguloB + anguloC == 180){
    console.log(true);
} else {
    console.log (false);
}

//Progama 10

let Peça = "cAValo";
Peça = Peça.toLowerCase();
switch (Peça){
    case "peão":
        console.log("Anda 1 casa à frente exceto para derrubar uma peça adversária, quando deve andar 1 casa na diagonal. No primeiro movimento pode andar 2 casas à frente.")
        break;
    case "torre":
        console.log("Vertical ou horizontal");
        break;
    case "cavalo":
        console.log("Anda 3 casas na horizontal e 1 na vertical ou 3 casas na vertical e 1 na horizontal");
        break;
    case "bispo":
        console.log("Anda em diagonal");
        break;
    case "rainha":
        console.log("Anda em todas as direções");
        break;
    case "rei":
        console.log("Anda 1 casa em todas as direções");
        break;
default:
    console.log("Peça não corresponde")
}
//Progama 11
let nota = -12;
if (nota >= 90 && nota <= 100 ){
    nota = "A"
    console.log(nota);
} else if (nota >=80 && nota <= 100) {
    nota = "B"
    console.log(nota);  
} else if (nota >= 70 && nota <= 100) {
    nota = "C"
    console.log(nota);
} else if (nota >= 60 && nota <= 100) {
    nota = "D"
    console.log(nota);
} else if (nota >= 50 && nota <= 100) {
    nota = "E"
    console.log(nota);
} else if (nota < 50 && nota > 0) {
    nota = "F"
    console.log(nota);
} else {
    console.log("A nota deve estar entre 0 e 100")
}

// Programa 12
let primeiroNumero = 2;
let segundoNumero = 5;
let terceriroNumero = 3;
if ( primeiroNumero % 2 == 0 || segundoNumero % 2 == 0 || terceriroNumero % 2 == 0 ){
    console.log(true);
} else {
    console.log(false);
}

// Programa 13
let primeiroNumero = 2;
let segundoNumero = 6;
let terceriroNumero = 4;
if ( primeiroNumero % 2 != 0 || segundoNumero % 2 != 0 || terceriroNumero % 2 != 0 ){
    console.log(true);
} else {
    console.log(false);
}

// Programa 14
let custo = -1
let venda = 25
let lucro = venda - (custo + custo*0.2)
if (custo >= 0 && venda >= 0){
console.log(lucro);
} else {
    console.log("Insira um valor maior que zero")
}

// Programa 15
let salarioBruto = 3500;
let INSS;

if (salarioBruto > 0 && salarioBruto< 1556.94){
    INSS = salarioBruto*0.08;
} else if (salarioBruto > 0 && salarioBruto < 2594.92){
    INSS = salarioBruto*0.09;
} else if ( salarioBruto > 0 && salarioBruto <= 5189.82){
    INSS = salarioBruto*0.11;
} else if (salarioBruto > 5189.82){
    INSS = 570.88;
} else {
    console.log("Insira um valor de salario superior a zero");
}

let salarioBase = salarioBruto - INSS;
let IR
let salarioLiquido

if (salarioBase > 0 && salarioBruto <= 1903.98){
    IR=0
    salarioLiquido = salarioBase - IR
}else if (salarioBase > 1903.98 && salarioBase< 2826.65){
    IR = salarioBase*0.075;
    salarioLiquido = salarioBase - (IR - 142.80);
} else if (salarioBase > 0 && salarioBase < 3751.05){
    IR = salarioBase*0.15;
    salarioLiquido = salarioBase - (IR - 354.80);
} else if ( salarioBase > 0 && salarioBase <= 4664.68){
    IR = salarioBase*0.225;
    salarioLiquido = salarioBase - (IR - 636.13);
} else if (salarioBase > 4664.68){
    IR = salarioBase*0.275;
    salarioLiquido = salarioBase - (IR - 869.36);
} else {
    console.log("Insira um valor de salario superior a zero");
}
console.log(salarioLiquido - salarioLiquido*0.17);
