const fs = require('fs');
const {
  fn,
} = require('./helpers')

fs.readFile(`${__dirname}/input.txt`, 'utf-8', (error, input) => run(input))

const run = (input) => {
  const a = '';
  console.log(`Day 00 - Part 1: ${a}`);
  console.log(`Day 00 - Part 2: ${a}`);
}