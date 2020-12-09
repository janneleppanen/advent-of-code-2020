const { expect } = require("@jest/globals");
const {
  isSumOfTwo,
  parseNumbers,
  findInvalidXmasNumber,
  findNumbersOfSum,
} = require("./helpers");

const input = `35
20
15
25
47
40
62
55
65
95
102
117
150
182
127
219
299
277
309
576`;

describe("Day 9", () => {
  test("Part 1", () => {
    expect(isSumOfTwo(3, [1, 2, 3, 4, 5])).toBe(true);
    expect(isSumOfTwo(9, [1, 2, 3, 4, 5])).toBe(true);
    expect(isSumOfTwo(7, [1, 2, 3, 4, 5])).toBe(true);
    expect(isSumOfTwo(1, [1, 2, 3, 4, 5])).toBe(false);
    expect(isSumOfTwo(10, [1, 2, 3, 4, 5])).toBe(false);

    const numbers = parseNumbers(input);
    const invalidNumber = findInvalidXmasNumber(numbers, 5);

    expect(invalidNumber).toBe(127);
  });

  test("Part 2", () => {
    const numbers = parseNumbers(input);
    const invalidNumber = findInvalidXmasNumber(numbers, 5);
    const weakNumbers = findNumbersOfSum(invalidNumber, numbers);

    expect(weakNumbers).toStrictEqual([15, 25, 47, 40]);
    expect(Math.min(...weakNumbers) + Math.max(...weakNumbers)).toBe(62);
  });
});
