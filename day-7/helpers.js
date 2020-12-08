const parseBagRulesFromString = (source) => {
  const rows = source.split("\n");
  return rows.map((sourceRow) => {
    const [type, insideSource] = sourceRow.split(" bags contain ");

    if (sourceRow.includes("no other")) {
      return { type, inside: [] };
    }

    const inside = insideSource.split(",").map((bag) => {
      const count = parseInt(bag.match(/\d/)[0]);
      const type = bag.match(/\d (.*) bags?\.?/)[1];

      return {
        type,
        count,
      };
    });

    return { type, inside };
  });
};

const filterBagsContainingBag = (type, bagRules) => {
  let bags = bagRules.filter((bagRule) => {
    return !!bagRule.inside.find((bag) => bag.type === type);
  });

  if (!bags) {
    return [];
  }

  return bags.reduce((allBags, bag) => {
    return [...allBags, ...filterBagsContainingBag(bag.type, bagRules)];
  }, bags);
};

const getUniqueBags = (bags) => {
  const bagnames = bags.map((bag) => bag.type);
  return [...new Set(bagnames)];
};

const getBagCountInsideBag = (type, bagRules) => {
  const bag = bagRules.find((bag) => bag.type === type);
  let count = 1;

  if (bag.inside.length === 0) {
    return count;
  }

  return bag.inside.reduce((sum, bag) => {
    return sum + bag.count * getBagCountInsideBag(bag.type, bagRules);
  }, 1);
};

module.exports = {
  filterBagsContainingBag,
  parseBagRulesFromString,
  getUniqueBags,
  getBagCountInsideBag,
};
