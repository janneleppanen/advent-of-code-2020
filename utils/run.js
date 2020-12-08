const fs = require("fs");

const run = (path, callback) => {
  fs.readFile(path, "utf-8", (_, input) => callback(input));
};

module.exports = run;
