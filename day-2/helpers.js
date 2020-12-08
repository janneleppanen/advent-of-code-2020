const isPasswordValidForPart1 = (min, max, lookForChar, password) => {
  let count = 0;
  password.split("").forEach((char) => {
    if (char === lookForChar) {
      count++;
    }
  });
  return count >= min && count <= max;
};

const isPasswordValidForPart2 = (index1, index2, lookForChar, password) => {
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
  isPasswordValidForPart1,
  isPasswordValidForPart2,
};
