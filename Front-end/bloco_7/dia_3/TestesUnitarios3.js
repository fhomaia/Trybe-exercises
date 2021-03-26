//1
const assert = require('assert');

// const greetPeople = (people) => {
//     let greeting = 'Hello ';
  
//     for (const person in people) {
//       greeting += people[person];
//       people[person] = greeting;
//       greeting = 'Hello '
//     }
//     return people;
//   };
  
//   const parameter = ['Irina', 'Ashleigh', 'Elsa'];
//   const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

// assert.deepStrictEqual(greetPeople(parameter),result);

//2
// const removeVowels = (word) => {
//     const characters = word.split('');
//     let results = [];
//     let count = 1
//     for (let index = 0; index < characters.length; index += 1) {
//       if (
//         characters[index] === 'a' ||
//         characters[index] === 'o' ||
//         characters[index] === 'i' ||
//         characters[index] === 'e' ||
//         characters[index] === 'u'
//       ) {
//         characters.splice(index,1,count);
//         count += 1
//         results += characters[index];
//       } else {
//         results += characters[index];
//       }
//     }
//     return results;
//   };
  
  
//   const parameter = 'Dayane';
//   const result = 'D1y2n3';

//   assert.strictEqual(typeof removeVowels, 'function');
//   assert.deepStrictEqual(removeVowels(parameter), result);

//3

// const greaterThanTen = (array) => {
//     let results = [];
//     for (let index = 0; index < array.length; index += 1) {
//       if (array[index] > 10) {
//         results.push(array[index]);
//       }
//     }
//     return results;
//   };
  
//   const parameter = [4, 10, 32, 9, 21];
//   const result = [32, 21];

//   assert.deepStrictEqual(greaterThanTen(parameter), result);

//4
  function secondThirdSmallest(array) {
    let results = []
    array.sort(function (x, y) {
        return x - y;
    });
    results = [array[1], array[2]];
    return results;
};

const parameter = [4, 10, 32, 9, 21, 90, 5, 11, 8, 6];
const result = [5, 6];

assert.deepStrictEqual(secondThirdSmallest(parameter), result);