const run = require("../utils/run");
const {
  parseNumbers,
  findInvalidXmasNumber,
  findNumbersOfSum,
} = require("./helpers");

run(`${__dirname}/input.txt`, (input) => {
  const numbers = parseNumbers(input);
  const invalidNumber = findInvalidXmasNumber(numbers, 25);
  console.log(`Day 09 - Part 1: ${invalidNumber}`);

  const weakNumbers = findNumbersOfSum(invalidNumber, numbers);
  const weakness = Math.min(...weakNumbers) + Math.max(...weakNumbers);
  console.log(`Day 09 - Part 2: ${weakness}`);
});
