// // Problema Bônus 1

function converteRomanos (num) {
    let romanos = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000,
    }
    let soma = 0;
    for (index = 0; index < num.length; index++){
        if (romanos[num[index]] < romanos[num[index + 1]]){
            soma = soma - romanos[num[index]]
        } else {
            soma = soma + romanos[num[index]]
        }
    }
    return soma
}
console.log( converteRomanos("DLIX"))


// Problema Bônus 2

function add(num1, num2) {
    const arrNum1 = num1.toString().split("").reverse();
    const arrNum2 = num2.toString().split("").reverse();
    let total = []
    let soma = 0
    if (num1 >= num2){
        for (index = 0; index < arrNum1.length ; index++){
            if (arrNum2[index]){
                soma = parseInt(arrNum1[index]) + parseInt(arrNum2[index]);
                total = soma + total;
            } else {
                total = parseInt(arrNum1[index]) + total;
            }
        soma = 0
        }
    } else {
        for (index = 0 ; index < arrNum2.length ; index++){
            if (arrNum1[index]){
                soma = parseInt(arrNum1[index]) + parseInt(arrNum2[index]);
                total = soma + total;
            } else {
                total = parseInt(arrNum2[index]) + total;
            }

        }
        soma = 0
    }    
    return total;
}

console.log(add(185,139))

    
// let num1 = 59
// let num2 = 21
// const arrNum1 = num1.toString().split("").reverse();
// const arrNum2 = num2.toString().split("").reverse();
// let total = []
// let soma = []

// for (index = 0; index < arrNum1.length ; index++){
// soma = parseInt(arrNum1[index]) + parseInt(arrNum2[index])
//                 total = soma + total;
//                 soma = []
// }                
// console.log(total)