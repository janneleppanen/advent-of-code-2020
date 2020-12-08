const { expect } = require('@jest/globals');
const {
  parseCode,
  runCode,
  fixCode,
  changeLine
} = require('./helpers');

const input = `nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6`;

const changeMap = {
  jmp: 'nop',
  nop: 'jmp'
}

describe('Day 0', () => {
  test('Part 1', () => {
    const code = parseCode(input);
    const { accumulator } = runCode(code);
    expect(accumulator).toBe(5)
  })

  test('Part 2', () => {
    const code = parseCode(input);
    const { code: fixedCode } = fixCode(code, changeMap);
    const { accumulator, nextLine } = runCode(fixedCode);

    expect(nextLine).toBe(fixedCode.length)
    expect(accumulator).toBe(8)
  }, 1)

  test('Part 2 helper', () => {
    const code = parseCode(input);
    const newCodes = [
      changeLine(0, code, changeMap),
      changeLine(1, code, changeMap),
      changeLine(2, code, changeMap),
    ];

    expect(newCodes[0][0].fn).toBe('jmp');
    expect(newCodes[0][0].value).toBe(0);
    expect(newCodes[1][1].fn).toBe('acc');
    expect(newCodes[1][1].value).toBe(1);
    expect(newCodes[2][2].fn).toBe('nop');
    expect(newCodes[2][2].value).toBe(4);
  }, 1)
})