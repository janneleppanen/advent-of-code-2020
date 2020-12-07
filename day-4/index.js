const fs = require('fs');
const {
  parsePassportData,
  checkValidity,
  checkValidityByRule
} = require('./helpers')

fs.readFile(`${__dirname}/input.txt`, 'utf-8', (error, input) => run(input))

const requiredFields = {
  byr: (value) => {
    return value >= 1920 && value <= 2002
  },
  iyr: (value) => {
    return value >= 2010 && value <= 2020
  },
  eyr: (value) => {
    return value >= 2020 && value <= 2030
  },
  hgt: (value) => {
    if (value.match(/cm/)) {
      value = value.replace('cm', '');
      return value >= 150 && value <= 193
    }
    if (value.match(/in/)) {
      value = value.replace('in', '');
      return value >= 59 && value <= 76
    }
    return false;
  },
  hcl: (value) => {
    return value.match(/^#[0-9a-f]{6}$/)
  },
  ecl: (value) => {
    return ["amb", "blu", "brn", "gry", "grn", "hzl", "oth"].includes(value)
  },
  pid: (value) => {
    return value.match(/^[0-9]{9}$/)
  },
};

const run = (input) => {
  const rows = input
    .trim()
    .split("\n\n")
    .map(r => r.replace(/\n/g, ' '));

  const validPassportsForPart1 = rows.map(parsePassportData)
    .filter(passport => {
      return checkValidity(passport, Object.keys(requiredFields))
    });
  console.log(`Day 04 - Part 1: ${validPassportsForPart1.length}`)

  const validPassportsForPart2 = rows.map(parsePassportData)
    .filter(passport => {
      return checkValidityByRule(passport, requiredFields)
    });
  console.log(`Day 04 - Part 2: ${validPassportsForPart2.length}`)
}