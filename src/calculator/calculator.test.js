import calculator from "./calculator";

describe("Calculator Add Operator Test", () => {
  // Add operator
  test("1 + 2 should return 3", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test("-4 + 2 should return -2", () => {
    expect(calculator.add(-4, 2)).toBe(-2);
  });

  test("0.1 + 0.2 should return 0.3 or be close to 0.3", () => {
    expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
  });

  test("'1' + 2 should return 'Not a number params exist.'", () => {
    expect(calculator.add("1", 2)).toBe("Not a number params exist.");
  });

  test("1 + '2' should return 'Not a number params exist.'", () => {
    expect(calculator.add(1, "2")).toBe("Not a number params exist.");
  });

  test("'1' + '2' should return 'Not a number params exist.'", () => {
    expect(calculator.add("1", "2")).toBe("Not a number params exist.");
  });

  test("single parameter (-2) should return itself (-2)", () => {
    expect(calculator.add(-2)).toBe(-2);
  });

  test("no params should return 0", () => {
    expect(calculator.add()).toBe(0);
  });
});

describe("Calculator Substract Operator Test", () => {
  // Substract operator
  test("1 - 2 should return -1", () => {
    expect(calculator.subtract(1, 2)).toBe(-1);
  });

  test("2 - (-4) should return 6", () => {
    expect(calculator.subtract(2, -4)).toBe(6);
  });

  test("0.1 - 0.2 should return -0.1 or be close to -0.1", () => {
    expect(calculator.subtract(0.1, 0.2)).toBeCloseTo(-0.1);
  });

  test("'1' - 2 should return 'Not a number params exist.'", () => {
    expect(calculator.subtract("1", 2)).toBe("Not a number params exist.");
  });

  test("1 - '2' should return 'Not a number params exist.'", () => {
    expect(calculator.subtract(1, "2")).toBe("Not a number params exist.");
  });

  test("'1' - '2' should return 'Not a number params exist.'", () => {
    expect(calculator.subtract("1", "2")).toBe("Not a number params exist.");
  });

  test("single parameter (-2) should return itself (-2)", () => {
    expect(calculator.subtract(-2)).toBe(-2);
  });

  test("no params should return 0", () => {
    expect(calculator.subtract()).toBe(0);
  });
});

describe("Calculator Divide Operator Test", () => {
  // Divide operator
  test("2 / 2 should return 1", () => {
    expect(calculator.divide(2, 2)).toBe(1);
  });

  test("2 / (-4) should return -0.5", () => {
    expect(calculator.divide(2, -4)).toBeCloseTo(-0.5);
  });

  test("0.1 / 0.2 should return -0.1 or be close to 0.5", () => {
    expect(calculator.divide(0.1, 0.2)).toBeCloseTo(0.5);
  });

  test("2 / 0 should return 'Can't divided by zero.'", () => {
    expect(calculator.divide(2, 0)).toBe("Can't divided by zero.");
  });

  test("'1' / 2 should return 'Not a number params exist.'", () => {
    expect(calculator.divide("1", 2)).toBe("Not a number params exist.");
  });

  test("1 / '2' should return 'Not a number params exist.'", () => {
    expect(calculator.divide(1, "2")).toBe("Not a number params exist.");
  });

  test("'1' / '2' should return 'Not a number params exist.'", () => {
    expect(calculator.divide("1", "2")).toBe("Not a number params exist.");
  });

  test("single parameter (-2) should return itself (-2)", () => {
    expect(calculator.divide(-2)).toBe(-2);
  });

  test("no params should return 0", () => {
    expect(calculator.divide()).toBe(0);
  });
});

describe("Calculator Multiply Operator Test", () => {
  // Multiply operator
  test("1 * 2 should return 2", () => {
    expect(calculator.multiply(1, 2)).toBe(2);
  });

  test("2 * (-4) should return -0.5", () => {
    expect(calculator.multiply(2, -4)).toBe(-8);
  });

  test("0.1 * 0.2 should return -0.1 or be close to 0.5", () => {
    expect(calculator.multiply(0.1, 0.2)).toBeCloseTo(0.02);
  });

  test("'1' * 2 should return 'Not a number params exist.'", () => {
    expect(calculator.multiply("1", 2)).toBe("Not a number params exist.");
  });

  test("1 * '2' should return 'Not a number params exist.'", () => {
    expect(calculator.multiply(1, "2")).toBe("Not a number params exist.");
  });

  test("'1' * '2' should return 'Not a number params exist.'", () => {
    expect(calculator.multiply("1", "2")).toBe("Not a number params exist.");
  });

  test("single parameter (-2) should return itself (-2)", () => {
    expect(calculator.multiply(-2)).toBe(-2);
  });

  test("no params should return 0", () => {
    expect(calculator.multiply()).toBe(0);
  });
});
