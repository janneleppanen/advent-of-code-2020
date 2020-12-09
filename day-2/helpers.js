const parsePasswords = (input) => input.split("\n");

const getValidPasswords = (passwords, validator) => {
  return passwords.filter((row) => {
    const [range, characterLine, password] = row.split(" ");
    const [min, max] = range.split("-").map((i) => parseInt(i));
    const character = characterLine.replace(":", "");
    return validator(min, max, character, password);
  });
};

const part1Validator = (min, max, lookForChar, password) => {
  let count = 0;
  password.split("").forEach((char) => {
    if (char === lookForChar) {
      count++;
    }
  });
  return count >= min && count <= max;
};

const part2Validator = (index1, index2, lookForChar, password) => {
  let count = 0;

  if (password[index1 - 1] === lookForChar) {
    count++;
  }
  if (password[index2 - 1] === lookForChar) {
    count++;
  }

  return count === 1;
};

module.exports = {
  parsePasswords,
  getValidPasswords,
  part1Validator,
  part2Validator,
};
