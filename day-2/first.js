const fs = require('fs');

const isPasswordValid = (min, max, lookForChar, password) => {
  let count = 0;
  password.split('').forEach(char => {
    if (char === lookForChar) {
      count++;
    }
  })
  return count >= min && count <= max
}


fs.readFile(`${__dirname}/input.txt`, 'utf-8', (error, input) => {
  let validPasswordCount = 0;

  input.split('\n').forEach(row => {
    const [range, characterLine, password] = row.split(' ');
    const [min, max] = range.split('-').map(i => parseInt(i));
    const character = characterLine.replace(':', '');
    const isValid = isPasswordValid(min, max, character, password);
    const display = isValid ? 'VALID   :' : 'INVALID :';

    if (isValid) {
      validPasswordCount++;
    }
    console.log(`${display} ${row}`);
  });
  
  console.log(`${validPasswordCount} passwords were valid.`)
})