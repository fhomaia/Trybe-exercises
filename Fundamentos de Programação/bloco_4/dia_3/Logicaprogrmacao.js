//Problema 1

let n = 5
let lado = []
    for (let i = 0 ; i < n; i++){
        lado = lado + "*"
    }
    for (let i = 0 ; i < n; i++){
    console.log(lado)
    }

//Problema 2

let n = 5
let lado = []
     for (let i = 0 ; i < n; i++){
         lado = lado + "*"
         console.log(lado)
     }

//Problema 3

let n = 5;
let symbol = '*';
let inputLine = ""

for (let lineIndex = n; lineIndex > 0; lineIndex -= 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < lineIndex) {
      inputLine = inputLine + ' ';
    } else {
      inputLine = inputLine + symbol;
    } 
  }
  console.log(inputLine);
  inputLine = '';
};

//Problema 4


let n = 5;
let lineIndex;
let lineColumn;
let lineInput = '';
let symbol = '*';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight= midOfMatrix;

for (lineIndex = 0; lineIndex <= midOfMatrix; lineIndex += 1) {
  for (lineColumn = 1; lineColumn <= n; lineColumn += 1) {
    if (lineColumn > controlRight && lineColumn < controlLeft) {
      lineInput = lineInput + symbol;
    } else {
      lineInput = lineInput + ' ';
    }
  }
  console.log(lineInput);
  lineInput = '';
  controlRight -= 1;
  controlLeft += 1;
};

//Problema 5

let n = 7;
let lineIndex;
let lineColumn;
let lineInput = '';
let symbol = '*';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight= midOfMatrix;

for (lineIndex = 0; lineIndex < midOfMatrix; lineIndex += 1) {
  for (lineColumn = 0; lineColumn <= n; lineColumn += 1) {
    if (lineColumn > controlRight && lineColumn < controlLeft && lineIndex == midOfMatrix - 1) {
      lineInput = lineInput + symbol;
    } else if(lineColumn < controlRight && lineIndex == midOfMatrix) {
      lineInput = lineInput + ' ';
    } else if (lineColumn == controlRight || lineColumn == controlLeft) {
      lineInput = lineInput + symbol;
    } else {
      lineInput = lineInput + ' ';
    }
  }
  console.log(lineInput);
  lineInput = '';
  controlRight -= 1;
  controlLeft += 1;
};

//Problema 6

let numberPrimo = 2
let primo = "O número é primo"
for ( let index = 2; index < numberPrimo; index++ ){
  if ( numberPrimo % index == 0){
    primo = "O número não é primo"
  }
}
console.log(primo)
