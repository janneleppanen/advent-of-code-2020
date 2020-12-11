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

let total = 0;
const countVariations = (adapters, maxDiff, variations = 0) => {
  adapters = adapters.sort((a, b) => a - b);
  if (adapters.length === 1) {
    total++;
    if (total % 1000000 === 0) {
      console.log(total.toLocaleString());
    }
    return 1;
  }

  const next = adapters[0];
  for (let i = 1; i <= maxDiff; i++) {
    if (adapters[i] - next <= maxDiff) {
      variations += countVariations(adapters.slice(i), maxDiff, 0);
    }
  }

  return variations;
};

module.exports = {
  parseAdapters,
  makeAdapterChain,
  countVariations,
};
