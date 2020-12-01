const fs = require('fs');

const getNumbersForGivenSum = (numbers, magicSum) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === magicSum) {
        return [numbers[i], numbers[j]];
      }
    }  
  }

  return false;
}

fs.readFile(`${__dirname}/input.txt`, 'utf-8', (error, input) => {
  const numbers = input.split('\n').map(n => parseInt(n));
  const magicNumbers = getNumbersForGivenSum(numbers, 2020);
  
  if (magicNumbers) {
    const answer = magicNumbers[0] * magicNumbers[1];
    console.log(`Answer is ${answer}`);
  }
})