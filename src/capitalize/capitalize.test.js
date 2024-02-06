import capitalize from "./capitalize";

describe("Capitalize Test", () => {
  test("'kvjellybean' should become 'Kvjellybean'", () => {
    expect(capitalize("kvjellybean")).toMatch("Kvjellybean");
  });

  test("'kvJellyBean' should become 'KvJellyBean'", () => {
    expect(capitalize("kvJellyBean")).toMatch("KvJellyBean");
  });

  test("'KvJellyBean' should become 'KvJellyBean'", () => {
    expect(capitalize("KvJellyBean")).toMatch("KvJellyBean");
  });

  test("'KVJELLYBEAN' should become 'KVJELLYBEAN'", () => {
    expect(capitalize("KVJELLYBEAN")).toMatch("KVJELLYBEAN");
  });

  test("'123kvjellybean' should become '123kvjellybean'", () => {
    expect(capitalize("123kvjellybean")).toMatch("123kvjellybean");
  });

  test("'kvjellybean123' should become 'Kvjellybean123'", () => {
    expect(capitalize("kvjellybean123")).toMatch("Kvjellybean123");
  });

  test("'kv jelly bean' should become 'Kv jelly bean'", () => {
    expect(capitalize("kv jelly bean")).toMatch("Kv jelly bean");
  });

  test("'@kvjellybean' should become '@kvjellybean'", () => {
    expect(capitalize("@kvjellybean")).toMatch("@kvjellybean");
  });

  test("' kvjellybean' should become ' kvjellybean'", () => {
    expect(capitalize(" kvjellybean")).toMatch(" kvjellybean");
  });

  test("123 should return 'Not a string.'", () => {
    expect(capitalize(123)).toMatch("Not a string.");
  });

  test("['kvjelly', 'bean'] should return 'Not a string.'", () => {
    expect(capitalize(["kvjelly", "bean"])).toMatch("Not a string.");
  });

  test("{'kvjelly': 'bean'} should return 'Not a string.'", () => {
    expect(capitalize({ kvjelly: "bean" })).toMatch("Not a string.");
  });
});
