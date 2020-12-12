const run = require("../utils/run");
const {
  Direction,
  parseCommands,
  moveShipWithCommands,
  moveShipAndWaypointWithCommands,
} = require("./helpers");

run(`${__dirname}/input.txt`, (input) => {
  const commands = parseCommands(input);
  const ship = { direction: Direction.E, x: 0, y: 0 };
  const { x, y } = moveShipWithCommands(ship, commands);
  const magicValuePart1 = Math.abs(x) + Math.abs(y);
  console.log(`Day 12 - Part 1: ${magicValuePart1}`);

  const waypoint = { x: 10, y: 1 };
  const { ship: movedShip } = moveShipAndWaypointWithCommands(
    ship,
    waypoint,
    commands
  );
  const magicValuePart2 = Math.abs(movedShip.x) + Math.abs(movedShip.y);
  console.log(`Day 12 - Part 2: ${magicValuePart2}`);
});
