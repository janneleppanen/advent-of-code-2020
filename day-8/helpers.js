const parseCode = (input) => {
  return input.split("\n").map((line) => {
    const [fn, value] = line.split(" ");
    return { fn, value: parseInt(value) };
  });
};

const runCode = (code) => {
  const history = [];
  let nextLine = 0;
  let accumulator = 0;

  while (
    history.indexOf(nextLine) === -1 &&
    nextLine < code.length &&
    nextLine >= 0
  ) {
    history.push(nextLine);
    const { fn, value } = code[nextLine];

    switch (fn) {
      case "acc":
        accumulator += value;
        break;
      case "jmp":
        nextLine += value;
        continue;
    }

    nextLine++;
  }

  return { accumulator, nextLine };
};

const fixCode = (code, changeMap) => {
  const changableLines = code.reduce((lines, line, index) => {
    if (Object.keys(changeMap).includes(line.fn)) {
      return [...lines, index];
    }
    return lines;
  }, []);

  const lineToChange = changableLines.find((lineNumber) => {
    const changedCode = changeLine(lineNumber, code, changeMap);
    const { nextLine } = runCode(changedCode);
    return nextLine === code.length;
  });

  return {
    code: !!lineToChange ? changeLine(lineToChange, code, changeMap) : code,
    lineToChange,
  };
};

const changeLine = (lineNumber, code, changeMap) => {
  const changedCode = [...code];
  const { fn, value } = changedCode[lineNumber];
  const newFn = changeMap.hasOwnProperty(fn) ? changeMap[fn] : fn;
  changedCode[lineNumber] = { fn: newFn, value };
  return changedCode;
};

module.exports = {
  parseCode,
  runCode,
  fixCode,
  changeLine,
};
