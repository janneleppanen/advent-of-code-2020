const run = require('../utils/run');
const {
  filterBagsContainingBag,
  parseBagRulesFromString,
  getUniqueBags,
  getBagCountInsideBag
} = require('./helpers')

run(`${__dirname}/input.txt`, (input) => {
  const bagRules = parseBagRulesFromString(input);
  const bags = filterBagsContainingBag('shiny gold', bagRules);
  const uniqueBags = getUniqueBags(bags);
  console.log(`Day 07 - Part 1: ${uniqueBags.length}`);
  
  const bagCountIsideBag = getBagCountInsideBag('shiny gold', bagRules) - 1;
  console.log(`Day 07 - Part 2: ${bagCountIsideBag}`);
});