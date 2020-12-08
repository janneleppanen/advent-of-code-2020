const run = require("../utils/run");
const { countTreesInSlope } = require("./helpers");

run(`${__dirname}/input.txt`, (input) => {
  const makeSlopeMap = (input) => input.split("\n");
  const slopeMap = makeSlopeMap(input);
  const treeCount = countTreesInSlope(slopeMap, { x: 3, y: 1 });
  console.log(`Day 03 - Part 1: ${treeCount}`);

  const slides = [
    { x: 1, y: 1 },
    { x: 3, y: 1 },
    { x: 5, y: 1 },
    { x: 7, y: 1 },
    { x: 1, y: 2 },
  ];
  const treeCounts = slides.map((dir) => countTreesInSlope(slopeMap, dir));
  const multipliedTreeCount = treeCounts.reduce((sum, i) => sum * i, 1);
  console.log(`Day 03 - Part 2: ${multipliedTreeCount}`);
});
