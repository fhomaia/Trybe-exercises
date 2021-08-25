const fs = require('fs').promises

// function readData() {
//   const data = fs.readFile('./simpsons.json')
//   data
//   .then((response) => JSON.parse(response))
//   .then((response) => {
//   response.forEach((character) => console.log(`${character.id} - ${character.name}`))
//   });
// }
// readData();

// function checkData(target) {
//   const promise = new Promise((resolve, reject) => {
//     const data = fs.readFile('./simpsons.json')
//     data
//     .then((response) => JSON.parse(response))
//     .then((response) => {
//       const idExists = response.find((character) => character.id === target);
//       if (idExists) {
//         resolve(idExists.name)
//       }
//       reject('id não encontrado')
//     });
//   });
//   return promise;
// }


// checkData('9')
// .then((response) => console.log(response))
// .catch((err) => console.log(err));

function writeData() {
  const data = fs.readFile('./simpsons.json')
  const filteredData = data
  .then((response) => JSON.parse(response))
  .then((response) => response
  .filter((character) => character.id !== '10' && character.id !== '6' ));
  return fs.writeFile('./simpsons.json', JSON.stringify(filteredData));
}

writeData();