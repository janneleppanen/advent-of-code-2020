const run = require("../utils/run");
const {
  parsePasswords,
  getValidPasswords,
  part1Validator,
  part2Validator,
} = require("./helpers");

run(`${__dirname}/input.txt`, (input) => {
  const passwords = parsePasswords(input);

  const validForPart1 = getValidPasswords(passwords, part1Validator);
  console.log(`Day 02 - Part 1: ${validForPart1.length}`);

  const validForPart2 = getValidPasswords(passwords, part2Validator);
  console.log(`Day 02 - Part 2: ${validForPart2.length}`);
});
