// @flow
import { definedNonEmptyString } from "./index";

describe("definedNonEmptyString", () => {
  test("returns false on undefined", () => {
    expect(definedNonEmptyString(undefined)).toBeFalsy();
  });

  test("returns false on empty string", () => {
    expect(definedNonEmptyString("")).toBeFalsy();
  });

  test("returns true on string", () => {
    expect(definedNonEmptyString("true")).toBeTruthy();
  });
});
