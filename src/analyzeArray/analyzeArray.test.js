import analyzeArray from "./analyzeArray";

describe("Reverse String Test", () => {
  test("Test", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  test("Test", () => {
    expect(analyzeArray([1, 2, 3])).toEqual({
      average: 2,
      min: 1,
      max: 3,
      length: 3,
    });
  });

  test("Test", () => {
    expect(analyzeArray()).toMatch("Not an array.");
  });

  test("Test", () => {
    expect(analyzeArray("[1,2,3]")).toMatch("Not an array.");
  });

  test("Test", () => {
    expect(analyzeArray(1, 2, 3)).toMatch("Not an array.");
  });

  test("Test", () => {
    expect(analyzeArray([1, "2", 3])).toMatch(
      "Not all array's member is a number."
    );
  });
});
