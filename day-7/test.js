const {
  filterBagsContainingBag,
  parseBagRulesFromString,
  getUniqueBags,
  getBagCountInsideBag
} = require('./helpers');

describe('Day 7', () => {
  test('Part 1', () => {
    const input = `bright white bags contain 1 shiny gold bag.
muted yellow bags contain 1 shiny gold bag, 2 other bags.
dark orange bags contain 1 bright white bag, 1 muted yellow bag.
light red bags contain 1 bright white bag, 1 muted yellow bag.`;
    const bagRules = parseBagRulesFromString(input);
    const bags = filterBagsContainingBag('shiny gold', bagRules);
    const uniqueBags = getUniqueBags(bags)

    expect(uniqueBags.length).toBe(4);
  })

  test('Part 2', () => {
    const input = `shiny gold bags contain 2 dark red bags.
dark red bags contain 2 dark orange bags.
dark orange bags contain 2 dark yellow bags.
dark yellow bags contain 2 dark green bags.
dark green bags contain 2 dark blue bags.
dark blue bags contain 2 dark violet bags.
dark violet bags contain no other bags.`
    const bagRules = parseBagRulesFromString(input);
    const bagCountIsideBag = getBagCountInsideBag('shiny gold', bagRules) - 1;
    expect(bagCountIsideBag).toBe(126);
  })
})