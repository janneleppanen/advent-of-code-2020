const fs = require('fs');

const isPasswordValid = (index1, index2, lookForChar, password) => {
  let count = 0;

  if (password[index1 - 1] === lookForChar) {
    count++;
  }
  if (password[index2 - 1] === lookForChar) {
    count++;
  }

  return count === 1
}


fs.readFile(`${__dirname}/input.txt`, 'utf-8', (error, input) => {
  let validPasswordCount = 0;

  input.split('\n').forEach(row => {
    const [range, characterLine, password] = row.split(' ');
    const [index1, index2] = range.split('-').map(i => parseInt(i));
    const character = characterLine.replace(':', '');
    const isValid = isPasswordValid(index1, index2, character, password);
    const display = isValid ? 'VALID   :' : 'INVALID :';

    if (isValid) {
      validPasswordCount++;
    }
    console.log(`${display} ${row}`);
  });

  console.log(`${validPasswordCount} passwords were valid.`)
})