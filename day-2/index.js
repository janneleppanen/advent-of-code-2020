const fs = require('fs');
const {
  isPasswordValidForPart1,
  isPasswordValidForPart2
} = require('./helpers')

fs.readFile(`${__dirname}/input.txt`, 'utf-8', (_, input) => {
  const passwords = input.split('\n');

  const validForPart1 = passwords.filter(row => {
    const [range, characterLine, password] = row.split(' ');
    const [min, max] = range.split('-').map(i => parseInt(i));
    const character = characterLine.replace(':', '');
    return isPasswordValidForPart1(min, max, character, password);
  });
  console.log(`Day 02 - Part 1: ${validForPart1.length}`)

  const validForPart2 = passwords.filter(row => {
    const [range, characterLine, password] = row.split(' ');
    const [index1, index2] = range.split('-').map(i => parseInt(i));
    const character = characterLine.replace(':', '');
    return isPasswordValidForPart2(index1, index2, character, password);
  });
  console.log(`Day 02 - Part 2: ${validForPart2.length}`)
})