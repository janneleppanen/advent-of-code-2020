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
  console.log(`Answer to the first task is ${uniqueBags.length}`);
  
  const bagCountIsideBag = getBagCountInsideBag('shiny gold', bagRules) - 1;
  console.log(`Answer to the second task is ${bagCountIsideBag}`);
}