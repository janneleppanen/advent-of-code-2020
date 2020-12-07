const fs = require('fs');
const {
  filterBagsContainingBag,
  parseBagRulesFromString,
  getUniqueBags,
  getBagCountInsideBag
} = require('./helpers')

fs.readFile(`${__dirname}/input.txt`, 'utf-8', (error, input) => run(input))

const run = (input) => {
  const bagRules = parseBagRulesFromString(input);
  const bags = filterBagsContainingBag('shiny gold', bagRules);
  const uniqueBags = getUniqueBags(bags);
  console.log(`Day 07 - Part 1: ${uniqueBags.length}`);
  
  const bagCountIsideBag = getBagCountInsideBag('shiny gold', bagRules) - 1;
  console.log(`Day 07 - Part 2: ${bagCountIsideBag}`);
}