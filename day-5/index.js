const run = require("../utils/run");
const { getSeatId } = require("./helpers");

const MAX_ROWS = 127;
const MAX_COLUMNS = 7;

run(`${__dirname}/input.txt`, (input) => {
  const seatDatas = input.split("\n");
  const seatIds = seatDatas.map((seatData) =>
    getSeatId(seatData, MAX_ROWS, MAX_COLUMNS)
  );

  const biggestSeatId = Math.max(...seatIds);
  console.log(`Day 05 - Part 1: ${biggestSeatId}`);

  const mySeatId =
    seatIds
      .sort((a, b) => a - b)
      .find((seatId, index) => {
        return seatId !== seatIds[index + 1] - 1;
      }) + 1;
  console.log(`Day 05 - Part 2: ${mySeatId}`);
});
