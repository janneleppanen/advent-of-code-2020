const parseArea = (input) => input.split(`\n`).map((i) => i.split(""));

const simulateArea = (area) => {
  return area.map((row, y) => {
    return row.map((slot, x) => {
      return simulateSlot({ slot, x, y, area });
    });
  });
};

const simulateSlot = ({ slot, x, y, area }) => {
  if (slot === "L") {
    // getAdjecent === 0 -> #
    return getAdjecentOccupationCount({ x, y, area }) === 0 ? "#" : slot;
  }

  if (slot === "#") {
    // getAdjecent >= 4 -> L
    return getAdjecentOccupationCount({ x, y, area }) >= 4 ? "L" : slot;
  }

  return slot;
};

const getAdjecentOccupationCount = ({ x, y, area }) => {
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

module.exports = {
  parseArea,
  simulateArea,
  areAreasEqual,
  cloneArea,
  countOccupiedInArea,
};
