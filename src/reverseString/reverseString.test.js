import reverseString from "./reverseString";

describe("Reverse String Test", () => {
  test("'KvJellyBean' should become 'naeBylleJvK'", () => {
    expect(reverseString("KvJellyBean")).toMatch("naeBylleJvK");
  });

  test("'Kv Jelly Bean' should become 'naeB ylleJ vK'", () => {
    expect(reverseString("Kv Jelly Bean")).toMatch("naeB ylleJ vK");
  });

  test("' Kv' should become ' Kv'", () => {
    expect(reverseString(" Kv")).toMatch("vK ");
  });

  test("'12345' should become '54321'", () => {
    expect(reverseString("12345")).toMatch("54321");
  });

  test("12345 should return 'Not a string.'", () => {
    expect(reverseString(12345)).toMatch("Not a string.");
  });
});
