function checkNumber(number) {
  if (typeof number === 'number') {
    if (number > 0) {
      console.log(`Number ${number} is positive!`)
      return `Number ${number} is positive!`
    }
    if (number < 0) {
      return `Number ${number} is negative!`
    }
    if (number === 0) {
      return `Zero is not defined as positive or negative`
    }
  }
  throw new Error('Only insert numbers')
};

module.exports = checkNumber;