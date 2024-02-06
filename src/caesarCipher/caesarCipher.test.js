import caesarCipher from "./caesarCipher";

describe("Caesar Cipher Test", () => {
  test("Empty params should return 'Not a string.'", () => {
    expect(caesarCipher()).toMatch("Not a string.");
  });

  test("'' with or without shift should return ''", () => {
    expect(caesarCipher("")).toMatch("");
    expect(caesarCipher("", 2)).toMatch("");
  });

  test("'abc' without shift parameter should become 'abc'", () => {
    expect(caesarCipher("abc")).toMatch("abc");
  });

  test("'abc' with shift 0 should become 'abc'", () => {
    expect(caesarCipher("abc", 0)).toMatch("abc");
  });

  test("'abc' with shift 2 should become 'cde'", () => {
    expect(caesarCipher("abc", 2)).toMatch("cde");
  });

  test("'AbC' with shift 2 should become 'CdE'", () => {
    expect(caesarCipher("AbC", 2)).toMatch("CdE");
  });

  test("'AbC Def' with shift 2 should become 'CdE Fgh'", () => {
    expect(caesarCipher("AbC Def", 2)).toMatch("CdE Fgh");
  });

  test("'AbC+Def' with shift 2 should become 'CdE+Fgh'", () => {
    expect(caesarCipher("AbC+Def", 2)).toMatch("CdE+Fgh");
  });

  test("'12345' with shift 2 should become '34567'", () => {
    expect(caesarCipher("12345", 2)).toMatch("34567");
  });

  test("12345 with shift 2 should return 'Not a string.'", () => {
    expect(caesarCipher(12345, 2)).toMatch("Not a string.");
  });

  test("'+-+' with shift 2 should become '+-+'", () => {
    expect(caesarCipher("+-+", 2)).toMatch("+-+");
  });

  test("wrapping z to a with 2 shift", () => {
    expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 2)).toMatch(
      "cdefghijklmnopqrstuvwxyzab"
    );
  });

  test("wrapping z to a, add different case, number and symbol, with shift of 2", () => {
    expect(caesarCipher("A@bc4defghijklmnopqrstuvwxyz-", 2)).toMatch(
      "C@de6fghijklmnopqrstuvwxyzab-"
    );
  });
});
