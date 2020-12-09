const {
  parseResults,
  getQuestionsWithAnyYes,
  getQuestionsWithOnlyYes,
} = require("./helpers");

const input = `abc

a
b
c

ab
ac

a
a
a
a

b`;

describe("Day 6", () => {
  test("Part 1", () => {
    const results = parseResults(input);
    expect(getQuestionsWithAnyYes(results[0])).toHaveLength(3);
    expect(getQuestionsWithAnyYes(results[1])).toHaveLength(3);
    expect(getQuestionsWithAnyYes(results[2])).toHaveLength(3);
    expect(getQuestionsWithAnyYes(results[3])).toHaveLength(1);
    expect(getQuestionsWithAnyYes(results[4])).toHaveLength(1);
  });

  test("Part 2", () => {
    const results = parseResults(input);
    expect(getQuestionsWithOnlyYes(results[0])).toHaveLength(3);
    expect(getQuestionsWithOnlyYes(results[1])).toHaveLength(0);
    expect(getQuestionsWithOnlyYes(results[2])).toHaveLength(1);
    expect(getQuestionsWithOnlyYes(results[3])).toHaveLength(1);
    expect(getQuestionsWithOnlyYes(results[4])).toHaveLength(1);
  });
});
