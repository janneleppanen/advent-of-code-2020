const run = require("../utils/run");
const { parseSchedule, getNextBus } = require("./helpers");

run(`${__dirname}/input.txt`, (input) => {
  const { time, busList } = parseSchedule(input);
  const { bus, next } = getNextBus(time, busList);
  const wait = next - time;
  const part1MagicNumber = bus * wait;

  console.log(`Day 13 - Part 1: ${part1MagicNumber}`);
  console.log(`Day 13 - Part 2: ${input.length}`);
});
