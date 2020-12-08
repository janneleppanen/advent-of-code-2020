const getTwoNumbersForGivenSum = (numbers, magicSum) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === magicSum) {
        return [numbers[i], numbers[j]];
      }
    }
  }

  return false;
};

const getThreeNumbersForGivenSum = (numbers, magicSum) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      for (let k = j + 1; k < numbers.length; k++) {
        if (numbers[i] + numbers[j] + numbers[k] === magicSum) {
          return [numbers[i], numbers[j], numbers[k]];
        }
      }
    }
  }

  return false;
};

module.exports = {
  getTwoNumbersForGivenSum,
  getThreeNumbersForGivenSum,
};
