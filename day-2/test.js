const { expect } = require("@jest/globals");
const {
  parsePasswords,
  getValidPasswords,
  part1Validator,
  part2Validator,
} = require("./helpers");

const input = `1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc`;

describe("Day 2", () => {
  test("Part 1", () => {
    const passwords = parsePasswords(input);
    const validPasswords = getValidPasswords(passwords, part1Validator);
    expect(validPasswords.length).toBe(2);
  });

  test("Part 2", () => {
    const passwords = parsePasswords(input);
    const validPasswords = getValidPasswords(passwords, part2Validator);
    expect(validPasswords.length).toBe(1);
  });
});
