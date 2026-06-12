const {reverseString} = require('./reversString');

describe('reverseString', () => {
  test('"hello" reverses to "olleh"', () => {
    expect(reverseString("hello")).toBe("olleh");
  });

  test('"QA" reverses to "AQ"', () => {
    expect(reverseString("QA")).toBe("AQ");
  });

  test('empty string returns ""', () => {
    expect(reverseString("")).toBe("");
  });
});