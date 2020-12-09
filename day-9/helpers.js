const parseNumbers = (input) => input.split("\n").map((i) => parseInt(i));

const isSumOfTwo = (sum, numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i; j < numbers.length; j++) {
      const isSum = numbers[i] + numbers[j] === sum;
      const isNotSame = numbers[i] !== numbers[j];
      if (isNotSame && isSum) {
        return true;
      }
    }
  }
  return false;
};

const findInvalidXmasNumber = (numbers, preamble) => {
  for (var i = preamble; i < numbers.length; i++) {
    const lastSetOfNumbers = numbers.slice(i - preamble, i);
    const isSum = isSumOfTwo(numbers[i], lastSetOfNumbers);
    if (!isSum) {
      return numbers[i];
    }
  }
};

const findNumbersOfSum = (findSum, numbers) => {
  let sum = 0;
  let min = 0;
  let max = 0;

  while (sum !== findSum) {
    if (sum < findSum) {
      sum += numbers[max];
      max++;
    }
    if (sum > findSum) {
      min++;
      max = min;
      sum = 0;
    }
  }

  return numbers.slice(min, max);
};

module.exports = {
  parseNumbers,
  isSumOfTwo,
  findInvalidXmasNumber,
  findNumbersOfSum,
};
