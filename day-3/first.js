const fs = require('fs');
fs.readFile(`${__dirname}/input.txt`, 'utf-8', (error, input) => run(input))

const makeSlopeMap = (input) => input.split('\n')

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

const run = (input) => {
  const slopeMap = makeSlopeMap(input);
  const treeCount = countTreesInSlope(slopeMap, { x: 3, y: 1 })

  console.log(treeCount);
}