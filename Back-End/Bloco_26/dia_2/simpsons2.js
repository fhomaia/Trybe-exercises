const fs = require('fs').promises
// function writeData() {
//   fs.readFile('./simpsons.json')
//   .then((response) => JSON.parse(response))
//   .then((response) => {
//     const newFileData = response.filter((character) => parseInt(character.id) < 5)
//     return fs.writeFile('./simpsonFamily.json', JSON.stringify(newFileData));
//   });
// }

// writeData();

// function addNelson() {
//   fs.readFile('./simpsonFamily.json')
//   .then((response) => JSON.parse(response))
//   .then((newData) => {
//     newData.push({ id: '5', name: 'Nelson Muntz'})
//     return fs.writeFile('./simpsonFamily.json', JSON.stringify(newData));
//   });
// }

// addNelson();

function changeToMaggie() {
  fs.readFile('./simpsonFamily.json')
  .then((response) => JSON.parse(response))
  .then((response) => {
    const newFileData = response.map((character) => {
      if(character.name === 'Nelson Muntz') {
        character.name = 'Maggie Simpson'
      }
      return character;
    });
    return fs.writeFile('./simpsonFamily.json', JSON.stringify(newFileData));
  });
}

changeToMaggie();