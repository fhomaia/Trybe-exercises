//1
const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui

assert.strictEqual(sum(4, 5), 9);
assert.strictEqual(sum(0, 0), 0);
assert.throws(() => {sum(4,'5'); });
assert.throws(() => {sum(4,'5'); }, /^Error:parameters must be numbers$/ );

//2
const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

// implemente seus testes aqui
assert.strictEqual(myRemove([1, 2, 3, 4], 3),[1, 2, 4] );
assert.notStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4] );

let myList = [1,2,3,4];
myRemoveWithoutCopy(myList, 1);
//Verifica apenas o tamanho mas não verifica o conteúdo

assert.strictEqual(myList.length, 3);
assert.strictEqual(myRemove([1, 2, 3, 4], 5),[1, 2, 3, 4] );

//3
const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  arr.splice(item -1,1)
  return arr;
}

// implemente seus testes aqui
assert.deepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4]);
assert.notDeepStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3),[1, 2, 3, 4]);
let array = [0, 1, 2, 3, 4]
myRemoveWithoutCopy(array, 3)
assert.strictEqual(array.length, 4);
assert.notStrictEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5),[1, 2, 3, 4]);

//4

const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui
assert.strictEqual(myFizzBuzz(45),'fizzbuzz');
assert.strictEqual(myFizzBuzz(12),'fizz');
assert.strictEqual(myFizzBuzz(65),'buzz');
assert.strictEqual(myFizzBuzz(13),13);
assert.strictEqual(myFizzBuzz('5'),false);


//5
const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// implemente seus testes aqui
assert.deepStrictEqual(obj1,obj2);
assert.notDeepStrictEqual(obj1,obj3)
