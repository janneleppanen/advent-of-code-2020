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

const countVariationsWithCache = (adapters, maxDiff) => {
  const variationsMap = {};
  adapters = adapters.sort((a, b) => b - a);
  adapters.forEach((adapter, index) => {
    const set = adapters.slice(0, index + 1);
    variationsMap[adapter] = countVariations(set, maxDiff, 0, variationsMap);
    const variations = variationsMap[adapter];
  });

  return variationsMap["0"];
};

const countVariations = (
  adapters,
  maxDiff,
  variations = 0,
  variationsMap = {}
) => {
  adapters = adapters.sort((a, b) => a - b);
  if (adapters.length === 1) {
    return 1;
  }

  if (Object.keys(variationsMap).includes(adapters[0].toString())) {
    return variationsMap[adapters[0]];
  }

  const next = adapters[0];
  for (let i = 1; i <= maxDiff; i++) {
    if (adapters[i] - next <= maxDiff) {
      variations += countVariations(
        adapters.slice(i),
        maxDiff,
        0,
        variationsMap
      );
    }
  }

  return variations;
};

module.exports = {
  parseAdapters,
  makeAdapterChain,
  countVariations,
  countVariationsWithCache,
};
