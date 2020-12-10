const run = require("../utils/run");
const { parseAdapters, makeAdapterChain } = require("./helpers");

const MAX_DIFFERENCE = 3;

run(`${__dirname}/input.txt`, (input) => {
  const adapters = parseAdapters(input);
  const adapterChain = makeAdapterChain(adapters, MAX_DIFFERENCE);

  const countOneDiffAdapters = adapterChain.filter((i) => i.diff === 1).length;
  const countThreeDiffAdapters = adapterChain.filter((i) => i.diff === 3)
    .length;
  const magicNumber1 = countOneDiffAdapters * countThreeDiffAdapters;
  console.log(`Day 10 - Part 1: ${magicNumber1}`);
  console.log(`Day 10 - Part 2: ${input.length}`);
});
