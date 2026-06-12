const {getGrade} = require('./calculateGrade')

describe('getGrade', () => {
  test('59 returns "F" (just below C boundary)', () => {
    expect(getGrade(59)).toBe('F');
  });

  test('60 returns "C" (C boundary)', () => {
    expect(getGrade(60)).toBe('C');
  });

  test('69 returns "C" (just below B boundary)', () => {
    expect(getGrade(69)).toBe('C');
  });

  test('70 returns "B" (B boundary)', () => {
    expect(getGrade(70)).toBe('B');
  });

  test('79 returns "B" (just below A boundary)', () => {
    expect(getGrade(79)).toBe('B');
  });

  test('80 returns "A" (A boundary)', () => {
    expect(getGrade(80)).toBe('A');
  });
});