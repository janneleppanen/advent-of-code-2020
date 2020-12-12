const Direction = {
  N: { x: 0, y: 1 },
  S: { x: 0, y: -1 },
  E: { x: 1, y: 0 },
  W: { x: -1, y: 0 },
};

const parseCommands = (input) =>
  input.split("\n").map((row) => ({
    action: row.slice(0, 1),
    value: parseInt(row.slice(1)),
  }));

const moveShipWithCommands = (ship, commands) => {
  commands.forEach(({ action, value }) => {
    switch (action) {
      case "N":
      case "S":
      case "E":
      case "W":
        ship = moveShip(ship, Direction[action], value);
        break;
      case "F":
        ship = moveShip(ship, ship.direction, value);
        break;
      case "R":
      case "L":
        ship = turnShip(ship, action, value);
        break;
    }
  });

  return ship;
};

const moveShip = (ship, direction, value) => {
  return {
    ...ship,
    x: ship.x + direction.x * value,
    y: ship.y + direction.y * value,
  };
};

const turnShip = (ship, turnTo, value) => {
  const times = value / 90;
  let newDirection = { ...ship.direction };

  for (let i = 0; i < times; i++) {
    switch (turnTo) {
      case "R":
        newDirection = {
          x: parseInt(newDirection.y),
          y: parseInt(newDirection.x * -1),
        };
        break;
      case "L":
        newDirection = {
          x: parseInt(newDirection.y * -1),
          y: parseInt(newDirection.x),
        };
        break;
    }
  }

  return { ...ship, direction: newDirection };
};

module.exports = {
  parseCommands,
  Direction,
  moveShip,
  turnShip,
  moveShipWithCommands,
};
