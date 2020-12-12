const run = require("../utils/run");
const { Direction, parseCommands, moveShipWithCommands } = require("./helpers");

run(`${__dirname}/input.txt`, (input) => {
  const commands = parseCommands(input);
  const ship = { direction: Direction.E, x: 0, y: 0 };
  const { x, y } = moveShipWithCommands(ship, commands);
  const magicValuePart1 = Math.abs(x) + Math.abs(y);
  console.log(`Day 12 - Part 1: ${magicValuePart1}`);
  console.log(`Day 12 - Part 2: ${input.length}`);
});
