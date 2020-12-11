const {
  parseArea,
  simulateArea,
  areAreasEqual,
  getAdjecentOccupationCount,
  getOccupationCountInDirections,
  stringifyArea,
} = require("./helpers");

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

const part1AreaAfter5 = `#.#L.L#.##
#LLL#LL.L#
L.#.L..#..
#L##.##.L#
#.#L.LL.LL
#.#L#L#.##
..L.L.....
#L#L##L#L#
#.LLLLLL.L
#.#L#L#.##`;

const part2AreaAfrer7 = `#.L#.L#.L#
#LLLLLL.LL
L.L.L..#..
##L#.#L.L#
L.L#.LL.L#
#.LLLL#.LL
..#.L.....
LLL###LLL#
#.LLLLL#.L
#.L#LL#.L#`;

describe("Day 11", () => {
  test("Part 1", () => {
    let area = parseArea(input);

    for (let i = 0; i < 5; i++) {
      area = simulateArea(area, {
        L: ({ slot, position, area }) => {
          return getAdjecentOccupationCount(position, area) === 0 ? "#" : slot;
        },
        "#": ({ slot, position, area }) => {
          return getAdjecentOccupationCount(position, area) >= 4 ? "L" : slot;
        },
      });
    }

    let endArea = parseArea(part1AreaAfter5);
    const isEqual = areAreasEqual(area, endArea);

    expect(isEqual).toBe(true);
  });

  test("Part 2", () => {
    let area = parseArea(input);

    const directions = [
      { x: 1, y: 1 },
      { x: 1, y: 0 },
      { x: 1, y: -1 },
      { x: 0, y: -1 },
      { x: -1, y: -1 },
      { x: -1, y: 0 },
      { x: -1, y: 1 },
      { x: 0, y: 1 },
    ];
    for (let i = 0; i < 7; i++) {
      area = simulateArea(area, {
        L: ({ slot, position, area }) => {
          return getOccupationCountInDirections({
            directions,
            position,
            area,
          }) === 0
            ? "#"
            : slot;
        },
        "#": ({ slot, position, area }) => {
          return getOccupationCountInDirections({
            directions,
            position,
            area,
          }) >= 5
            ? "L"
            : slot;
        },
      });
    }

    let endArea = parseArea(part2AreaAfrer7);

    expect(stringifyArea(area)).toBe(stringifyArea(endArea));
  });
});
