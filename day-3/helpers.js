const countTreesInSlope = (mapArray, dir) => {
  const coords = { x: 0, y: 0 };
  let treeCount = 0;
  
  while (!!mapArray[coords.y]) {
    const xIndex = coords.x % mapArray[coords.y].length

    if (mapArray[coords.y][xIndex] === '#') {
      treeCount++;
    }

    coords.x += dir.x;
    coords.y += dir.y;
  }

  return treeCount;
}

module.exports = {
  countTreesInSlope
}