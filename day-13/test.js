const { expect } = require("@jest/globals");
const { parseSchedule, getNextBus } = require("./helpers");

const input = `939
7,13,x,x,59,x,31,19`;

describe("Day 13", () => {
  test("Part 1", () => {
    const { time, busList } = parseSchedule(input);
    const { bus, next } = getNextBus(time, busList);
    const wait = next - time;

    expect(bus).toBe(59);
    expect(wait).toBe(5);
  });

  test("Part 2", () => {});
});
