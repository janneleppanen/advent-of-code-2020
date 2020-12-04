const fs = require('fs');
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

const parsePassportData = (source) => {
  const data = {};
  source.replace('\n', ' ').split(' ').forEach(keypair => {
    const [key, value] = keypair.split(':');
    data[key] = value;
  });
  return data;
}

const checkValidity = (passport, requiredFields) => {
  let isValid = true;
  Object.keys(requiredFields).forEach(key => {
    if (!passport.hasOwnProperty(key)) {
      isValid = false;
      return;
    }
    if (!requiredFields[key](passport[key])) {
      isValid = false
    }
  });
  return isValid;
}

const run = (input) => {
  const rows = input.trim().split("\n\n").map(r => r.replace(/\n/g, ' '));

  const passports = rows.map(parsePassportData);
  const validPassports = passports.filter(passport => {
    return checkValidity(passport, requiredFields)
  });

  console.log(validPassports.length);
}