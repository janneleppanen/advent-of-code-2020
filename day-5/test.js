const { expect } = require('@jest/globals');
const firstCommands = require('./first');

describe('Task 5:1', () => {
  test('should work', () => {
    expect(firstCommands.getSeatId('BFFFBBFRRR')).toBe(567);
    expect(firstCommands.getSeatId('FFFBBBFRRR')).toBe(119);
    expect(firstCommands.getSeatId('BBFFBBFRLL')).toBe(820);
  })
})