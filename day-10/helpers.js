const parseAdapters = (input) => input.split("\n").map((i) => parseInt(i));

const makeAdapterChain = (adapters, maxDiff) => {
  const sortedAdapters = adapters.sort((a, b) => a - b);
  const chain = [];
  let nextIndex = 0;
  let lastJoltage = 0;

  while (
    sortedAdapters[nextIndex] - lastJoltage > 0 &&
    sortedAdapters[nextIndex] - lastJoltage <= maxDiff
  ) {
    chain.push({
      joltage: sortedAdapters[nextIndex],
      diff: sortedAdapters[nextIndex] - lastJoltage,
    });
    lastJoltage = sortedAdapters[nextIndex];
    nextIndex++;
  }

  chain.push({
    joltage: lastJoltage + 3,
    diff: 3,
  });

  return chain;
};

module.exports = {
  parseAdapters,
  makeAdapterChain,
};
