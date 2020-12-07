const fs = require('fs');
const {
  getTwoNumbersForGivenSum,
  getThreeNumbersForGivenSum,
} = require('./helpers')

fs.readFile(`${__dirname}/input.txt`, 'utf-8', (error, input) => {
  const numbers = input.split('\n').map(n => parseInt(n));
  const magicTwoNumbers = getTwoNumbersForGivenSum(numbers, 2020);
  const answer1 = magicTwoNumbers[0] * magicTwoNumbers[1];
  console.log(`Day 01 - Part 1: ${answer1}`);

  const magicNumbers = getThreeNumbersForGivenSum(numbers, 2020);
  const answer2 = magicNumbers[0] * magicNumbers[1] * magicNumbers[2];
  console.log(`Day 01 - Part 2: ${answer2}`);
})