const {sum,subtract,multiply,divide,} = require("../src/math");

describe("sum()", () => {
  // Positive cases
  test("adds two positive numbers", () => {
    expect(sum(5, 3)).toBe(8);
  });

  // Negative cases
  test("adds two negative numbers", () => {
    expect(sum(-5, -3)).toBe(-8);
  });

  test("adds a positive and a negative number", () => {
    expect(sum(10, -3)).toBe(7);
  });

  // Edge cases
  test("adds zero to a number", () => {
    expect(sum(10, 0)).toBe(10);
  });

  test("adds two zeros", () => {
    expect(sum(0, 0)).toBe(0);
  });

  test("adds decimal numbers", () => {
    expect(sum(2.5, 3.5)).toBe(6);
  });

  test("adds very large numbers", () => {
    expect(sum(Number.MAX_SAFE_INTEGER, 0))
      .toBe(Number.MAX_SAFE_INTEGER);
  });
});

describe("subtract()", () => {
  // Positive cases
  test("subtracts two positive numbers", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  // Negative cases
  test("subtracts two negative numbers", () => {
    expect(subtract(-10, -4)).toBe(-6);
  });

  test("subtracts a negative number", () => {
    expect(subtract(10, -5)).toBe(15);
  });

  // Edge cases
  test("subtracts zero", () => {
    expect(subtract(10, 0)).toBe(10);
  });

  test("subtracts equal numbers", () => {
    expect(subtract(5, 5)).toBe(0);
  });

  test("subtracts decimal numbers", () => {
    expect(subtract(5.5, 2.5)).toBe(3);
  });
});

describe("multiply()", () => {
  // Positive cases
  test("multiplies two positive numbers", () => {
    expect(multiply(4, 5)).toBe(20);
  });

  // Negative cases
  test("multiplies positive and negative numbers", () => {
    expect(multiply(4, -5)).toBe(-20);
  });

  test("multiplies two negative numbers", () => {
    expect(multiply(-4, -5)).toBe(20);
  });

  // Edge cases
  test("multiplies by zero", () => {
    expect(multiply(100, 0)).toBe(0);
  });

  test("multiplies by one", () => {
    expect(multiply(100, 1)).toBe(100);
  });

  test("multiplies decimal numbers", () => {
    expect(multiply(2.5, 2)).toBe(5);
  });
});

describe("divide()", () => {
  // Positive cases
  test("divides two positive numbers", () => {
    expect(divide(20, 4)).toBe(5);
  });

  // Negative cases
  test("divides positive by negative", () => {
    expect(divide(20, -4)).toBe(-5);
  });

  test("divides negative by negative", () => {
    expect(divide(-20, -4)).toBe(5);
  });

  // Edge cases
  test("divides zero by a number", () => {
    expect(divide(0, 5)).toBe(0);
  });

  test("divides by one", () => {
    expect(divide(20, 1)).toBe(20);
  });

  test("divides decimal numbers", () => {
    expect(divide(7.5, 2.5)).toBe(3);
  });

  test("throws error when dividing by zero", () => {
    expect(() => divide(10, 0))
      .toThrow("Division by zero");
  });
});