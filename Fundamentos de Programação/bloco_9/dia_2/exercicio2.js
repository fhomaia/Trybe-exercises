const promise = new Promise ((resolve, reject) => {
    const randomArray = [];
    for (let index = 0; index <= 9; index += 1){  
        let number = (Math.ceil(Math.random() * 49 + 1)) ** 2;
        randomArray.push(number)
    }
    let sum = randomArray.reduce((acc, curr) => acc + curr);
    if ( sum > 8000){
        resolve(sum);
    }
    reject();
})
promise
.then(sum => [2, 3, 5, 10].map(number => sum / number))
.then(array => {
    array.reduce((number, acc) => number + acc, 0);
    console.log(array)
})
.catch(() =>
  console.log('É mais de oito mil! Essa promise deve estar quebrada!')
);
