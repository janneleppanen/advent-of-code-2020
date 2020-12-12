const { expect } = require("@jest/globals");
const {
  parseCommands,
  Direction,
  moveShipWithCommands,
  moveShip,
  turnShip,
} = require("./helpers");

const input = `F10
N3
F7
R90
F11`;

describe("Day 12", () => {
  test("Part 1 : actions", () => {
    const ship = { direction: { x: 1, y: 0 }, x: 0, y: 0 };

    expect(moveShip(ship, ship.direction, 10).x).toBe(10);

    expect(moveShip(ship, Direction.S, 20).y).toBe(-20);
    expect(moveShip(ship, Direction.N, 30).y).toBe(30);
    expect(moveShip(ship, Direction.W, 40).x).toBe(-40);
    expect(moveShip(ship, Direction.E, 50).x).toBe(50);

    // { x: 1, y: 0 } => { x: 0, y: -1 }
    expect(turnShip(ship, "R", 90).direction.x).toBe(0);
    expect(turnShip(ship, "R", 90).direction.y).toBe(-1);
    // { x: 1, y: 0 } => { x: -1 y: 0 }
    expect(turnShip(ship, "R", 180).direction.x).toBe(-1);
    expect(turnShip(ship, "R", 180).direction.y).toBe(0);
    // { x: 1, y: 0 } => { x: 0 y: 1 }
    expect(turnShip(ship, "R", 270).direction.x).toBe(0);
    expect(turnShip(ship, "R", 270).direction.y).toBe(1);
    // { x: 1, y: 0 } => { x: 1 y: 0 }
    expect(turnShip(ship, "R", 360).direction.x).toBe(1);
    expect(turnShip(ship, "R", 360).direction.y).toBe(0);

    // { x: 1, y: 0 } => { x: 0, y: 1 }
    expect(turnShip(ship, "L", 90).direction.x).toBe(0);
    expect(turnShip(ship, "L", 90).direction.y).toBe(1);
    // { x: 1, y: 0 } => { x: -1 y: 0 }
    expect(turnShip(ship, "L", 180).direction.x).toBe(-1);
    expect(turnShip(ship, "L", 180).direction.y).toBe(0);
    // { x: 1, y: 0 } => { x: 0 y: -1 }
    expect(turnShip(ship, "L", 270).direction.x).toBe(0);
    expect(turnShip(ship, "L", 270).direction.y).toBe(-1);
    // { x: 1, y: 0 } => { x: 1 y: 0 }
    expect(turnShip(ship, "L", 360).direction.x).toBe(1);
    expect(turnShip(ship, "L", 360).direction.y).toBe(0);
  });

  test("Part 1", () => {
    const commands = parseCommands(input);
    const ship = { direction: Direction.E, x: 0, y: 0 };
    const { direction, y, x } = moveShipWithCommands(ship, commands);

    expect(direction.toString()).toBe(Direction.S.toString());
    expect(Math.abs(y)).toBe(8);
    expect(Math.abs(x)).toBe(17);
  });

  test("Part 2", () => {});
});
