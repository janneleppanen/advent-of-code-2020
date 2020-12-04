const fs = require('fs');
fs.readFile(`${__dirname}/input.txt`, 'utf-8', (error, input) => run(input))

const requiredFields = [
  "byr",
  "iyr",
  "eyr",
  "hgt",
  "hcl",
  "ecl",
  "pid",
];

const parsePassportData = (source) => {
  const data = {};
  source.replace('\n', ' ').split(' ').forEach(keypair => {
    const [key, value] = keypair.split(':');
    data[key] = value;
  });
  return data;
}

const checkValidity = (passport, requiredFields) => {
  return requiredFields.every(field => {
    return passport.hasOwnProperty(field)
  })
}

const run = (input) => {
  const rows = input.trim().split("\n\n").map(r => r.replace(/\n/g, ' '));

  const passports = rows.map(parsePassportData);
  const validPassports = passports.filter(passport => {
    return checkValidity(passport, requiredFields)
  });

  console.log(validPassports.length);
}