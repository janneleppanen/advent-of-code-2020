const run = require("../utils/run");
const {
  parseResults,
  getQuestionsWithAnyYes,
  getQuestionsWithOnlyYes,
} = require("./helpers");

run(`${__dirname}/input.txt`, (input) => {
  const results = parseResults(input);

  const anyYesSum = results
    .map(getQuestionsWithAnyYes)
    .map((g) => g.length)
    .reduce((sum, i) => sum + i, 0);
  console.log(`Day 06 - Part 1: ${anyYesSum}`);

  const onlyYesSum = results
    .map(getQuestionsWithOnlyYes)
    .map((g) => g.length)
    .reduce((sum, i) => sum + i, 0);
  console.log(`Day 06 - Part 2: ${onlyYesSum}`);
});
