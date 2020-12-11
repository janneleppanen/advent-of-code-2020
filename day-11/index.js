const run = require("../utils/run");
const {
  parseArea,
  simulateArea,
  areAreasEqual,
  cloneArea,
  getAdjecentOccupationCount,
  countOccupiedInArea,
  getOccupationCountInDirections,
} = require("./helpers");

run(`${__dirname}/input.txt`, (input) => {
  let area = parseArea(input);
  let prevArea = [];

  while (!areAreasEqual(area, prevArea)) {
    prevArea = cloneArea(area);
    area = simulateArea(area, {
      L: ({ slot, position, area }) => {
        return getAdjecentOccupationCount(position, area) === 0 ? "#" : slot;
      },
      "#": ({ slot, position, area }) => {
        return getAdjecentOccupationCount(position, area) >= 4 ? "L" : slot;
      },
    });
  }
  const occupiedInPart1 = countOccupiedInArea(area);
  console.log(`Day 11 - Part 1: ${occupiedInPart1}`);

  area = parseArea(input);
  prevArea = [];
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
  while (!areAreasEqual(area, prevArea)) {
    prevArea = cloneArea(area);
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
  const occupiedInPart2 = countOccupiedInArea(area);
  console.log(`Day 11 - Part 2: ${occupiedInPart2}`);
});
