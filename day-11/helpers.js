const parseArea = (input) => input.split(`\n`).map((i) => i.split(""));

const simulateArea = (area, rules) => {
  return area.map((row, y) => {
    return row.map((slot, x) => {
      const position = { x, y };
      return simulateSlot({ slot, position, area, rules });
    });
  });
};

const simulateSlot = ({ slot, position, area, rules }) => {
  for (rule in rules) {
    if (slot === rule) {
      return rules[rule]({ slot, position, area });
    }
  }

  return slot;
};

const getAdjecentOccupationCount = ({ x, y }, area) => {
  const checks = [
    { y: y - 1, x: x - 1 },
    { y: y - 1, x: x },
    { y: y - 1, x: x + 1 },
    { y: y, x: x - 1 },
    { y: y, x: x + 1 },
    { y: y + 1, x: x - 1 },
    { y: y + 1, x: x },
    { y: y + 1, x: x + 1 },
  ];

  return checks.filter(({ x, y }) => {
    if (area[y] === undefined) return false;
    return area[y][x] === "#";
  }).length;
};

const areAreasEqual = (area1, area2) => {
  return stringifyArea(area1) === stringifyArea(area2);
};

const stringifyArea = (area) => {
  return area.map((row) => row.join("")).join("");
};

const cloneArea = (area) => {
  return parseArea(stringifyArea(area));
};

const countOccupiedInArea = (area) => {
  return stringifyArea(area)
    .split("")
    .filter((slot) => slot === "#").length;
};

const getOccupationCountInDirections = ({ directions, position, area }) => {
  const stop = [undefined, "#", "L"];

  const a = directions
    .map((direction) => {
      let x = position.x + direction.x;
      let y = position.y + direction.y;

      while (area[y] !== undefined && !stop.includes(area[y][x])) {
        x += direction.x;
        y += direction.y;
      }
      if (area[y] === undefined) return undefined;

      return area[y][x];
    })
    .filter((i) => i === "#");

  return a.length;
};

module.exports = {
  parseArea,
  simulateArea,
  areAreasEqual,
  cloneArea,
  stringifyArea,
  getAdjecentOccupationCount,
  countOccupiedInArea,
  getOccupationCountInDirections,
};
