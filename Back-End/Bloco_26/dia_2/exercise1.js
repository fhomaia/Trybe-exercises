function calculate (numA, numB, numC) {
  const promise = new Promise((resolve, reject) => {
    if (typeof numA !== "number" || typeof numB !== "number" || typeof numC !== "number") {
      return reject("Informe apenas números");
    }
    const result = (numA + numB) * numC;
    if (result < 50) {
      return reject("Valor muito baixo");
    }
    return resolve(result);
  });
  return promise;
}

async function calculateNumber() {
  numA = Math.round(Math.random() * 99 + 1);
  numB = Math.round(Math.random() * 99 + 1);
  numC = Math.round(Math.random() * 99 + 1);
  try {
    const result = await calculate(numA, numB, numC)
    return console.log(result);
  }
  catch(e) {
    return console.log(e)
  };
}

calculateNumber();