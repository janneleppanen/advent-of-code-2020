const { expect } = require("@jest/globals");
const {
  parseSchedule,
  getNextBus,
  getNextRushDeparture,
} = require("./helpers");

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

  test("Part 2", () => {
    const { busList } = parseSchedule(input);
    expect(getNextRushDeparture(busList)).toBe(1068781);

    expect(getNextRushDeparture([17, "x", 13, 19])).toBe(3417);
    expect(getNextRushDeparture([67, 7, 59, 61])).toBe(754018);
    expect(getNextRushDeparture([67, "x", 7, 59, 61])).toBe(779210);
    expect(getNextRushDeparture([67, 7, "x", 59, 61])).toBe(1261476);
    expect(getNextRushDeparture([1789, 37, 47, 1889])).toBe(1202161486);
  });
});
