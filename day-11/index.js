const run = require("../utils/run");
const {
  parseArea,
  simulateArea,
  areAreasEqual,
  cloneArea,
  countOccupiedInArea,
} = require("./helpers");

run(`${__dirname}/input.txt`, (input) => {
  let area = parseArea(input);
  let prevArea = [];

  while (!areAreasEqual(area, prevArea)) {
    prevArea = cloneArea(area);
    area = simulateArea(area);
  }
  const occupied = countOccupiedInArea(area);
  console.log(`Day 11 - Part 1: ${occupied}`);
  console.log(`Day 11 - Part 2: ${input.length}`);
});
