const { getSeatId } = require('./helpers');

const MAX_ROWS = 127;
const MAX_COLUMNS = 7;

describe('Day 5', () => {
  test('Part 1', () => {
    expect(getSeatId('BFFFBBFRRR', MAX_ROWS, MAX_COLUMNS)).toBe(567);
    expect(getSeatId('FFFBBBFRRR', MAX_ROWS, MAX_COLUMNS)).toBe(119);
    expect(getSeatId('BBFFBBFRLL', MAX_ROWS, MAX_COLUMNS)).toBe(820);
  })
})