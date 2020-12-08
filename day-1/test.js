const { expect } = require("@jest/globals");
const {
  getTwoNumbersForGivenSum,
  getThreeNumbersForGivenSum,
} = require("./helpers");

const input1 = `1721
979
366
299
675
1456`;

describe("Day 1", () => {
  test("Part 1", () => {
    const numbers = input1.split("\n").map((n) => parseInt(n));
    const [a, b] = getTwoNumbersForGivenSum(numbers, 2020);
    expect(a * b).toBe(514579);
  });

  test("Part 2", () => {
    const numbers = input1.split("\n").map((n) => parseInt(n));
    const [a, b, c] = getThreeNumbersForGivenSum(numbers, 2020);
    expect(a * b * c).toBe(241861950);
  });
});
