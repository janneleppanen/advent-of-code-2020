const fs = require('fs');
fs.readFile(`${__dirname}/input.txt`, 'utf-8', (error, input) => run(input))

const MAX_ROWS = 127;
const MAX_COLUMNS = 7;

const findMiddle = (columnData, max) => {
  const range = columnData.reduce((needles, next) => {
    if (next === 'F' || next === 'L') {
      needles[1] -= Math.ceil((needles[1] - needles[0]) / 2);
    }
  
    if (next === 'B' || next === 'R') {
      needles[0] += Math.ceil((needles[1] - needles[0]) / 2);
    }
  
    return needles;
  }, [0, max])

  return (range[0] + range[1]) / 2;
}

const getSeatId = (seatData) => {
  const rowData = seatData.split('').slice(0,7);
  const columnData = seatData.split('').slice(7);
  
  const row = findMiddle(rowData, MAX_ROWS);
  const column = findMiddle(columnData, MAX_COLUMNS);

  return row * 8 + column;
}

const run = (input) => {
  const seatDatas = input.split('\n');
  const seatIds = seatDatas.map(getSeatId);

  const biggestSeatId = Math.max(...seatIds);
  console.log(`Answer for first is ${biggestSeatId}`);

  const mySeatId = seatIds
    .sort((a,b) => a - b)
    .find((seatId, index) => {
      return seatId !== seatIds[index+1] - 1
    }) + 1;

  console.log(`Answer for second is ${mySeatId}`);
}

module.exports = {
  getSeatId
}