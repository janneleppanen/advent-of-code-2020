const run = require('../utils/run');

run(`${__dirname}/input.txt`, (input) => {
  const groups = input.split('\n\n');
  
  const firstAnswer = groups
    .map(group => {
      return group.replace(/\n/g, '');
    })
    .map(group => {
      return [...new Set(group.split(''))].join('')
    })
    .reduce((sum, i) => {
      return sum + i.length
    }, 0);
  console.log(`Day 06 - Part 1: ${firstAnswer}`)

  const secondAnswer = groups.map((group) => {
    const groupSize = group.split('\n').length;
    const answerCountMap = group
        .replace(/\n/g, '')
        .split('')
        .sort()
        .reduce((map, char) => {
          if (!map.hasOwnProperty(char)) {
            map[char] = 0;
          }
          map[char]++;
          
          if (map[char] === groupSize) {
            map.yesToAll.push(char)
          }

          return map;
        }, { yesToAll: [] });
      
    return answerCountMap.yesToAll.length;
  })
  .reduce((sum, i) => sum + i, 0);
  console.log(`Day 06 - Part 2: ${secondAnswer}`);
});