const run = require('../utils/run');
const {
  parseCode,
  runCode,
  fixCode
} = require('./helpers')

run(`${__dirname}/input.txt`, (input) => {
  const code = parseCode(input);
  const { accumulator } = runCode(code);
  console.log(`Day 08 - Part 1: ${accumulator}`);
  
  const changeMap = {
    jmp: 'nop',
    nop: 'jmp'
  }
  const { code: fixedCode } = fixCode(code, changeMap);
  const { accumulator: accumulatorPart2 } = runCode(fixedCode);
  console.log(`Day 08 - Part 2: ${accumulatorPart2}`);
});