const { parseArea, simulateArea, areAreasEqual } = require("./helpers");

const input = `L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL`;

const areaAfrer5 = `#.#L.L#.##
#LLL#LL.L#
L.#.L..#..
#L##.##.L#
#.#L.LL.LL
#.#L#L#.##
..L.L.....
#L#L##L#L#
#.LLLLLL.L
#.#L#L#.##`;

describe("Day 11", () => {
  test("Part 1", () => {
    let area = parseArea(input);

    for (let i = 0; i < 5; i++) {
      area = simulateArea(area);
    }

    let endArea = parseArea(areaAfrer5);
    const isEqual = areAreasEqual(area, endArea);

    expect(isEqual).toBe(true);
  });

  test("Part 2", () => {});
});
